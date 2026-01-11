interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
      {children}
    </p>
  );
}
