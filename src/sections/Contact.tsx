import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactLinks } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

const Contact: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !headingRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        once: true,
      },
    });
    tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(
        linksRef.current?.querySelectorAll('.contact__link') ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(footerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2');
  }, []);

  return (
    <section id="contact" className="section contact section--padded-nav" aria-label="Contact">
      <div className="grain" />
      <div className="scanlines" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '8%', right: '3%' }}>06</div>

      {/* Background radar composition */}
      <svg
        style={{ position: 'absolute', top: '10%', right: '5%', width: '35%', opacity: 0.05, pointerEvents: 'none' }}
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#7C3AED" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#7C3AED" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#7C3AED" strokeWidth="0.4" />
        <line x1="10" y1="200" x2="390" y2="200" stroke="#7C3AED" strokeWidth="0.4" />
        <line x1="200" y1="10" x2="200" y2="390" stroke="#7C3AED" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="6" fill="#3B82F6">
          <animate attributeName="r" values="4;12;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Section index label & HUD metadata */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div className="label-index">06 / CONTACT</div>
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          <span className="hud-tag">SIGNAL: ONLINE</span>
          <span className="hud-tag">AVAILABILITY: OPEN_FOR_ROLES</span>
        </div>
      </div>

      <div ref={headingRef} style={{ opacity: 0 }}>
        <h2 className="contact__heading">
          LET'S BUILD<br />SOMETHING.
        </h2>
      </div>

      <p className="body-large" style={{ maxWidth: '36rem', marginBottom: '2.5rem' }}>
        Open to collaborations, projects, internships, and conversations
        at the intersection of electronics, code, and creativity.
      </p>

      {/* Contact links */}
      <div ref={linksRef} className="contact__links" role="list">
        {contactLinks.map((link) => (
          <a
            key={link.type}
            href={link.href}
            className="contact__link"
            target={link.type !== 'email' ? '_blank' : undefined}
            rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
            data-cursor={link.label}
            role="listitem"
            aria-label={`${link.label} — ${link.href}`}
          >
            {iconMap[link.type]}
            {link.label}
            <span style={{ marginLeft: 'auto', opacity: 0.4, fontSize: '0.5rem' }}>↗</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div ref={footerRef} className="contact__footer" style={{ opacity: 0 }}>
        <div>
          <div className="contact__footer-name">HIYA DHARWANI</div>
          <div className="label-mono" style={{ marginTop: '0.4rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <span>ECS Engineering — VESIT, Mumbai</span>
            <span className="hud-led" style={{ width: '4px', height: '4px' }} />
            <span>[19.0760° N, 72.8777° E]</span>
          </div>
        </div>
        <div className="contact__footer-id">
          <div>ELECTRONICS × CODE × CREATIVE</div>
          <div style={{ marginTop: '0.4rem', opacity: 0.5 }}>© 2024 — All rights reserved</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
