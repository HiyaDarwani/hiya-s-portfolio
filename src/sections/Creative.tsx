import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks/useParallax';

const textFragments = [
  {
    text: 'There is something poetic about a circuit that works — the logic of the world made visible.',
    source: '— on hardware',
  },
  {
    text: 'Code is writing. Every function is a sentence; every system, a story told in imperatives.',
    source: '— on programming',
  },
  {
    text: 'The best designs are honest about what they are. Clarity is its own form of beauty.',
    source: '— on design',
  },
];

const Creative: React.FC = () => {
  const headerRef = useReveal(0.15);
  const leftRef = useReveal(0.15);
  const rightRef = useReveal(0.1);

  return (
    <section id="creative" className="section creative section--padded-nav" aria-label="Beyond the Circuit — Creative">
      <div className="grain" />
      <div className="scanlines" />
      <div className="creative__texture" aria-hidden="true" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '6%', right: '3%' }}>05</div>

      {/* Hybrid digital clock to analog sine wave graphic */}
      <svg
        style={{ position: 'absolute', top: '18%', right: '2%', width: '35%', opacity: 0.05, pointerEvents: 'none' }}
        viewBox="0 0 500 200"
        aria-hidden="true"
      >
        <path
          d="M0 100 L50 100 L50 30 L100 30 L100 100 L150 100 L150 30 L200 30 C230 30 250 170 280 100 C310 30 330 170 360 100 C390 30 420 170 450 100 L500 100"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="1.2"
        />
        <text x="10" y="20" fontSize="8" fill="#7C3AED" fontFamily="monospace">DIGITAL // ANALOG</text>
      </svg>

      {/* Faint ink/paper texture shapes */}
      <svg
        style={{ position: 'absolute', top: 0, right: 0, width: '40%', opacity: 0.03, pointerEvents: 'none' }}
        viewBox="0 0 400 600"
        aria-hidden="true"
      >
        <ellipse cx="200" cy="300" rx="180" ry="250" fill="#E8E4F0" />
      </svg>
      <svg
        style={{ position: 'absolute', bottom: '10%', left: '5%', width: '20%', opacity: 0.025, pointerEvents: 'none' }}
        viewBox="0 0 200 300"
        aria-hidden="true"
      >
        <ellipse cx="100" cy="150" rx="80" ry="120" fill="#9D97B0" />
      </svg>

      <SectionHeading number="05" title="BEYOND THE CIRCUIT" />

      <div ref={headerRef} className="creative__header">
        <div className="creative__intro">
          <p className="body-large">
            Engineering is a discipline. But thinking, writing, and making are what
            give it soul. This is the other half — where the technical meets the
            expressive.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem 1.2rem', marginTop: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="hud-tag">MEDIUM: NATURAL_LANGUAGE</span>
            <span className="hud-tag">SYNTAX: ESSAYS & POETRY</span>
            <span className="hud-tag">STATUS: CREATIVE_FLOW</span>
          </div>
        </div>
        <div className="creative__roles" aria-label="Creative identities">
          <span className="creative__role">Writer</span>
          <span className="creative__role">Poet</span>
          <span className="creative__role">Thinker</span>
          <span className="creative__role">Maker</span>
        </div>
      </div>

      <div className="creative__body">
        <div ref={leftRef}>
          <p className="creative__statement">
            Thinking at the edges of disciplines.
          </p>
          <p className="creative__text">
            I write — sometimes formally, sometimes just to think through something
            difficult. Language is another kind of system, and I find the same
            satisfaction in a well-structured sentence as in a well-structured
            program.
          </p>
          <p className="creative__text">
            This section will grow as the work does. For now, it exists as a
            placeholder for everything that doesn't fit neatly into a technical
            category — and isn't supposed to.
          </p>
          <p className="creative__text" style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            — original writing, essays, and creative work to be added
          </p>
        </div>

        <div ref={rightRef} className="creative__fragments" aria-label="Writing fragments">
          {textFragments.map((f, i) => (
            <blockquote
              key={i}
              className="creative__fragment"
              data-cursor=""
            >
              {f.text}
              <span className="creative__fragment-source">{f.source}</span>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Floating text elements */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '6%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          color: 'var(--text-primary)',
          opacity: 0.025,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        WRITE
      </div>
    </section>
  );
};

export default Creative;
