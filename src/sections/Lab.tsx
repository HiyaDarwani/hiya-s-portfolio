import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks/useParallax';
import { ComponentSymbolsGraphic } from '../graphics/ElectronicsHUDGraphics';
import { WaveformVisualizer } from '../components/WaveformVisualizer';

/* ── 01: Audio DSP Module ────────────────────────────── */
const AudioDspModule: React.FC = () => (
  <div className="lab__bench-card">
    <div className="lab__bench-header">
      <span className="lab__bench-tag">01 // EXPERIMENT</span>
      <span className="hud-tag hud-tag--cyan">GROUNDED: OVERWATCH</span>
    </div>
    <h3 className="lab__bench-title">AUDIO DSP / STFT</h3>
    <p className="lab__bench-purpose">
      Exploring spectral signal processing through short-time Fourier transforms, frame-based processing, and filtering.
    </p>

    {/* STFT Spectrogram Spectrum Bars */}
    <div style={{
      margin: '1rem 0', padding: '0.6rem',
      background: 'rgba(5,5,8,0.85)', borderRadius: '4px',
      border: '1px solid rgba(56,189,248,0.2)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: '#38BDF8' }}>STFT // SPECTRAL BINS</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--text-muted)' }}>FRAME BUFFERING</span>
      </div>
      <div style={{ height: '60px', display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
        {[45, 70, 35, 90, 80, 50, 75, 95, 60, 40, 85, 55, 90, 65].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: i % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-violet)',
              opacity: 0.85,
              borderRadius: '1px',
            }}
          />
        ))}
      </div>
    </div>

    {/* Concepts list */}
    <div className="lab__bench-concepts">
      {['STFT', 'FRAME BUFFERING', 'SPECTRAL FILTERING', 'WIENER FILTERING', 'ONNX INFERENCE'].map(c => (
        <span key={c} className="lab__bench-chip">{c}</span>
      ))}
    </div>

    {/* Pipeline flow */}
    <div className="lab__bench-flow">
      AUDIO INPUT ↓ STFT ↓ DSP/ML ↓ TELEMETRY
    </div>
  </div>
);

/* ── 02: Local AI Agent Module ───────────────────────── */
const LocalAiAgentModule: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // Default 'PLAN'

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const steps = ['OBSERVE', 'UNDERSTAND', 'PLAN', 'ACT', 'VERIFY'];

  return (
    <div className="lab__bench-card">
      <div className="lab__bench-header">
        <span className="lab__bench-tag" style={{ color: 'var(--accent-purple)' }}>02 // EXPERIMENT</span>
        <span className="hud-tag">GROUNDED: J.A.R.V.I.S.</span>
      </div>
      <h3 className="lab__bench-title">LOCAL AI AGENT</h3>
      <p className="lab__bench-purpose">
        Autonomous execution loop framing for local AI, Ollama integration, and system-level control.
      </p>

      {/* Execution Loop Indicator */}
      <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {steps.map((step, idx) => (
          <div
            key={step}
            onClick={() => setActiveStep(idx)}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.3rem 0.6rem', borderRadius: '2px', cursor: 'pointer',
              background: idx === activeStep ? 'rgba(192,132,252,0.12)' : 'rgba(5,5,8,0.5)',
              border: idx === activeStep ? '1px solid var(--accent-purple)' : '1px solid rgba(232,228,240,0.06)',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: idx === activeStep ? 'var(--accent-purple)' : 'var(--text-muted)' }}>
              0{idx + 1} / {step}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: idx === activeStep ? 'var(--accent-purple)' : 'rgba(255,255,255,0.3)' }}>
              {idx === activeStep ? 'ACTIVE_NODE' : 'READY'}
            </span>
          </div>
        ))}
      </div>

      {/* Concepts list */}
      <div className="lab__bench-concepts">
        {['LOCAL AI AGENT', 'OLLAMA INTEGRATION', 'VOICE INTERACTION', 'SYSTEM CONTROL'].map(c => (
          <span key={c} className="lab__bench-chip" style={{ color: 'var(--accent-purple)', borderColor: 'rgba(192,132,252,0.3)' }}>{c}</span>
        ))}
      </div>

      {/* Pipeline flow */}
      <div className="lab__bench-flow" style={{ color: 'var(--accent-purple)' }}>
        OBSERVE → UNDERSTAND → PLAN → ACT → VERIFY
      </div>
    </div>
  );
};

/* ── 03: Vector Retrieval Module ─────────────────────── */
const VectorRetrievalModule: React.FC = () => (
  <div className="lab__bench-card">
    <div className="lab__bench-header">
      <span className="lab__bench-tag" style={{ color: 'var(--accent-cyan)' }}>03 // EXPERIMENT</span>
      <span className="hud-tag hud-tag--cyan">GROUNDED: DOCRAG</span>
    </div>
    <h3 className="lab__bench-title">VECTOR RETRIEVAL</h3>
    <p className="lab__bench-purpose">
      Document intelligence through retrieval-augmented generation and source-grounded answers.
    </p>

    {/* Vector RAG query & citation readout */}
    <div style={{
      margin: '1rem 0', padding: '0.6rem',
      background: 'rgba(5,5,8,0.85)', borderRadius: '4px',
      border: '1px solid rgba(6,182,212,0.2)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--accent-cyan)' }}>VECTOR_STORE // PGVECTOR</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--text-muted)' }}>JINA_EMBEDDINGS</span>
      </div>
      <div style={{
        border: '1px solid rgba(6,182,212,0.15)', borderRadius: '3px',
        padding: '0.4rem', background: 'rgba(6,182,212,0.03)'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.4rem', color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.2rem' }}>
          SOURCE_CITATION // ACTIVE
        </span>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.42rem', color: 'var(--text-muted)', lineHeight: 1.4, margin: 0 }}>
          "...retrieval-grounded response isolated to document sources..."
        </p>
      </div>
    </div>

    {/* Concepts list */}
    <div className="lab__bench-concepts">
      {['RAG PIPELINE', 'PGVECTOR', 'JINA EMBEDDINGS', 'SOURCE-GROUNDED'].map(c => (
        <span key={c} className="lab__bench-chip" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(6,182,212,0.3)' }}>{c}</span>
      ))}
    </div>

    {/* Pipeline flow */}
    <div className="lab__bench-flow" style={{ color: 'var(--accent-cyan)' }}>
      INGEST → EMBED → RETRIEVE → CITE
    </div>
  </div>
);

/* ── Main Lab Section ────────────────────────────────── */
const Lab: React.FC = () => {
  const introRef = useReveal(0.2);
  const synthRef = useReveal(0.15);
  const benchRef = useReveal(0.1);

  return (
    <section id="lab" className="section lab section--padded-nav" aria-label="The Lab">
      <div className="grain" />
      <div className="scanlines" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '8%', right: '3%' }}>04</div>

      {/* Component symbols floating in background */}
      <ComponentSymbolsGraphic
        opacity={0.35}
        style={{ position: 'absolute', top: '15%', left: '35%', pointerEvents: 'none' }}
      />

      {/* Background schematic trace */}
      <svg
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', opacity: 0.04, pointerEvents: 'none' }}
        viewBox="0 0 1400 300"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path d="M0 150 L200 150 L200 80 L400 80 L400 150 L600 150 L600 220 L800 220 L800 150 L1000 150 L1000 80 L1200 80 L1200 150 L1400 150"
          fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <path className="trace-pulse" d="M0 200 L150 200 L150 100 L350 100 L350 200 L550 200"
          fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.6" />
        {[200,400,600,800,1000,1200].map((x, i) => (
          <circle key={i} cx={x} cy={i % 2 === 0 ? 80 : 220} r="4" fill="none" stroke="#8B5CF6" strokeWidth="1" />
        ))}
      </svg>

      <SectionHeading number="04" title="THE LAB" />

      <div ref={introRef} className="lab__intro">
        <p className="body-large">
          Where engineering concepts are tested underneath the application layer. The interactive workbench for signals, agents, and retrieval pipelines.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem 1.2rem', marginTop: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="hud-tag">WORKBENCH: ACTIVE</span>
          <span className="hud-tag hud-tag--cyan">SIGNAL_GEN: ONLINE</span>
          <span className="hud-tag">INSTRUMENT: OSCILLOSCOPE</span>
        </div>
      </div>

      {/* Hero Instrument Container: Interactive Oscilloscope */}
      <div ref={synthRef} className="lab__instrument-container">
        <div className="lab__instrument-header">
          <span className="hud-led" style={{ background: 'var(--accent-cyan)', boxShadow: '0 0 6px var(--accent-cyan)' }} />
          <span className="label-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
            HERO INSTRUMENT // WAVEFORM SYNTHESIZER
          </span>
        </div>
        <WaveformVisualizer style={{ maxWidth: '100%', width: '100%' }} />
      </div>

      {/* Experiment Benches Grid */}
      <div ref={benchRef} className="lab__benches-grid">
        <AudioDspModule />
        <LocalAiAgentModule />
        <VectorRetrievalModule />
      </div>
    </section>
  );
};

export default Lab;
