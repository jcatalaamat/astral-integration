import type { ScaleRange, TimelineRange } from '../types';
import { scaleOptions, timelineOptions } from '../wizardData';

interface Props {
  scale: ScaleRange | null;
  timeline: TimelineRange | null;
  onScaleChange: (s: ScaleRange) => void;
  onTimelineChange: (t: TimelineRange) => void;
}

export default function StepScaleTimeline({ scale, timeline, onScaleChange, onTimelineChange }: Props) {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-body-sm text-content-muted mb-4">How big are you thinking?</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {scaleOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onScaleChange(opt.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                scale === opt.id
                  ? 'border-accent bg-accent-glow'
                  : 'border-border bg-dark-card hover:border-border-hover'
              }`}
            >
              <h4 className="text-body-sm font-medium text-content-primary">{opt.label}</h4>
              <p className="text-body-sm text-content-muted">{opt.desc}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-body-sm text-content-muted mb-4">When do you need this?</p>
        <div className="flex flex-wrap gap-3">
          {timelineOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onTimelineChange(opt.id)}
              className={`px-5 py-3 rounded-full border text-body-sm transition-all ${
                timeline === opt.id
                  ? 'border-accent bg-accent-glow text-content-primary'
                  : 'border-border bg-dark-card hover:border-border-hover text-content-secondary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
