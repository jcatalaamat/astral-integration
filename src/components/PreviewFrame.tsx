import { useEffect, useRef, useState } from 'react';

interface Props {
  url: string;
  className?: string;
  designWidth?: number;
  designHeight?: number;
  showChrome?: boolean;
  hostname?: string;
  hoverHint?: string;
}

/**
 * Renders a live iframe preview that auto-scales to fill its container.
 * The iframe renders at desktop dimensions (designWidth × designHeight)
 * and is scaled down via CSS transform so the site sees a "real desktop" viewport.
 */
export default function PreviewFrame({
  url,
  className = '',
  designWidth = 1280,
  designHeight = 800,
  showChrome = true,
  hostname,
  hoverHint = 'Open preview →',
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      if (w > 0) setScale(w / designWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  const chromeHeight = showChrome ? 28 : 0;

  return (
    <div ref={wrapperRef} className={`relative w-full overflow-hidden bg-dark-bg ${className}`}>
      {showChrome && (
        <div className="absolute top-0 left-0 right-0 h-7 bg-dark-bg/95 backdrop-blur border-b border-border flex items-center px-3 gap-1.5 z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-content-muted truncate flex-1">
            {hostname || new URL(url).hostname}
          </span>
        </div>
      )}
      <div
        className="absolute left-0 origin-top-left pointer-events-none"
        style={{
          top: chromeHeight,
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
        }}
      >
        <iframe
          src={url}
          className="w-full h-full border-0"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts"
          title={`${hostname || new URL(url).hostname} preview`}
        />
      </div>
      <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/25 transition-all flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
        <span className="px-4 py-2 bg-accent text-white text-meta uppercase tracking-wider rounded-full shadow-glow">
          {hoverHint}
        </span>
      </div>
    </div>
  );
}
