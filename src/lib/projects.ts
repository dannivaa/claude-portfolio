export type ProjectSlug = 'safey' | 'quorra' | 'gudfood' | 'skvot';

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  category: string;
  year: string;
  /** Where the work ended up, shown before the year on the homepage card (e.g. "Handed off 2024"). */
  status: string;
  title: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** Text, cursor and spark colour; dark enough to read on the paper background. */
  accent: string;
  /** Two stops of the soft gradient behind the project's screens, sampled from its thumbnail. */
  stage: [edge: string, center: string];
  /** Colours the case study's research visuals are drawn in: a primary, a secondary for highlights, a soft tint. */
  brand: { primary: string; secondary: string; soft: string };
};

export const PROJECTS: Project[] = [
  {
    slug: 'safey',
    index: '01',
    name: 'Safey',
    category: 'AI companion app',
    year: '2026',
    status: 'Concept',
    title: 'Turning conversations into revenue',
    summary:
      'Paywall and brand identity for an AI companion app, modelled on the category’s most efficient monetizer.',
    thumbnail: '/images/Safey/safey-thumbnail.png',
    thumbnailAlt: 'Safey companion profile, character cards and a monthly versus yearly paywall',
    accent: '#1f74b8',
    stage: ['#8fd0e6', '#fdb682'],
    brand: { primary: '#1f74b8', secondary: '#f2873f', soft: '#e4f1fa' },
  },
  {
    slug: 'quorra',
    index: '02',
    name: 'Quorra',
    category: 'Internal admin panel',
    year: '2025',
    status: 'Shipped',
    title: 'Order processing with zero room for error',
    summary:
      'Incremental optimization of the admin panel a crypto exchanger’s finance team uses to process orders and send funds.',
    thumbnail: '/images/Quorra/quorra-thumbnail.png',
    thumbnailAlt: 'Concept recreation of the admin panel: an operations overview with orders per hour and items needing attention',
    accent: '#0f7a5c',
    stage: ['#d9eee4', '#9cd8bf'],
    brand: { primary: '#0f7a5c', secondary: '#3ccf91', soft: '#e2f3ec' },
  },
  {
    slug: 'gudfood',
    index: '03',
    name: 'GudFood Vdoma',
    category: 'Food delivery app',
    year: '2024',
    status: 'Handed off',
    title: 'The loop that brought users back',
    summary:
      'A feedback loop that closes the trust gap for a frozen-food delivery service shipping to 26 cities.',
    thumbnail: '/images/GudFood/gudfood-thumbnail.png',
    thumbnailAlt: 'GudFood order card with rate and reorder actions, cuisine categories and dish ratings',
    accent: '#c9530b',
    stage: ['#ffe9ae', '#f6a355'],
    brand: { primary: '#c9530b', secondary: '#f6a355', soft: '#fdf0e2' },
  },
  {
    slug: 'skvot',
    index: '04',
    name: 'Skvot',
    category: 'Education app',
    year: '2024',
    status: 'Handed off',
    title: 'A bridge between student and lecturer',
    summary:
      'A 0→1 mobile app for Ukraine’s largest pop-culture school, where research cut the “obvious” feature.',
    thumbnail: '/images/Skvot/skvot-thumbnail.png',
    thumbnailAlt: 'Skvot course card, culture article and course progress screens',
    accent: '#141412',
    stage: ['#ececec', '#b9b9ba'],
    brand: { primary: '#8a1cdc', secondary: '#d9ef0a', soft: '#f1e6fc' },
  },
];

export function getProject(slug: ProjectSlug): Project {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}

/** The case study after this one, wrapping around to the first. */
export function getNextProject(slug: ProjectSlug): Project {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
