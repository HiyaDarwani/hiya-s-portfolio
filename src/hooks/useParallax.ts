import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useParallax(
  depth: 'background' | 'midground' | 'foreground',
  options?: { yFactor?: number; xFactor?: number }
) {
  const ref = useRef<HTMLDivElement>(null);
  const factors = {
    background: { y: 0.15, x: 0.05 },
    midground: { y: 0.3, x: 0.12 },
    foreground: { y: 0.5, x: 0.2 },
  };
  const f = factors[depth];
  const yF = options?.yFactor ?? f.y;
  const xF = options?.xFactor ?? f.x;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) * xF;
      const dy = (e.clientY - cy) * yF;
      gsap.to(el, {
        x: dx,
        y: dy,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [yF, xF]);

  return ref;
}

export function useScrollParallax(scrollFactor = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(el, { y: progress * 120 * scrollFactor });
      },
    });

    return () => trigger.kill();
  }, [scrollFactor]);

  return ref;
}

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.set(el, { opacity: 0, y: prefersReduced ? 0 : 30 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: `top ${(1 - threshold) * 100}%`,
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: prefersReduced ? 0 : 0.9,
          ease: 'power3.out',
        });
      },
    });

    return () => trigger.kill();
  }, [threshold]);

  return ref;
}
