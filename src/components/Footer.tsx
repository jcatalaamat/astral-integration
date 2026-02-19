export default function Footer() {
  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jcamat/', icon: 'in' },
    { label: 'GitHub', href: 'https://github.com/jcatalaamat', icon: 'gh' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-dark-bg">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-serif text-xl font-light tracking-wide text-content-muted"
            >
              Astral <em className="italic text-accent/60">Integration</em>
            </a>
            <p className="text-body-sm text-content-muted mt-4 max-w-[280px]">
              Custom AI-powered platforms for healers, coaches, retreat centers, and conscious businesses.
            </p>
            <p className="text-body-sm text-content-muted mt-4">
              hello@astralintegration.co
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-meta uppercase text-content-muted mb-4 tracking-wider">Navigate</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-body-sm text-content-muted hover:text-accent transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/tools"
                className="text-body-sm text-gold hover:text-gold/80 transition-colors w-fit"
              >
                Free Tools
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-meta uppercase text-content-muted mb-4 tracking-wider">Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-content-muted hover:text-accent transition-colors w-fit inline-flex items-center gap-2"
                >
                  <span className="w-6 h-6 rounded border border-border flex items-center justify-center text-[0.6rem] font-mono uppercase">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-content-muted">
            © {new Date().getFullYear()} Astral Integration. Jordi Amat.
          </p>
          <p className="text-meta text-content-muted">
            Built with care in Mazunte, Oaxaca
          </p>
        </div>
      </div>
    </footer>
  );
}
