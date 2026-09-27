'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type TextureSource = { src: string; width: number };

type ChromaticImageProps = {
  /** Fallback / LCP image. Also what shows before WebGL is ready and when it's disabled. */
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
  /** Candidate textures for the WebGL layer; the smallest one covering the canvas is used. */
  textures?: TextureSource[];
  /** 'pointer' follows the cursor, 'ambient' drifts on its own, 'off' renders the plain image. */
  mode?: 'pointer' | 'ambient' | 'off';
  /** Max RGB split in UV units at the centre of the lens. */
  intensity?: number;
  /** Lens radius as a fraction of the canvas height. */
  radius?: number;
  maxPixelRatio?: number;
  className?: string;
};

const VERTEX = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uRes;
uniform vec2 uImg;
uniform vec2 uMouse;
uniform vec2 uVel;
uniform float uStrength;
uniform float uIntensity;
uniform float uRadius;

// object-fit: cover, centred — must match the <img> underneath so the fade-in is seamless.
vec2 cover(vec2 uv) {
  float rs = uRes.x / uRes.y;
  float ri = uImg.x / uImg.y;
  vec2 scale = rs > ri ? vec2(1.0, ri / rs) : vec2(rs / ri, 1.0);
  return (uv - 0.5) * scale + 0.5;
}

void main() {
  float aspect = uRes.x / uRes.y;
  vec2 d = vUv - uMouse;
  d.x *= aspect;
  float r = uRadius;
  float falloff = exp(-dot(d, d) / (r * r)) * uStrength;

  vec2 dir = length(d) > 0.0001 ? normalize(d) : vec2(0.0);
  dir.x /= aspect;
  vec2 shift = dir * falloff * uIntensity + uVel * falloff;

  // Slight lens bulge so the split reads as glass, not a glitch.
  vec2 uv = vUv - d * vec2(1.0 / aspect, 1.0) * falloff * 0.04;

  float cr = texture2D(uTex, cover(uv + shift)).r;
  float cg = texture2D(uTex, cover(uv)).g;
  float cb = texture2D(uTex, cover(uv - shift)).b;
  gl_FragColor = vec4(cr, cg, cb, 1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ChromaticImage({
  src,
  srcSet,
  sizes = '100vw',
  alt = '',
  textures,
  mode = 'pointer',
  intensity = 0.018,
  radius = 0.35,
  maxPixelRatio = 2,
  className,
}: ChromaticImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || mode === 'off' || !textures?.length) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(program, name);
    const uRes = u('uRes');
    const uImg = u('uImg');
    const uMouse = u('uMouse');
    const uVel = u('uVel');
    const uStrength = u('uStrength');
    gl.uniform1f(u('uIntensity'), intensity);
    gl.uniform1f(u('uRadius'), radius);
    gl.uniform1i(u('uTex'), 0);

    let disposed = false;
    let hasTexture = false;
    let raf = 0;
    let visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, maxPixelRatio);

    // Eased state; targets are set by input, current values chase them every frame.
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const vel = { x: 0, y: 0 };
    let strength = 0;
    let targetStrength = mode === 'ambient' ? 0.8 : 0;
    const start = performance.now();

    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
      kick();
    };

    const frame = () => {
      raf = 0;
      if (disposed || !hasTexture) return;

      if (mode === 'ambient') {
        const t = (performance.now() - start) / 1000;
        mouse.tx = 0.5 + Math.sin(t * 0.21) * 0.32;
        mouse.ty = 0.5 + Math.sin(t * 0.13 + 1.3) * 0.28;
      }

      const px = mouse.x;
      const py = mouse.y;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      // Pointer velocity smears the split along the direction of travel.
      vel.x += ((mouse.x - px) * 0.6 - vel.x) * 0.15;
      vel.y += ((mouse.y - py) * 0.6 - vel.y) * 0.15;
      strength += (targetStrength - strength) * 0.06;

      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform2f(uVel, vel.x, vel.y);
      gl.uniform1f(uStrength, strength);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      const settled =
        mode !== 'ambient' &&
        Math.abs(targetStrength - strength) < 0.001 &&
        Math.abs(mouse.tx - mouse.x) < 0.0005 &&
        Math.abs(mouse.ty - mouse.y) < 0.0005 &&
        Math.abs(vel.x) + Math.abs(vel.y) < 0.00005;
      if (!settled && visible) raf = requestAnimationFrame(frame);
    };

    function kick() {
      if (!raf && visible && hasTexture && !disposed) raf = requestAnimationFrame(frame);
    }

    // Smallest texture that still covers the canvas at device resolution.
    const needed = canvas.clientWidth * dpr;
    const sorted = [...textures].sort((a, b) => a.width - b.width);
    const pick = sorted.find((t) => t.width >= needed) ?? sorted[sorted.length - 1];

    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      if (disposed) return;
      const tex = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
      gl.uniform2f(uImg, image.naturalWidth, image.naturalHeight);
      hasTexture = true;
      resize();
      // Draw once before revealing so the canvas never flashes black over the <img>.
      frame();
      setReady(true);
    };
    image.src = pick.src;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      targetStrength = inside ? 1 : 0;
      if (inside) {
        mouse.tx = x;
        mouse.ty = 1 - y;
      }
      kick();
    };
    const onPointerOut = (e: PointerEvent) => {
      if (e.relatedTarget) return;
      targetStrength = 0;
      kick();
    };

    if (mode === 'pointer') {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('pointerout', onPointerOut);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      if (visible) kick();
    });
    io.observe(canvas);

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) kick();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onContextLost = (e: Event) => {
      e.preventDefault();
      hasTexture = false;
      setReady(false);
    };
    canvas.addEventListener('webglcontextlost', onContextLost);

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      image.onload = null;
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerout', onPointerOut);
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      ro.disconnect();
      io.disconnect();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      setReady(false);
    };
  }, [mode, textures, intensity, radius, maxPixelRatio]);

  return (
    <div className={cn('chromatic-image', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="chromatic-image__img" src={src} srcSet={srcSet} sizes={sizes} alt={alt} fetchPriority="high" decoding="async" />
      {mode !== 'off' && (
        <canvas
          // A canvas whose context was lost can't get a new one, so remount per mode.
          key={mode}
          ref={canvasRef}
          className={cn('chromatic-image__canvas', ready && 'is-ready')}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
