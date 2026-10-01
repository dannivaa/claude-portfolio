import '@/styles/card-scenes.css';
import type { Project } from '@/lib/projects';
import { SafeyScene } from '@/components/home/scenes/SafeyScene';
import { QuorraScene } from '@/components/home/scenes/QuorraScene';
import { GudFoodScene } from '@/components/home/scenes/GudFoodScene';
import { SkvotScene } from '@/components/home/scenes/SkvotScene';

/** What each loop shows, for screen readers. */
const LABELS: Record<Project['slug'], string> = {
  safey: 'Safey: tapping Get AI+ opens the paywall, the yearly plan is picked, the free trial starts and the payment goes through',
  quorra: 'Quorra, a concept recreation: an order passes its checks, the card digits are confirmed and the payout is sent',
  gudfood: 'GudFood: the order is delivered, the rating sheet rises, five stars and two tags, and Done turns into a thank-you',
  skvot: 'Skvot: the week roadmap, the task with a deadline opens, the switch moves to homework and the deadline gains a day',
};

/** The coded motion loop on a project's homepage card and case study hero. */
export function ProjectScene({ project }: { project: Project }) {
  const label = LABELS[project.slug];
  switch (project.slug) {
    case 'safey':
      return <SafeyScene project={project} label={label} />;
    case 'quorra':
      return <QuorraScene project={project} label={label} />;
    case 'gudfood':
      return <GudFoodScene project={project} label={label} />;
    case 'skvot':
      return <SkvotScene project={project} label={label} />;
  }
}
