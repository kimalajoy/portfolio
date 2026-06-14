import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

type Preset = 'bad' | 'medium' | 'good';
type ScoreState = 'idle' | 'loading' | 'done' | 'error';

interface AuditResult {
  id: string;
  label: string;
  passed: boolean | null;
  tooltip: string;
}

const PRESETS: Record<Preset, { label: string; emoji: string; color: string; issues: string[] }> = {
  bad:    { label: 'Broken',      emoji: '🚨', color: 'bg-error-container text-on-error-container',       issues: ['color-contrast', 'image-alt', 'focus'] },
  medium: { label: 'Partial Fix', emoji: '⚠️', color: 'bg-secondary-container text-on-secondary-container', issues: ['image-alt', 'focus'] },
  good:   { label: 'Accessible',  emoji: '✅', color: 'bg-primary-container text-on-primary-container',    issues: [] },
};

const AUDIT_META: Record<string, { label: string; tooltip: string }> = {
  'color-contrast': {
    label: 'Color Contrast',
    tooltip: 'WCAG 1.4.3 requires a 4.5:1 contrast ratio for normal text. Low contrast is unreadable for users with low vision, in bright sunlight, or on older displays.',
  },
  'image-alt': {
    label: 'Image Alt Text',
    tooltip: 'WCAG 1.1.1 requires meaningful images to have descriptive alt text. Screen readers read this aloud; without it, image content is completely invisible to blind users.',
  },
  'focus': {
    label: 'Focus Indicators',
    tooltip: 'WCAG 2.4.7 requires visible focus indicators. Keyboard-only users and power users rely on the focus ring to know where they are on the page — removing it with outline:none locks them out.',
  },
};

// Simulated scores based on which issues are present in each preset.
// These reflect realistic Lighthouse ranges for these failure combinations.
const SIMULATED_SCORES: Record<Preset, number> = {
  bad:    48,
  medium: 67,
  good:   96,
};

function useAnimatedScore(target: number | null) {
  const [displayed, setDisplayed] = useState<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === null) { setDisplayed(null); return; }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setDisplayed(target); return; }

    const targetNum = target;
    const start = displayed ?? 0;
    const duration = 800;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(start + (targetNum - start) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return displayed;
}

function scoreColor(score: number | null): string {
  if (score === null) return 'text-on-surface-variant';
  if (score >= 90) return 'text-on-primary-fixed-variant';
  if (score >= 50) return 'text-on-secondary-container';
  return 'text-error';
}

interface TooltipState {
  id: string;
  text: string;
  x: number;
  y: number;
}

const AccessibilityLab = () => {
  const [activePreset, setActivePreset] = useState<Preset>('bad');
  const [score, setScore] = useState<number | null>(null);
  const [scoreState, setScoreState] = useState<ScoreState>('idle');
  const [audits, setAudits] = useState<AuditResult[]>([]);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const animatedScore = useAnimatedScore(score);

  const showTooltip = (e: React.MouseEvent | React.FocusEvent, id: string, text: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    // Use viewport-relative coords since the tooltip uses position:fixed
    setTooltip({ id, text, x: rect.right, y: rect.top });
  };

  const hideTooltip = () => setTooltip(null);

  const runSimulation = useCallback((preset: Preset) => {
    setScoreState('loading');
    setScore(null);
    setAudits([]);

    setTimeout(() => {
      const issues = PRESETS[preset].issues;
      setScore(SIMULATED_SCORES[preset]);
      setAudits(Object.entries(AUDIT_META).map(([id, meta]) => ({
        id,
        label: meta.label,
        tooltip: meta.tooltip,
        passed: !issues.includes(id),
      })));
      setScoreState('done');
    }, 1200);
  }, []);

  const handlePresetChange = (preset: Preset) => {
    setActivePreset(preset);
    setScore(null);
    setAudits([]);
    setScoreState('idle');
  };

  const issuesForPreset = PRESETS[activePreset].issues;
  const previewAudits: AuditResult[] = Object.entries(AUDIT_META).map(([id, meta]) => ({
    id,
    label: meta.label,
    tooltip: meta.tooltip,
    passed: scoreState === 'done' ? (audits.find(a => a.id === id)?.passed ?? null) : !issuesForPreset.includes(id),
  }));

  return (
    <>
    <section id="accessibility-lab" className="pattern-waves py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-headline font-extrabold text-4xl md:text-7xl tracking-tight text-on-surface mb-6">
          Accessibility <span className="heading-accent">Lab</span>
        </h2>
        <p className="font-body text-on-surface-variant text-lg mb-12 max-w-2xl">
          Pick a scenario to see how common accessibility issues affect a Lighthouse score. Hover the audit rows to learn why each issue matters.
        </p>

        {/* Preset picker */}
        <div className="flex flex-wrap gap-4 mb-12" role="group" aria-label="Demo scenario">
          {(Object.entries(PRESETS) as [Preset, typeof PRESETS[Preset]][]).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => handlePresetChange(key)}
              aria-pressed={activePreset === key}
              className={`${activePreset === key ? 'btn-primary' : 'btn-secondary'} gap-2`}
            >
              <span aria-hidden="true">{preset.emoji}</span>
              {preset.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">

          {/* Left — iframe preview */}
          <div className="personality-card overflow-hidden flex flex-col">
            <div className="dog-ear bg-tertiary" aria-hidden="true"></div>
            <div className="flex items-center gap-2 px-5 pt-5 pb-3 border-b border-slate-100">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <span className="font-body text-xs text-on-surface-variant truncate">
                /a11y-demo/{activePreset}.html
              </span>
            </div>
            <iframe
              key={activePreset}
              src={`/a11y-demo/${activePreset}.html`}
              title={`${PRESETS[activePreset].label} accessibility demo page`}
              sandbox="allow-same-origin"
              className="w-full flex-1"
              style={{ height: '340px', border: 'none' }}
            />
            <p className="font-body text-xs text-on-surface-variant text-center px-4 py-3 border-t border-slate-100">
              Live preview — interact via the iframe or open in a new tab
            </p>
          </div>

          {/* Right — score + audits + run button */}
          <div className="flex flex-col gap-6">

            {/* Score display */}
            <div className="personality-card-alt p-8 text-center">
              <div className="dog-ear bg-secondary" aria-hidden="true"></div>
              <p
                className={`font-headline font-black text-8xl leading-none mb-2 transition-colors duration-300 ${scoreColor(score)}`}
                aria-live="polite"
                aria-label={animatedScore !== null ? `Lighthouse accessibility score: ${animatedScore}` : 'Score not yet run'}
              >
                {animatedScore !== null ? animatedScore : '—'}
              </p>
              <p className="font-body text-on-surface-variant text-sm">Lighthouse Accessibility Score</p>
              {scoreState === 'done' && score !== null && (
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold font-headline ${PRESETS[activePreset].color}`}>
                  {score >= 90 ? 'Great!' : score >= 50 ? 'Needs work' : 'Critical issues'}
                </span>
              )}
            </div>

            {/* Audit checklist */}
            <div className="personality-card p-6 space-y-4">
              <h3 className="font-headline font-bold text-sm text-on-surface uppercase tracking-widest mb-4">
                Audit Results
              </h3>
              {previewAudits.map(audit => (
                <div key={audit.id} className="relative group flex items-start gap-3">
                  {/* Pass/fail icon */}
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                      audit.passed
                        ? 'bg-primary-container text-on-primary-container'
                        : 'bg-error-container text-on-error-container'
                    }`}
                    aria-hidden="true"
                  >
                    {audit.passed ? '✓' : '✗'}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-on-surface">{audit.label}</p>
                    {scoreState === 'done' && (
                      <p className="font-body text-xs text-on-surface-variant mt-0.5">
                        {audit.passed ? 'Passed' : 'Failed'}
                      </p>
                    )}
                  </div>

                  {/* Info icon — tooltip rendered in a portal to escape card bounds */}
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-surface-container-high text-on-surface-variant text-xs flex items-center justify-center cursor-help mt-0.5"
                    aria-label={`Info: ${audit.tooltip}`}
                    tabIndex={0}
                    onMouseEnter={e => showTooltip(e, audit.id, audit.tooltip)}
                    onMouseLeave={hideTooltip}
                    onFocus={e => showTooltip(e, audit.id, audit.tooltip)}
                    onBlur={hideTooltip}
                  >
                    ?
                  </span>
                </div>
              ))}
            </div>

            {/* Run button + feedback */}
            <div className="space-y-3">
              <button
                onClick={() => runSimulation(activePreset)}
                disabled={scoreState === 'loading'}
                className={`w-full ${scoreState === 'loading' ? 'opacity-60 cursor-not-allowed bg-surface-container text-on-surface-variant py-3 px-6 rounded-full font-headline font-bold' : 'btn-primary'}`}
              >
                {scoreState === 'loading' ? 'Analyzing…' : 'Run Audit'}
              </button>

              <p className="font-body text-xs text-on-surface-variant text-center">
                Scores are representative of real{' '}
                <a
                  href="https://developer.chrome.com/docs/lighthouse/accessibility/scoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-on-primary-fixed-variant transition-colors"
                >
                  Lighthouse accessibility
                </a>
                {' '}results for these issue combinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Tooltip portal — rendered at document.body level, escapes all parent stacking contexts */}
    {tooltip && createPortal(
      <div
        role="tooltip"
        className="pointer-events-none fixed z-[9999] w-64"
        style={{ right: `calc(100vw - ${tooltip.x}px + 8px)`, top: tooltip.y, transform: 'translateY(-100%) translateY(-8px)' }}
      >
        <div className="bg-slate-800 text-white font-body text-sm leading-relaxed p-4 rounded-xl shadow-xl">
          {tooltip.text}
        </div>
        <div className="absolute right-3 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
      </div>,
      document.body
    )}
    </>
  );
};

export default AccessibilityLab;
