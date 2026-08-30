import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

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

/* ── 02: ResumeRoaster Stage ─────────────────────────── */
const ResumeRoasterStage: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <div className="catalyst__composition">
    {/* Left: AI Resume Roaster visual HUD */}
    <div className="catalyst__visual">
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
        viewBox="0 0 400 500"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="500" stroke="#F97316" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#F97316" strokeWidth="0.5" strokeDasharray="4 8" />
        <rect x="50" y="80" width="300" height="340" fill="none" stroke="#F97316" strokeWidth="0.6" rx="4" />
      </svg>

      {/* AI Score card container */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '210px', height: '340px', border: '1px solid rgba(249,115,22,0.4)',
        borderRadius: '16px', background: 'rgba(13, 13, 18, 0.9)', padding: '1rem',
        display: 'flex', flexDirection: 'column', gap: '0.8rem', boxShadow: '0 0 50px rgba(249,115,22,0.08)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: '#F97316', letterSpacing: '0.15em' }}>
            ROAST_ENGINE // v2
          </span>
          <span className="hud-led" style={{ background: '#F97316', boxShadow: '0 0 6px #F97316' }} />
        </div>

        {/* Score gauge circle */}
        <div style={{
          border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px',
          padding: '0.8rem', textAlign: 'center', background: 'rgba(249,115,22,0.04)'
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
            ATS OVERALL SCORE
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 900, color: '#F97316', lineHeight: 1 }}>
            88<span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/100</span>
          </div>
        </div>

        {/* Evaluation Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {[
            ['IMPACT VERBS', '92%'],
            ['ATS FORMATTING', '86%'],
            ['QUANTIFIED RESULTS', '84%'],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(249,115,22,0.1)', paddingBottom: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--text-muted)' }}>{label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: '#F97316' }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Process pipeline readout */}
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.1em' }}>
          UPLOAD → ANALYZE → SCORE → FEEDBACK
        </div>
      </div>

      {/* Floating HUD fragments */}
      <div className="catalyst__ui-fragment" style={{ top: '10%', right: '2%', borderColor: 'rgba(249,115,22,0.3)' }}>
        CLAUDE_3_5 // PARSED
      </div>
      <div className="catalyst__ui-fragment" style={{ bottom: '15%', left: '0%', borderColor: 'rgba(249,115,22,0.3)' }}>
        MULTI_LAYER_PROMPT
      </div>
      <div className="catalyst__ui-fragment" style={{ top: '42%', right: '-4%', borderColor: 'rgba(249,115,22,0.3)' }}>
        PDF_STREAM // ACTIVE
      </div>
    </div>

    {/* Right: Info */}
    <div className="catalyst__info">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="catalyst__tag" style={{ color: '#F97316' }}>AI RESUME ANALYSIS — 2024</span>
        <span className="hud-tag">STATUS: COMPLETE</span>
      </div>
      <h3 className="catalyst__title">{project.title}</h3>
      <p className="catalyst__subtitle">{project.subtitle}</p>
      <p className="catalyst__desc">{project.description}</p>
      <div className="catalyst__tech-list">
        {project.technologies.map(t => (
          <span key={t} className="catalyst__tech-item" style={{ color: '#F97316', borderColor: 'rgba(249,115,22,0.3)' }}>{t}</span>
        ))}
      </div>
      <div className="catalyst__meta">
        <div className="catalyst__meta-item">
          <strong>TYPE</strong>Full-Stack Web App
        </div>
        <div className="catalyst__meta-item">
          <strong>YEAR</strong>2024
        </div>
        <div className="catalyst__meta-item">
          <strong>STATUS</strong>Complete
        </div>
        <div className="catalyst__meta-item">
          <strong>COMMIT_ID</strong>#r8a402e
        </div>
      </div>
    </div>
  </div>
);

/* ── 03: DocRAG Stage ───────────────────────────────── */
const DocRAGStage: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <div className="catalyst__composition">
    {/* Left: Vector RAG pipeline visual */}
    <div className="catalyst__visual">
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
        viewBox="0 0 400 500"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="500" stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="4 8" />
        <polygon points="200,80 340,380 60,380" fill="none" stroke="#06B6D4" strokeWidth="0.6" />
      </svg>

      {/* RAG pipeline card */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '220px', height: '340px', border: '1px solid rgba(6,182,212,0.4)',
        borderRadius: '16px', background: 'rgba(13, 13, 18, 0.9)', padding: '1rem',
        display: 'flex', flexDirection: 'column', gap: '0.8rem', boxShadow: '0 0 50px rgba(6,182,212,0.08)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>
            VECTOR_STORE // PGVECTOR
          </span>
          <span className="hud-led" style={{ background: 'var(--accent-cyan)', boxShadow: '0 0 6px var(--accent-cyan)' }} />
        </div>

        {/* Vector search readout */}
        <div style={{
          border: '1px solid rgba(6,182,212,0.25)', borderRadius: '6px',
          padding: '0.6rem', background: 'rgba(6,182,212,0.04)'
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
            COSINE SIMILARITY SCORE
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>
            0.892 <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>MATCH</span>
          </div>
        </div>

        {/* Streamed citation box */}
        <div style={{
          border: '1px solid rgba(232,228,240,0.1)', borderRadius: '4px',
          padding: '0.5rem', background: 'rgba(5,5,8,0.8)'
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.2rem' }}>
            SOURCE_CITATION // REF_01
          </span>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            "...retrieval-grounded response isolated to Document_Chunk_48..."
          </p>
        </div>

        {/* Pipeline flow */}
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.1em' }}>
          DOCUMENT ↓ RETRIEVE ↓ GENERATE ↓ CITE
        </div>
      </div>

      {/* Floating HUD fragments */}
      <div className="catalyst__ui-fragment" style={{ top: '12%', right: '0%', borderColor: 'rgba(6,182,212,0.3)' }}>
        JINA_EMBEDDINGS
      </div>
      <div className="catalyst__ui-fragment" style={{ bottom: '18%', left: '0%', borderColor: 'rgba(6,182,212,0.3)' }}>
        SSE_STREAM // ACTIVE
      </div>
      <div className="catalyst__ui-fragment" style={{ top: '45%', right: '-4%', borderColor: 'rgba(6,182,212,0.3)' }}>
        CHUNK_ISOLATED // TRUE
      </div>
    </div>

    {/* Right: Info */}
    <div className="catalyst__info">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="catalyst__tag" style={{ color: 'var(--accent-cyan)' }}>RETRIEVAL-AUGMENTED GENERATION — 2024</span>
        <span className="hud-tag">STATUS: COMPLETE</span>
      </div>
      <h3 className="catalyst__title">{project.title}</h3>
      <p className="catalyst__subtitle">Document-isolated retrieval with streamed, source-grounded responses.</p>
      <p className="catalyst__desc">{project.description}</p>
      <div className="catalyst__tech-list">
        {project.technologies.map(t => (
          <span key={t} className="catalyst__tech-item" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(6,182,212,0.3)' }}>{t}</span>
        ))}
      </div>
      <div className="catalyst__meta">
        <div className="catalyst__meta-item">
          <strong>TYPE</strong>Web Application
        </div>
        <div className="catalyst__meta-item">
          <strong>YEAR</strong>2024
        </div>
        <div className="catalyst__meta-item">
          <strong>STATUS</strong>Complete
        </div>
        <div className="catalyst__meta-item">
          <strong>COMMIT_ID</strong>#d9c02a7
        </div>
      </div>
    </div>
  </div>
);

/* ── 04: OverWatch Stage ─────────────────────────────── */
const OverWatchStage: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <div className="catalyst__composition">
    {/* Left: DSP & Telemetry visualizer */}
    <div className="catalyst__visual">
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
        viewBox="0 0 400 500"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="500" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="200" cy="250" r="120" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
      </svg>

      {/* DSP Telemetry Display container */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '230px', height: '340px', border: '1px solid rgba(56,189,248,0.4)',
        borderRadius: '16px', background: 'rgba(13, 13, 18, 0.9)', padding: '1rem',
        display: 'flex', flexDirection: 'column', gap: '0.7rem', boxShadow: '0 0 50px rgba(56,189,248,0.08)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: '#38BDF8', letterSpacing: '0.15em' }}>
            DSP_DSP // STFT_TELEMETRY
          </span>
          <span className="hud-led" style={{ background: '#38BDF8', boxShadow: '0 0 6px #38BDF8' }} />
        </div>

        {/* Latency badge */}
        <div style={{
          border: '1px solid rgba(56,189,248,0.3)', borderRadius: '6px',
          padding: '0.5rem 0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(56,189,248,0.04)'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.38rem', color: 'var(--text-muted)' }}>DSP LATENCY</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: '#38BDF8', fontWeight: 700 }}>4.2ms</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--accent-purple)', border: '1px solid rgba(192,132,252,0.3)', padding: '0.2rem 0.4rem', borderRadius: '2px' }}>
            CUDA/MPS
          </span>
        </div>

        {/* STFT FFT Spectrogram visualizer bars */}
        <div style={{ height: '90px', display: 'flex', alignItems: 'flex-end', gap: '3px', padding: '0.4rem', background: 'rgba(5,5,8,0.8)', borderRadius: '4px', border: '1px solid rgba(56,189,248,0.15)' }}>
          {[40, 65, 30, 85, 95, 45, 70, 100, 60, 35, 80, 50, 90, 75, 40, 60].map((h, idx) => (
            <div key={idx} style={{
              flex: 1, height: `${h}%`,
              background: idx % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-violet)',
              borderRadius: '1px', opacity: 0.85
            }} />
          ))}
        </div>

        {/* Pipeline readout */}
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.1em' }}>
          AUDIO INPUT ↓ STFT ↓ DSP/ML ↓ TELEMETRY
        </div>
      </div>

      {/* Floating HUD fragments */}
      <div className="catalyst__ui-fragment" style={{ top: '10%', right: '0%', borderColor: 'rgba(56,189,248,0.3)' }}>
        ONNX_RUNTIME // INFER
      </div>
      <div className="catalyst__ui-fragment" style={{ bottom: '15%', left: '0%', borderColor: 'rgba(56,189,248,0.3)' }}>
        CIRCULAR_BUFFER // 512
      </div>
      <div className="catalyst__ui-fragment" style={{ top: '44%', right: '-4%', borderColor: 'rgba(56,189,248,0.3)' }}>
        WIENER_FILTER // ACTIVE
      </div>
    </div>

    {/* Right: Info */}
    <div className="catalyst__info">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="catalyst__tag" style={{ color: '#38BDF8' }}>AUDIO TELEMETRY & DSP — 2024</span>
        <span className="hud-tag">STATUS: COMPLETE</span>
      </div>
      <h3 className="catalyst__title">{project.title}</h3>
      <p className="catalyst__subtitle">Real-time audio processing with DSP, ML inference and telemetry.</p>
      <p className="catalyst__desc">{project.description}</p>
      <div className="catalyst__tech-list">
        {project.technologies.map(t => (
          <span key={t} className="catalyst__tech-item" style={{ color: '#38BDF8', borderColor: 'rgba(56,189,248,0.3)' }}>{t}</span>
        ))}
      </div>
      <div className="catalyst__meta">
        <div className="catalyst__meta-item">
          <strong>TYPE</strong>Systems & Audio DSP
        </div>
        <div className="catalyst__meta-item">
          <strong>YEAR</strong>2024
        </div>
        <div className="catalyst__meta-item">
          <strong>STATUS</strong>Complete
        </div>
        <div className="catalyst__meta-item">
          <strong>COMMIT_ID</strong>#o7w419b
        </div>
      </div>
    </div>
  </div>
);

/* ── 05: J.A.R.V.I.S. Stage ───────────────────────────── */
const JarvisStage: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <div className="catalyst__composition">
    {/* Left: Local AI Agent Loop visual */}
    <div className="catalyst__visual">
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
        viewBox="0 0 400 500"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="500" stroke="#C084FC" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="400" y2="250" stroke="#C084FC" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="200" cy="250" r="130" fill="none" stroke="#C084FC" strokeWidth="0.5" strokeDasharray="8 8" />
      </svg>

      {/* Agent Execution Stage card */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '230px', height: '340px', border: '1px solid rgba(192,132,252,0.4)',
        borderRadius: '16px', background: 'rgba(13, 13, 18, 0.9)', padding: '1rem',
        display: 'flex', flexDirection: 'column', gap: '0.7rem', boxShadow: '0 0 50px rgba(192,132,252,0.08)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--accent-purple)', letterSpacing: '0.15em' }}>
            AGENT_LOOP // OLLAMA
          </span>
          <span className="hud-led" style={{ background: 'var(--accent-purple)', boxShadow: '0 0 6px var(--accent-purple)' }} />
        </div>

        {/* Active Node loop badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          {['OBSERVE', 'UNDERSTAND', 'PLAN', 'ACT', 'VERIFY'].map((step, i) => (
            <div key={step} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.25rem 0.5rem', borderRadius: '2px',
              background: i === 2 ? 'rgba(192,132,252,0.12)' : 'rgba(5,5,8,0.6)',
              border: i === 2 ? '1px solid var(--accent-purple)' : '1px solid rgba(232,228,240,0.05)'
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: i === 2 ? 'var(--accent-purple)' : 'var(--text-muted)' }}>
                0{i + 1} / {step}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.38rem', color: i === 2 ? 'var(--accent-purple)' : 'var(--text-muted)' }}>
                {i === 2 ? 'EXECUTING' : 'READY'}
              </span>
            </div>
          ))}
        </div>

        {/* System Monitor Readout */}
        <div style={{
          border: '1px solid rgba(192,132,252,0.2)', borderRadius: '4px',
          padding: '0.4rem 0.6rem', background: 'rgba(5,5,8,0.8)'
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.38rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>SYSTEM AWARENESS</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--accent-purple)' }}>CPU: 12% | RAM: 4.1GB | ACTIVE: VSCODE</div>
        </div>

        {/* Pipeline readout */}
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.38rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.1em' }}>
          LOCAL AI AGENT
        </div>
      </div>

      {/* Floating HUD fragments */}
      <div className="catalyst__ui-fragment" style={{ top: '10%', right: '0%', borderColor: 'rgba(192,132,252,0.3)' }}>
        OLLAMA // LLAMA3
      </div>
      <div className="catalyst__ui-fragment" style={{ bottom: '15%', left: '0%', borderColor: 'rgba(192,132,252,0.3)' }}>
        SYSTEM_STATE // MONITORED
      </div>
      <div className="catalyst__ui-fragment" style={{ top: '44%', right: '-4%', borderColor: 'rgba(192,132,252,0.3)' }}>
        ACTION_LOOP // VERIFIED
      </div>
    </div>

    {/* Right: Info */}
    <div className="catalyst__info">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="catalyst__tag" style={{ color: 'var(--accent-purple)' }}>LOCAL AI AGENT — 2024</span>
        <span className="hud-tag">STATUS: WIP</span>
      </div>
      <h3 className="catalyst__title">{project.title}</h3>
      <p className="catalyst__subtitle">{project.subtitle}</p>
      <p className="catalyst__desc">{project.description}</p>
      <div className="catalyst__tech-list">
        {project.technologies.map(t => (
          <span key={t} className="catalyst__tech-item" style={{ color: 'var(--accent-purple)', borderColor: 'rgba(192,132,252,0.3)' }}>{t}</span>
        ))}
      </div>
      <div className="catalyst__meta">
        <div className="catalyst__meta-item">
          <strong>TYPE</strong>System Agent / Python
        </div>
        <div className="catalyst__meta-item">
          <strong>YEAR</strong>2024
        </div>
        <div className="catalyst__meta-item">
          <strong>STATUS</strong>In Progress (WIP)
        </div>
        <div className="catalyst__meta-item">
          <strong>COMMIT_ID</strong>#j4a701v
        </div>
      </div>
    </div>
  </div>
);

/* ── Projects section ────────────────────────────────── */
const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  // IntersectionObserver to enable keyboard navigation ONLY when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const changeProject = useCallback(
    (newIndex: number, direction: 'next' | 'prev') => {
      if (newIndex === activeIndex || !stageRef.current) return;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        setActiveIndex(newIndex);
        return;
      }

      const xOffset = direction === 'next' ? -30 : 30;
      gsap.to(stageRef.current, {
        opacity: 0,
        x: xOffset,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(newIndex);
          gsap.fromTo(
            stageRef.current,
            { opacity: 0, x: -xOffset },
            { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
          );
        },
      });
    },
    [activeIndex]
  );

  const goToNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % projects.length;
    changeProject(nextIdx, 'next');
  }, [activeIndex, changeProject]);

  const goToPrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + projects.length) % projects.length;
    changeProject(prevIdx, 'prev');
  }, [activeIndex, changeProject]);

  // Keyboard navigation strictly scoped to when section is in view
  useEffect(() => {
    if (!isIntersecting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isIntersecting, goToNext, goToPrev]);

  // Touch swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const activeProject = projects[activeIndex] || projects[0];

  const renderProjectStage = (project: typeof projects[0]) => {
    switch (project.id) {
      case 'catalyst':
        return (
          <div className="catalyst__composition">
            {/* Left: visual composition */}
            <CatalystComposition />

            {/* Right: project information */}
            <div className="catalyst__info">
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
                {['Flutter', 'Firebase', 'Dart Frog', 'Gemini'].map(t => (
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
        );
      case 'resumeroaster':
        return <ResumeRoasterStage project={project} />;
      case 'docrag':
        return <DocRAGStage project={project} />;
      case 'overwatch':
        return <OverWatchStage project={project} />;
      case 'jarvis':
        return <JarvisStage project={project} />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section projects section--padded-nav"
      aria-label="Projects Showcase"
    >
      <div className="grain" />
      <div className="scanlines" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '10%', right: '4%' }}>03</div>

      <SectionHeading number="03" title="PROJECTS" />

      {/* Technical Index & Step Navigation Bar */}
      <div className="projects__index-bar">
        <div className="projects__index-tabs" role="tablist" aria-label="Select project">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              role="tab"
              aria-selected={idx === activeIndex}
              aria-controls={`project-panel-${proj.id}`}
              className={`projects__index-tab ${idx === activeIndex ? 'projects__index-tab--active' : ''}`}
              onClick={() => changeProject(idx, idx > activeIndex ? 'next' : 'prev')}
              data-cursor={proj.title}
            >
              <span className="projects__index-num">0{idx + 1}</span>
              <span className="projects__index-title">{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Minimal Counter & Line Arrow Controls */}
        <div className="projects__nav-controls">
          <span className="projects__counter">0{activeIndex + 1} / 0{projects.length}</span>
          <button
            className="projects__nav-btn"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="PREV"
          >
            ←
          </button>
          <button
            className="projects__nav-btn"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="NEXT"
          >
            →
          </button>
        </div>
      </div>

      {/* Active Project Stage Canvas */}
      <div
        className="catalyst"
        aria-label={`Project: ${activeProject.title}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div ref={stageRef} id={`project-panel-${activeProject.id}`} role="tabpanel">
          {renderProjectStage(activeProject)}
        </div>
      </div>
    </section>
  );
};

export default Projects;

