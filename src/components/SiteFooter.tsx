import { CV_URL, EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@/lib/site';

const LINKS = [
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'Instagram', href: INSTAGRAM_URL },
  { label: 'Resume', href: CV_URL },
];

export default function SiteFooter() {
  return (
    <footer className="ed-footer">
      <p className="ed-label">Say hi</p>
      <a href={`mailto:${EMAIL}`} className="ed-footer__email">
        {EMAIL}
      </a>

      <div className="ed-footer__bottom">
        <ul className="ed-footer__links">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="ed-footer__note">
          <span className="ed-footer__flag" aria-hidden="true" />
          Kyiv, Ukraine. Designed by Danylo, built with Claude Code.
        </p>
      </div>
    </footer>
  );
}
