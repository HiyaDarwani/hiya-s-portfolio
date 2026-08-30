import { useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import ScrollProgress from './components/ScrollProgress';
import Arrival from './sections/Arrival';
import Engineer from './sections/Engineer';
import Projects from './sections/Projects';
import Lab from './sections/Lab';
import Creative from './sections/Creative';
import Contact from './sections/Contact';
import { useActiveSection } from './hooks/useActiveSection';
import { navItems } from './data/portfolio';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionIds = useMemo(() => navItems.map((n) => n.sectionId), []);
  const activeSection = useActiveSection(sectionIds);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    /* ── Lenis smooth scroll ─────────────────────────── */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    /* Keep GSAP ScrollTrigger in sync with Lenis */
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Nav items={navItems} activeSection={activeSection} />

      <main>
        <Arrival />
        <Engineer />
        <Projects />
        <Lab />
        <Creative />
        <Contact />
      </main>
    </>
  );
}

export default App;
