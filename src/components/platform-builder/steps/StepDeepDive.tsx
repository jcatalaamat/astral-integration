import type { DeepDiveData, DeepDiveVariant, SchoolDeepDive, RetreatDeepDive, CoachDeepDive, CreatorDeepDive } from '../types';

interface Props {
  variant: DeepDiveVariant;
  value: DeepDiveData | null;
  onChange: (data: DeepDiveData) => void;
}

export default function StepDeepDive({ variant, value, onChange }: Props) {
  if (variant === 'school') return <SchoolForm data={value?.variant === 'school' ? value.data : null} onChange={(d) => onChange({ variant: 'school', data: d })} />;
  if (variant === 'retreat') return <RetreatForm data={value?.variant === 'retreat' ? value.data : null} onChange={(d) => onChange({ variant: 'retreat', data: d })} />;
  if (variant === 'coach') return <CoachForm data={value?.variant === 'coach' ? value.data : null} onChange={(d) => onChange({ variant: 'coach', data: d })} />;
  return <CreatorForm data={value?.variant === 'creator' ? value.data : null} onChange={(d) => onChange({ variant: 'creator', data: d })} />;
}

// Shared pill selector
function PillSelect<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="mb-6">
      <p className="text-body-sm text-content-muted mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`px-4 py-2 rounded-full border text-body-sm transition-all ${
              value === opt.id
                ? 'border-accent bg-accent-glow text-content-primary'
                : 'border-border bg-dark-card hover:border-border-hover text-content-secondary'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MultiPillSelect<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T[];
  onChange: (v: T[]) => void;
}) {
  const toggle = (id: T) => onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  return (
    <div className="mb-6">
      <p className="text-body-sm text-content-muted mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => toggle(opt.id)}
            className={`px-4 py-2 rounded-full border text-body-sm transition-all ${
              value.includes(opt.id)
                ? 'border-accent bg-accent-glow text-content-primary'
                : 'border-border bg-dark-card hover:border-border-hover text-content-secondary'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function BoolSelect({ label, value, onChange }: { label: string; value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="mb-6">
      <p className="text-body-sm text-content-muted mb-3">{label}</p>
      <div className="flex gap-2">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            onClick={() => onChange(v)}
            className={`px-5 py-2 rounded-full border text-body-sm transition-all ${
              value === v
                ? 'border-accent bg-accent-glow text-content-primary'
                : 'border-border bg-dark-card hover:border-border-hover text-content-secondary'
            }`}
          >
            {v ? 'Yes' : 'No'}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Variant Forms ---

const defaultSchool: SchoolDeepDive = { certLevels: null, studentCount: null, cohortStructure: null, hasPrerequisites: null, needsPracticeTracking: null };

function SchoolForm({ data, onChange }: { data: SchoolDeepDive | null; onChange: (d: SchoolDeepDive) => void }) {
  const d = data || defaultSchool;
  const update = (patch: Partial<SchoolDeepDive>) => onChange({ ...d, ...patch });

  return (
    <div>
      <PillSelect label="How many certification levels?" options={[{ id: '1-2' as const, label: '1–2' }, { id: '3-4' as const, label: '3–4' }, { id: '5+' as const, label: '5+' }]} value={d.certLevels} onChange={(v) => update({ certLevels: v })} />
      <PillSelect label="Approximate student count?" options={[{ id: 'just-starting' as const, label: 'Just starting' }, { id: 'small' as const, label: 'Under 50' }, { id: 'growing' as const, label: '50–200' }, { id: 'established' as const, label: '200–500' }, { id: 'scaling' as const, label: '500+' }]} value={d.studentCount} onChange={(v) => update({ studentCount: v })} />
      <PillSelect label="Cohort structure?" options={[{ id: 'rolling' as const, label: 'Rolling enrollment' }, { id: 'cohort-based' as const, label: 'Cohort-based' }, { id: 'self-paced' as const, label: 'Self-paced' }, { id: 'hybrid' as const, label: 'Hybrid' }]} value={d.cohortStructure} onChange={(v) => update({ cohortStructure: v })} />
      <BoolSelect label="Need prerequisites between levels?" value={d.hasPrerequisites} onChange={(v) => update({ hasPrerequisites: v })} />
      <BoolSelect label="Need practice hour tracking?" value={d.needsPracticeTracking} onChange={(v) => update({ needsPracticeTracking: v })} />
    </div>
  );
}

const defaultRetreat: RetreatDeepDive = { hasBooking: null, hasAccommodations: null, hasEvents: null, capacity: null, seasonality: null };

function RetreatForm({ data, onChange }: { data: RetreatDeepDive | null; onChange: (d: RetreatDeepDive) => void }) {
  const d = data || defaultRetreat;
  const update = (patch: Partial<RetreatDeepDive>) => onChange({ ...d, ...patch });

  return (
    <div>
      <BoolSelect label="Do you need booking/scheduling?" value={d.hasBooking} onChange={(v) => update({ hasBooking: v })} />
      <BoolSelect label="Do you offer accommodations/stays?" value={d.hasAccommodations} onChange={(v) => update({ hasAccommodations: v })} />
      <BoolSelect label="Do you host events/workshops?" value={d.hasEvents} onChange={(v) => update({ hasEvents: v })} />
      <PillSelect label="What's your capacity?" options={[{ id: 'intimate' as const, label: 'Intimate (1–10)' }, { id: 'small' as const, label: 'Small (10–30)' }, { id: 'medium' as const, label: 'Medium (30–100)' }, { id: 'large' as const, label: 'Large (100+)' }]} value={d.capacity} onChange={(v) => update({ capacity: v })} />
      <PillSelect label="Seasonality?" options={[{ id: 'year-round' as const, label: 'Year-round' }, { id: 'seasonal' as const, label: 'Seasonal' }, { id: 'event-based' as const, label: 'Event-based' }]} value={d.seasonality} onChange={(v) => update({ seasonality: v })} />
    </div>
  );
}

const defaultCoach: CoachDeepDive = { sessionTypes: [], clientCount: null, contentNeeds: [] };

function CoachForm({ data, onChange }: { data: CoachDeepDive | null; onChange: (d: CoachDeepDive) => void }) {
  const d = data || defaultCoach;
  const update = (patch: Partial<CoachDeepDive>) => onChange({ ...d, ...patch });

  return (
    <div>
      <MultiPillSelect label="Session types?" options={[{ id: '1on1' as const, label: '1:1' }, { id: 'group' as const, label: 'Group' }, { id: 'workshop' as const, label: 'Workshops' }, { id: 'intensive' as const, label: 'Intensives' }, { id: 'online-course' as const, label: 'Online courses' }]} value={d.sessionTypes} onChange={(v) => update({ sessionTypes: v })} />
      <PillSelect label="Active client count?" options={[{ id: 'just-starting' as const, label: 'Just starting' }, { id: 'small' as const, label: 'Under 20' }, { id: 'growing' as const, label: '20–50' }, { id: 'established' as const, label: '50–100' }, { id: 'scaling' as const, label: '100+' }]} value={d.clientCount} onChange={(v) => update({ clientCount: v })} />
      <MultiPillSelect label="Content needs?" options={[{ id: 'blog' as const, label: 'Blog' }, { id: 'video' as const, label: 'Video' }, { id: 'podcast' as const, label: 'Podcast' }, { id: 'newsletter' as const, label: 'Newsletter' }, { id: 'journal-prompts' as const, label: 'Journal prompts' }]} value={d.contentNeeds} onChange={(v) => update({ contentNeeds: v })} />
    </div>
  );
}

const defaultCreator: CreatorDeepDive = { audienceSize: null, contentTypes: [], monetization: [] };

function CreatorForm({ data, onChange }: { data: CreatorDeepDive | null; onChange: (d: CreatorDeepDive) => void }) {
  const d = data || defaultCreator;
  const update = (patch: Partial<CreatorDeepDive>) => onChange({ ...d, ...patch });

  return (
    <div>
      <PillSelect label="Audience size?" options={[{ id: 'just-starting' as const, label: 'Building' }, { id: 'small' as const, label: 'Under 1K' }, { id: 'growing' as const, label: '1K–10K' }, { id: 'established' as const, label: '10K–50K' }, { id: 'scaling' as const, label: '50K+' }]} value={d.audienceSize} onChange={(v) => update({ audienceSize: v })} />
      <MultiPillSelect label="Content/product types?" options={[{ id: 'courses' as const, label: 'Courses' }, { id: 'membership' as const, label: 'Membership' }, { id: 'downloads' as const, label: 'Downloads' }, { id: 'merch' as const, label: 'Merch' }, { id: 'live-events' as const, label: 'Live events' }, { id: 'coaching' as const, label: 'Coaching' }]} value={d.contentTypes} onChange={(v) => update({ contentTypes: v })} />
      <MultiPillSelect label="Revenue model?" options={[{ id: 'subscriptions' as const, label: 'Subscriptions' }, { id: 'one-time' as const, label: 'One-time purchases' }, { id: 'sponsorships' as const, label: 'Sponsorships' }, { id: 'tips' as const, label: 'Tips/donations' }, { id: 'services' as const, label: 'Services' }]} value={d.monetization} onChange={(v) => update({ monetization: v })} />
    </div>
  );
}
