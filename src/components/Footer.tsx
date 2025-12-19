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
            Founder-led systems work
          </p>
          <p className="text-content-tertiary text-body-sm">
            Limited engagements · By trust & referral
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-studio-divider">
          <p className="text-content-tertiary text-body-sm">
            © {new Date().getFullYear()} Astral Integration
          </p>
        </div>
      </div>
    </footer>
  );
}
