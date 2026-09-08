# Responsive Layout Instructions

## Project stack
- Next.js + TypeScript
- Plain CSS files with namespaced classes (cs- prefix for case study pages)
- No Tailwind, no CSS Modules

## Breakpoints
Always use exactly these three:
- 1024px — tablet
- 768px — mobile  
- 480px — small mobile (only when content actually breaks)

## Rules for every CSS file you touch

1. Never remove or modify existing desktop styles
2. Add all responsive overrides at the bottom of the file inside @media blocks
3. Scale font sizes: ~75% at 1024px, ~60% at 768px
4. Any fixed width (px) on a container → 100% or max-width on mobile
5. flex-direction: row layouts → flex-direction: column at 768px
6. Fixed height on gallery/image containers → height: auto on mobile
7. If a row of phone frames would be too small to read → overflow-x: auto with flex-shrink: 0 on children
8. Recalculate CSS custom properties (--row-height, --phone-width) at each breakpoint
9. padding values above 48px → halve them at 768px

## When adding new components
Before writing any CSS, ask: how does this look at 375px width?
Write mobile styles alongside desktop styles, not as an afterthought.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
