interface BulletListProps {
  items: string[];
  className?: string;
}

export default function BulletList({ items, className = '' }: BulletListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="text-body text-content-secondary flex items-start gap-3">
          <span className="text-accent mt-1.5 text-sm">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
