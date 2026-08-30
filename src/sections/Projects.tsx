import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks/useParallax';

gsap.registerPlugin(ScrollTrigger);

/* ── Catalyst device screen content ─────────────────── */
const CatalystScreen: React.FC = () => (
  <div style={{ padding: '1rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
    {/* Status bar */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--text-muted)' }}>9:41</span>
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <span className="hud-led" style={{ width: '4px', height: '4px' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--text-muted)' }}>▬▬▬</span>
      </div>
    </div>
    {/* App title */}
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--accent-violet)', letterSpacing: '0.15em' }}>
      CATALYST
    </div>
    {/* Team match card */}
    <div style={{
      border: '1px solid rgba(124,58,237,0.3)', borderRadius: '4px',
      padding: '0.5rem', background: 'rgba(124,58,237,0.05)'
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--accent-purple)', marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between' }}>
        <span>TEAM MATCH — 94%</span>
        <span style={{ color: 'var(--accent-blue)' }}>VERIFIED</span>
      </div>
      <div style={{ display: 'flex', gap: '0.3rem' }}>
        {['ML', 'UI', 'BE', 'HW'].map(r => (
          <span key={r} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.38rem',
            color: 'var(--text-muted)', border: '1px solid rgba(124,58,237,0.2)',
            padding: '0.15rem 0.3rem', borderRadius: '2px'
          }}>{r}</span>
        ))}
      </div>
    </div>
    {/* Skill bars */}
    {[['Python', 0.85], ['Flutter', 0.72], ['Hardware', 0.9]].map(([skill, pct]) => (
      <div key={String(skill)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.15rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.38rem', color: 'var(--text-muted)' }}>{skill}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.38rem', color: 'var(--accent-violet)' }}>{Math.round(Number(pct)*100)}%</span>
        </div>
        <div style={{ height: '2px', background: 'rgba(124,58,237,0.15)', borderRadius: '2px' }}>
          <div style={{ height: '100%', width: `${Number(pct)*100}%`, background: 'var(--accent-violet)', borderRadius: '2px' }} />
        </div>
      </div>
    ))}
    {/* Bottom nav dots */}
    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.3rem', justifyContent: 'center' }}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{
          width: i === 1 ? '12px' : '5px', height: '5px',
          borderRadius: '3px', background: i === 1 ? 'var(--accent-violet)' : 'rgba(124,58,237,0.2)'
        }} />
      ))}
    </div>
  </div>
);

/* ── Catalyst hero composition ───────────────────────── */
const CatalystComposition: React.FC = () => {
  const deviceRef = useRef<HTMLDivElement>(null);
  const frag1Ref = useRef<HTMLDivElement>(null);
  const frag2Ref = useRef<HTMLDivElement>(null);
  const frag3Ref = useRef<HTMLDivElement>(null);
  const frag4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [deviceRef.current, frag1Ref.current, frag2Ref.current, frag3Ref.current, frag4Ref.current];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !deviceRef.current) return;

    gsap.fromTo(
      els.filter(Boolean),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: {
          trigger: deviceRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Floating animation on device
    gsap.to(deviceRef.current, {
      y: -10,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="catalyst__visual">
      {/* Schematic lines behind device */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
        viewBox="0 0 400 500"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="500" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="200" cy="250" r="80" fill="none" stroke="#7C3AED" strokeWidth="0.5" />
        <circle cx="200" cy="250" r="140" fill="none" stroke="#7C3AED" strokeWidth="0.4" opacity="0.5" />
      </svg>

      {/* Phone device */}
      <div ref={deviceRef} className="catalyst__device">
        <div className="catalyst__screen">
          <CatalystScreen />
        </div>
        {/* Notch */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: 50, height: 10, background: 'var(--bg-base)', borderRadius: '0 0 8px 8px'
        }} />
      </div>

      {/* UI fragments floating around device */}
      <div
        ref={frag1Ref}
        className="catalyst__ui-fragment"
        style={{ top: '12%', right: '4%' }}
      >
        <span className="hud-led" style={{ marginRight: '6px' }} />
        GITHUB VERIFIED ✓
      </div>
      <div
        ref={frag2Ref}
        className="catalyst__ui-fragment"
        style={{ bottom: '22%', left: '2%' }}
      >
        SKILL GAP: NONE
      </div>
      <div
        ref={frag3Ref}
        className="catalyst__ui-fragment"
        style={{ top: '40%', right: '0%' }}
      >
        TEAM BALANCE: OPTIMAL
      </div>
      <div
        ref={frag4Ref}
        className="catalyst__ui-fragment"
        style={{ bottom: '10%', left: '15%' }}
      >
        RECO_MODEL: COSINE_v2
      </div>

      {/* Technical annotations */}
      <div className="catalyst__annotation" style={{ top: '8%', left: '10%' }}>
        v1.0.0 — MOBILE
      </div>
      <div className="catalyst__annotation" style={{ bottom: '12%', right: '8%' }}>
        FIREBASE / FLUTTER
      </div>
    </div>
  );
};

/* ── Placeholder project card ────────────────────────── */
const PlaceholderCard: React.FC<{ title: string; index: string }> = ({ title, index }) => {
  const ref = useReveal(0.15);
  return (
    <div ref={ref} className="project-placeholder">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="label-index">{index} / UPCOMING</span>
        <span className="hud-tag">CONCEPT</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
        — details to follow —
      </p>
    </div>
  );
};

/* ── Projects section ────────────────────────────────── */
const Projects: React.FC = () => {
  const introRef = useReveal(0.2);
  const catalystInfoRef = useReveal(0.15);

  return (
    <section id="projects" className="section projects section--padded-nav" aria-label="Projects">
      <div className="grain" />
      <div className="scanlines" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '10%', right: '4%' }}>03</div>

      <SectionHeading number="03" title="PROJECTS" />

      {/* Catalyst — featured hero */}
      <div className="catalyst" aria-label="Featured project: Catalyst">
        <div className="catalyst__composition">
          {/* Left: visual composition */}
          <CatalystComposition />

          {/* Right: project information */}
          <div ref={catalystInfoRef} className="catalyst__info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="catalyst__tag">FEATURED PROJECT — 2024</span>
              <span className="hud-tag">STATUS: COMPLETE</span>
            </div>
            <h3 className="catalyst__title">CATALYST</h3>
            <p className="catalyst__subtitle">
              Skill-Verified Team Matching for Hackathons
            </p>
            <p className="catalyst__desc">
              A mobile application designed to form balanced hackathon teams using
              verified skills and commitment-based compatibility. Catalyst
              intelligently matches participants by analysing skill gaps, role
              distribution, and project preferences — removing the chaos from team
              formation.
            </p>
            <div className="catalyst__tech-list">
              {['Flutter', 'Firebase', 'GitHub Verification', 'Recommendation Engine'].map(t => (
                <span key={t} className="catalyst__tech-item">{t}</span>
              ))}
            </div>
            <div className="catalyst__meta">
              <div className="catalyst__meta-item">
                <strong>TYPE</strong>Mobile App
              </div>
              <div className="catalyst__meta-item">
                <strong>YEAR</strong>2024
              </div>
              <div className="catalyst__meta-item">
                <strong>STATUS</strong>Complete
              </div>
              <div className="catalyst__meta-item">
                <strong>COMMIT_ID</strong>#e8f4a21
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder projects */}
      <div ref={introRef} style={{ marginTop: '1rem' }}>
        <p className="label-mono" style={{ marginBottom: '1.5rem', opacity: 0.5 }}>
          MORE PROJECTS —
        </p>
        <div className="projects__grid">
          <PlaceholderCard title="PROJECT_02" index="02" />
          <PlaceholderCard title="PROJECT_03" index="03" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
