export type ProjectSlug = 'safey' | 'gudfood' | 'skvot';

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** Text, cursor and spark colour; dark enough to read on the paper background. */
  accent: string;
  /** Two stops of the soft gradient behind the project's screens, sampled from its thumbnail. */
  stage: [edge: string, center: string];
};

export const PROJECTS: Project[] = [
  {
    slug: 'safey',
    index: '01',
    name: 'Safey',
    category: 'AI companion app',
    year: '2026',
    title: 'Turning conversations into revenue',
    summary:
      'Paywall and brand identity for an AI companion app, modelled on the category’s most efficient monetizer.',
    thumbnail: '/images/Safey/safey-thumbnail.png',
    thumbnailAlt: 'Safey companion profile, character cards and a monthly versus yearly paywall',
    accent: '#1f74b8',
    stage: ['#8fd0e6', '#fdb682'],
  },
  {
    slug: 'gudfood',
    index: '02',
    name: 'GudFood Vdoma',
    category: 'Food delivery app',
    year: '2024',
    title: 'The loop that brought users back',
    summary:
      'A feedback loop that closes the trust gap for a frozen-food delivery service shipping to 26 cities.',
    thumbnail: '/images/GudFood/gudfood-thumbnail.png',
    thumbnailAlt: 'GudFood order card with rate and reorder actions, cuisine categories and dish ratings',
    accent: '#c9530b',
    stage: ['#ffe9ae', '#f6a355'],
  },
  {
    slug: 'skvot',
    index: '03',
    name: 'SKVOT',
    category: 'Education app',
    year: '2024',
    title: 'A bridge between student and lecturer',
    summary:
      'A 0→1 mobile app for Ukraine’s largest pop-culture school, where research cut the “obvious” feature.',
    thumbnail: '/images/Skvot/skvot-thumbnail.png',
    thumbnailAlt: 'SKVOT course card, culture article and course progress screens',
    accent: '#141412',
    stage: ['#ececec', '#b9b9ba'],
  },
];

export const UPCOMING = {
  index: '04',
  title: 'One behavioral change, measurable impact',
  thumbnail: '/images/soon-thumbnail.png',
  thumbnailAlt: 'Calorie tracker dashboard with macros and a breakfast log',
  accent: '#7a1fc2',
};

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
