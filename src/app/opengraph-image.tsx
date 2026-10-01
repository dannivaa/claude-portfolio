import { renderHomeCard } from '@/og/render';

export const alt = 'Danylo Ivanov — a product designer obsessed with craft.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderHomeCard();
}
