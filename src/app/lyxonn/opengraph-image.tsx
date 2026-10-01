import { renderCaseStudyCard } from '@/og/render';
import { getProject } from '@/lib/projects';

const project = getProject('lyxonn');

export const alt = `${project.name} case study: ${project.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return renderCaseStudyCard(project);
}
