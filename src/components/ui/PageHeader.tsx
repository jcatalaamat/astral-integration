interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-display-sm md:text-display text-content-primary mb-8">
            {title}
          </h1>

          {subtitle && (
            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-body text-content-secondary leading-relaxed max-w-prose">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
