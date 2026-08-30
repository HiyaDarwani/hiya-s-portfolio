import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks/useParallax';

const textFragments = [
  {
    text: 'There is something poetic about a circuit that works — the logic of the world made visible.',
    caption: 'ON HARDWARE',
  },
  {
    text: 'Code is writing. Every function is a sentence; every system, a story told in imperatives.',
    caption: 'ON PROGRAMMING',
  },
  {
    text: 'The best designs are honest about what they are. Clarity is its own form of beauty.',
    caption: 'ON DESIGN',
  },
];

const Creative: React.FC = () => {
  const introRef = useReveal(0.15);
  const fragmentsRef = useReveal(0.1);

  return (
    <section id="creative" className="section creative section--padded-nav" aria-label="Beyond the Circuit — Creative">
      <div className="grain" />
      <div className="scanlines" />
      <div className="creative__texture" aria-hidden="true" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '6%', right: '3%' }}>05</div>

      {/* Hybrid digital clock to analog sine wave graphic */}
      <svg
        style={{ position: 'absolute', top: '16%', right: '2%', width: '35%', opacity: 0.04, pointerEvents: 'none' }}
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

      <SectionHeading number="05" title="BEYOND THE CIRCUIT" />

      <div ref={introRef} className="creative__intro-block">
        <p className="body-large" style={{ maxWidth: '42rem', marginBottom: '1rem' }}>
          Reflections on systems, syntax, and clarity. Engineering is a discipline, but thinking, writing, and making are what give it soul.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem 1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="hud-tag">MEDIUM: NATURAL_LANGUAGE</span>
          <span className="hud-tag">SYNTAX: REFLECTION</span>
        </div>
      </div>

      <div ref={fragmentsRef} className="creative__editorial-grid">
        {textFragments.map((f, i) => (
          <blockquote key={i} className="creative__editorial-quote">
            <p className="creative__quote-text">"{f.text}"</p>
            <span className="creative__quote-caption">── {f.caption}</span>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Creative;
