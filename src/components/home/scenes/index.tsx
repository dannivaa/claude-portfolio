import '@/styles/card-scenes.css';
import type { Project } from '@/lib/projects';
import { GudFoodScene } from '@/components/home/scenes/GudFoodScene';
import { SkvotScene } from '@/components/home/scenes/SkvotScene';
import { QuorraScene } from '@/components/home/scenes/QuorraScene';

/** The coded motion for a project's card, keyed by the scene named in its data. */
export function ProjectScene({ project, label }: { project: Project; label: string }) {
  const { card } = project;
  if ('concept' in card) return <QuorraScene project={project} label={label} />;
  if (!('scene' in card)) return null;
  if (card.scene === 'gudfood') return <GudFoodScene project={project} label={label} />;
  return <SkvotScene project={project} label={label} />;
}
