export default function Footer() {
  return (
    <footer className="border-t border-studio-divider bg-studio-bg">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="max-w-prose">
          <p className="text-content-primary text-body font-medium mb-2">
            Astral Integration
          </p>
          <p className="text-content-secondary text-body-sm mb-8">
            A Living Systems Studio
          </p>

          <div className="w-12 h-px bg-studio-divider mb-8"></div>

          <p className="text-content-tertiary text-body-sm leading-relaxed mb-2">
            Founded by <a href="https://jordiamat.com" target="_blank" rel="noopener noreferrer" className="hover:text-content-primary transition-colors">Jordi Amat</a>
          </p>
          <p className="text-content-tertiary text-body-sm">
            Built to ship · Built to scale
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-studio-divider flex items-center justify-between">
          <p className="text-content-tertiary text-body-sm">
            © 2026 Astral Integration
          </p>
          <a
            href="https://instagram.com/astralintegration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-content-tertiary text-body-sm hover:text-content-primary transition-colors"
          >
            @astralintegration
          </a>
        </div>
      </div>
    </footer>
  );
}
