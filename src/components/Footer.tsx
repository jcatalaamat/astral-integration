import { Link } from 'react-router-dom';
import { site } from '../content/site';

export default function Footer() {
  const primaryLinks = [
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Start Here', path: '/start-here' },
  ];

  const secondaryLinks = [
    { label: 'Studio Collaboration', path: '/studio-collaboration' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-studio-divider bg-studio-bg">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <p className="text-content-primary text-body font-medium mb-2">
              {site.name}
            </p>
            <p className="text-content-secondary text-body-sm mb-6">
              {site.footerTagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-content-tertiary text-body-sm hover:text-content-primary transition-colors"
            >
              {site.email}
            </a>
          </div>

          {/* Primary Links */}
          <div>
            <p className="text-content-tertiary text-meta uppercase tracking-wider mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {primaryLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-content-secondary text-body-sm hover:text-content-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links */}
          <div>
            <p className="text-content-tertiary text-meta uppercase tracking-wider mb-4">
              More
            </p>
            <ul className="space-y-2">
              {secondaryLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-content-secondary text-body-sm hover:text-content-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-studio-divider">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-content-tertiary text-body-sm leading-relaxed mb-1">
                Founded and led by{' '}
                <a
                  href={site.founder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-content-primary transition-colors"
                >
                  {site.founder.name}
                </a>
              </p>
              <p className="text-content-tertiary text-body-sm">
                {site.copyright}
              </p>
            </div>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-content-tertiary text-body-sm hover:text-content-primary transition-colors"
            >
              {site.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
