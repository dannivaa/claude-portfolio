export type ProjectSlug = 'safey' | 'gudfood' | 'skvot';

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
  /** What plays on the homepage card: Danylo's exported video, or a CSS motion loop. */
  card: { video: { webm: string; mp4: string; poster: string } } | { scene: 'gudfood' | 'skvot' };
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
    card: {
      video: {
        webm: '/videos/safey-card.webm',
        mp4: '/videos/safey-card.mp4',
        poster: '/videos/safey-card-poster.jpg',
      },
    },
  },
  {
    slug: 'gudfood',
    index: '02',
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
    card: { scene: 'gudfood' },
  },
  {
    slug: 'skvot',
    index: '03',
    name: 'SKVOT',
    category: 'Education app',
    year: '2024',
    status: 'Handed off',
    title: 'A bridge between student and lecturer',
    summary:
      'A 0→1 mobile app for Ukraine’s largest pop-culture school, where research cut the “obvious” feature.',
    thumbnail: '/images/Skvot/skvot-thumbnail.png',
    thumbnailAlt: 'SKVOT course card, culture article and course progress screens',
    accent: '#141412',
    stage: ['#ececec', '#b9b9ba'],
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

export const NDA_WORK: Record<'lyxonn' | 'cake', NdaWork> = {
  lyxonn: { company: 'Lyxonn', title: 'Payments and KYC flows', year: '2026', surface: 'mobile' },
  cake: { company: 'Cake Alliance', title: 'Mobile-first product and design system', year: '2025', surface: 'web' },
};

/** Homepage order: newest first, alternating so the two NDA cards sit on a diagonal. */
export const WORK_ORDER = [
  { kind: 'project', slug: 'safey' },
  { kind: 'nda', key: 'lyxonn' },
  { kind: 'nda', key: 'cake' },
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
