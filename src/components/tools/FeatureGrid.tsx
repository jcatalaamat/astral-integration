import { Tool, ToolFeature } from '../../config/tools';

interface FeatureGridProps {
  tool: Tool;
}

export default function FeatureGrid({ tool }: FeatureGridProps) {
  return (
    <section id="features" className="py-section px-6 md:px-12">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-meta uppercase mb-4 block"
            style={{ color: tool.theme.primary }}
          >
            Features
          </span>
          <h2 className="font-serif text-display-sm text-content-primary mb-4">
            Everything you need
          </h2>
          <p className="text-body text-content-secondary max-w-prose mx-auto">
            Simple, focused, and free. Here's what {tool.name} offers.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tool.featureDetails.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              glowColor={tool.theme.primaryGlow}
            />
          ))}
        </div>

        {/* Free vs Premium */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="p-8 rounded-2xl border border-border bg-dark-card">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                style={{
                  background: tool.theme.primaryGlow,
                  color: tool.theme.primary,
                }}
              >
                Free Forever
              </span>
            </div>
            <h3 className="font-serif text-h3 text-content-primary mb-4">
              Core Features
            </h3>
            <ul className="space-y-3">
              {tool.features.free.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-body-sm text-content-secondary">
                  <span style={{ color: tool.theme.accent }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tier */}
          <div className="p-8 rounded-2xl border border-border bg-dark-card relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: `linear-gradient(135deg, ${tool.theme.primary}, ${tool.theme.accent})`,
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-gold/20 text-gold">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-serif text-h3 text-content-primary mb-4">
                Premium Features
              </h3>
              <ul className="space-y-3">
                {tool.features.premium.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-body-sm text-content-muted">
                    <span className="text-gold">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-body-sm text-content-muted">
                Unlock with your email when ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  glowColor,
}: {
  feature: ToolFeature;
  glowColor: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-border bg-dark-card hover:border-border-hover transition-all group">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
        style={{ background: glowColor }}
      >
        {feature.icon}
      </div>
      <h4 className="text-h4 text-content-primary mb-2">{feature.title}</h4>
      <p className="text-body-sm text-content-secondary">{feature.description}</p>
    </div>
  );
}
