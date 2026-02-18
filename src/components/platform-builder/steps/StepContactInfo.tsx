interface Props {
  name: string;
  email: string;
  notes: string;
  onChange: (field: 'name' | 'email' | 'notes', value: string) => void;
}

export default function StepContactInfo({ name, email, notes, onChange }: Props) {
  return (
    <div className="space-y-6 max-w-lg">
      <div>
        <label className="block text-body-sm text-content-muted mb-3">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Your name"
          className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
        />
      </div>
      <div>
        <label className="block text-body-sm text-content-muted mb-3">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="your@email.com"
          className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
        />
      </div>
      <div>
        <label className="block text-body-sm text-content-muted mb-3">Anything else I should know?</label>
        <textarea
          value={notes}
          onChange={(e) => onChange('notes', e.target.value)}
          placeholder="Tell me about your vision, your audience, what makes your work unique..."
          rows={4}
          className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
        />
      </div>
    </div>
  );
}
