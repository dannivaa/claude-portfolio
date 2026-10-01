export type ProjectSlug = 'safey' | 'lyxonn' | 'gudfood' | 'skvot';

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
  /** What plays on the homepage card: Danylo's exported video, a CSS motion loop, or a coded concept screen. */
  card:
    | { video: { webm: string; mp4: string; poster: string } }
    | { scene: 'gudfood' | 'skvot' }
    | { concept: 'lyxonn' };
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
    card: {
      video: {
        webm: '/videos/safey-card.webm',
        mp4: '/videos/safey-card.mp4',
        poster: '/videos/safey-card-poster.jpg',
      },
    },
  },
  {
    slug: 'lyxonn',
    index: '02',
    name: 'Lyxonn',
    category: 'Internal admin panel',
    year: '2025',
    status: 'Shipped',
    title: 'Order processing with zero room for error',
    summary:
      'Incremental optimization of the admin panel a crypto exchanger’s finance team uses to process orders and send funds.',
    thumbnail: '/images/Lyxonn/lyxonn-thumbnail.png',
    thumbnailAlt: 'Concept recreation of the admin panel: an order queue beside one order ready to send',
    accent: '#0f7a5c',
    stage: ['#d9eee4', '#9cd8bf'],
    brand: { primary: '#0f7a5c', secondary: '#3ccf91', soft: '#e2f3ec' },
    card: { concept: 'lyxonn' },
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
    card: { scene: 'gudfood' },
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
    card: { scene: 'skvot' },
  },
];

/** Client work that can't be shown: a card on the homepage, no case study. */
export type NdaWork = {
  company: string;
  title: string;
  year: string;
  /** Which silhouette the card's blurred placeholder takes. */
  surface: 'mobile' | 'web';
};

export const NDA_WORK: Record<'homecrowd', NdaWork> = {
  homecrowd: { company: 'Homecrowd', title: 'Card-linked rewards for college sports fans', year: '2026', surface: 'mobile' },
};

/** Homepage order, newest first: rows of two, the last card holding the left half. */
export const WORK_ORDER = [
  { kind: 'project', slug: 'safey' },
  { kind: 'project', slug: 'lyxonn' },
  { kind: 'nda', key: 'homecrowd' },
  { kind: 'project', slug: 'gudfood' },
  { kind: 'project', slug: 'skvot' },
] as const;

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
