import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CircuitGraphic from '../graphics/CircuitGraphic';
import { ICPinoutGraphic } from '../graphics/ElectronicsHUDGraphics';
import { useParallax } from '../hooks/useParallax';

const Arrival: React.FC = () => {
  const bgRef = useParallax('background', { yFactor: 0.06, xFactor: 0.03 });
  const midRef = useParallax('midground', { yFactor: 0.14, xFactor: 0.08 });
  const fgRef = useParallax('foreground', { yFactor: 0.22, xFactor: 0.14 });

  const firstnameRef = useRef<HTMLSpanElement>(null);
  const lastnameRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .fromTo(firstnameRef.current, { opacity: 0, y: 60, skewX: -3 }, { opacity: 1, y: 0, skewX: 0, duration: 1.1 }, 0.4)
      .fromTo(lastnameRef.current, { opacity: 0, y: 50, skewX: 3 }, { opacity: 1, y: 0, skewX: 0, duration: 1.0 }, 0.55)
      .fromTo(taglineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85)
      .fromTo(metaRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, 1.0);
  }, []);

  return (
    <section id="arrival" className="section arrival" aria-label="Arrival — Hero">
      <div className="grain" />
      <div className="scanlines" />
      <div className="arrival__bg" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '8%', right: '4%' }}>01</div>

      {/* Background layer — schematic grid */}
      <div
        ref={bgRef}
        className="parallax-layer"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <CircuitGraphic
          variant="schematic"
          opacity={0.06}
          style={{ position: 'absolute', top: '10%', right: '5%', width: '55%', maxWidth: 600 }}
        />
        <CircuitGraphic
          variant="schematic"
          opacity={0.04}
          style={{ position: 'absolute', bottom: '8%', left: '2%', width: '35%', maxWidth: 380 }}
        />
        {/* Subtle technical HUD annotations */}
        <div style={{
          position: 'absolute', top: '12%', left: '42%',
          fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
          letterSpacing: '0.18em', color: 'rgba(124,58,237,0.45)'
        }}>
          <div>SYS_NODE // 01</div>
          <div>STATUS: BUILDING</div>
        </div>
      </div>

      {/* Midground layer — circuit composition & IC Chip Pinout */}
      <div
        ref={midRef}
        className="parallax-layer"
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      >
        <CircuitGraphic
          variant="hero"
          opacity={0.13}
          style={{ position: 'absolute', top: '15%', right: '0', width: '60%', maxWidth: 640 }}
        />
        <CircuitGraphic
          variant="hero"
          opacity={0.06}
          style={{ position: 'absolute', bottom: '5%', left: '0', width: '40%', maxWidth: 400, transform: 'scaleX(-1)' }}
        />
        <ICPinoutGraphic
          chipName="ESP32_WROOM"
          opacity={0.25}
          style={{ position: 'absolute', top: '22%', right: '12%', width: '180px', pointerEvents: 'none' }}
        />
      </div>

      {/* Foreground layer — thin wire traces */}
      <div
        ref={fgRef}
        className="parallax-layer"
        style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
      >
        <CircuitGraphic
          variant="trace"
          opacity={0.22}
          style={{ position: 'absolute', bottom: '20%', left: '0', width: '100%' }}
        />
        {/* Technical labels */}
        <div style={{
          position: 'absolute', top: '28%', right: '15%',
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          letterSpacing: '0.15em', color: 'rgba(124,58,237,0.5)',
          lineHeight: 1.8
        }}>
          <div>SIG_CLK ─────────</div>
          <div>DATA_IN ──────────</div>
          <div>PWR_3V3 ─────────</div>
          <div>GND ─────────────</div>
        </div>
        <div style={{
          position: 'absolute', bottom: '30%', left: '10%',
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
          letterSpacing: '0.14em', color: 'rgba(59,130,246,0.4)',
          lineHeight: 2
        }}>
          <div>FREQ: 240MHz</div>
          <div>CORE: DUAL_XTENSA</div>
          <div>FLASH: 4MB</div>
          <div>LATENCY: 0.12ms</div>
        </div>
      </div>

      {/* Main content */}
      <div className="arrival__content" style={{ zIndex: 3 }}>
        <div ref={eyebrowRef} className="arrival__eyebrow">
          ELECTRONICS × CODE × CREATIVE
        </div>

        <div className="arrival__name-block">
          <span ref={firstnameRef} className="arrival__firstname">HIYA</span>
          <span ref={lastnameRef} className="arrival__lastname">DHARWANI</span>
        </div>

        <div ref={taglineRef} className="arrival__tagline">
          Engineering student<span>·</span>Developer<span>·</span>Maker<span>·</span>Writer
        </div>
      </div>

      {/* Vertical identity label */}
      <div className="arrival__identity" aria-hidden="true">
        ECS / VESIT / MUMBAI
      </div>

      {/* Bottom metadata */}
      <div ref={metaRef} className="arrival__meta" aria-label="Location and programme">
        <div className="arrival__meta-item">ECS ENGINEERING</div>
        <div className="arrival__meta-item">VESIT — MUMBAI</div>
        <div className="arrival__meta-item">HARDWARE × SOFTWARE</div>
      </div>

      {/* Scroll hint */}
      <div className="arrival__scroll-hint" aria-hidden="true">SCROLL</div>
    </section>
  );
};

export default Arrival;
