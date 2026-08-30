import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks/useParallax';
import { LogicGateGraphic } from '../graphics/ElectronicsHUDGraphics';

interface CoreNode {
  id: string;
  label: string;
  title: string;
  description: string;
  chips: string[];
  index: string;
}

const coreNodes: CoreNode[] = [
  {
    id: 'programming',
    label: 'DOMAIN_01',
    title: 'PROGRAMMING',
    description: 'General-purpose development across systems and application layers.',
    chips: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'],
    index: '01',
  },
  {
    id: 'hardware',
    label: 'DOMAIN_02',
    title: 'HARDWARE',
    description: 'Physical computing, microcontrollers, and hardware design.',
    chips: ['Arduino', 'ESP32', 'FPGA', 'Verilog'],
    index: '02',
  },
  {
    id: 'embedded',
    label: 'DOMAIN_03',
    title: 'EMBEDDED',
    description: 'Firmware, real-time systems, and IoT deployments.',
    chips: ['C', 'C++', 'ESP32', 'IoT'],
    index: '03',
  },
  {
    id: 'web',
    label: 'DOMAIN_04',
    title: 'WEB',
    description: 'Full-stack web application development and deployment.',
    chips: ['JavaScript', 'Firebase', 'Web Dev'],
    index: '04',
  },
  {
    id: 'mobile',
    label: 'DOMAIN_05',
    title: 'MOBILE',
    description: 'Cross-platform mobile applications with Flutter.',
    chips: ['Flutter', 'Firebase', 'Dart'],
    index: '05',
  },
  {
    id: 'creative',
    label: 'DOMAIN_06',
    title: 'CREATIVE',
    description: 'Writing, design thinking, and creative problem-solving.',
    chips: ['Writing', 'Poetry', 'Design Thinking'],
    index: '06',
  },
];

const allTechTags = [
  'Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL',
  'Arduino', 'ESP32', 'IoT', 'FPGA', 'Verilog',
  'Flutter', 'Firebase', 'Web Development',
];

const Engineer: React.FC = () => {
  const introRef = useReveal(0.2);
  const gridRef = useReveal(0.1);
  const techRef = useReveal(0.15);

  return (
    <section id="engineer" className="section engineer section--padded-nav" aria-label="The Engineer">
      <div className="grain" />
      <div className="scanlines" />

      {/* Oversized background watermark */}
      <div className="bg-watermark" style={{ top: '12%', right: '2%' }}>02</div>

      <SectionHeading number="02" title="THE ENGINEER" />

      <div ref={introRef} className="engineer__intro">
        <p className="body-large">
          I'm an Electronics & Computer Science engineering student who enjoys
          building things at the intersection of hardware, software and creativity.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <span className="hud-tag">ARCH: DUAL_DOMAIN</span>
          <span className="hud-tag">TTL: 3V3_LOGIC</span>
          <span className="hud-tag">STATUS: EXPANDING</span>
        </div>
      </div>

      {/* Node graph */}
      <div ref={gridRef} className="engineer__graph">
        {/* SVG Logic Gate Graphic in upper right */}
        <LogicGateGraphic
          type="NAND"
          opacity={0.35}
          style={{ position: 'absolute', top: '-25px', right: '10px', pointerEvents: 'none', zIndex: 1 }}
        />
        <LogicGateGraphic
          type="XOR"
          opacity={0.25}
          style={{ position: 'absolute', bottom: '-15px', left: '10px', pointerEvents: 'none', zIndex: 1 }}
        />

        {/* SVG connector lines between nodes */}
        <svg
          className="engineer__svg"
          viewBox="0 0 900 480"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Central connecting paths */}
          <path d="M150 120 Q450 60 750 120" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.2" strokeDasharray="6 10" />
          <path d="M150 240 Q450 180 750 240" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.2" strokeDasharray="6 10" />
          <path d="M150 360 Q450 300 750 360" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.2" strokeDasharray="6 10" />
          <path d="M150 120 Q150 240 150 360" fill="none" stroke="#7C3AED" strokeWidth="0.4" opacity="0.15" />
          <path d="M450 120 Q450 240 450 360" fill="none" stroke="#7C3AED" strokeWidth="0.4" opacity="0.15" />
          <path d="M750 120 Q750 240 750 360" fill="none" stroke="#7C3AED" strokeWidth="0.4" opacity="0.15" />

        </svg>

        <div className="engineer__nodes">
          {coreNodes.map((node) => (
            <div
              key={node.id}
              className="engineer__core-node"
              data-cursor={node.title}
              role="article"
              aria-label={node.title}
            >
              <span className="engineer__node-label">{node.label} / {node.index}</span>
              <h3 className="engineer__node-title">{node.title}</h3>
              <p className="engineer__node-desc">{node.description}</p>
              <div className="engineer__node-chips">
                {node.chips.map((chip) => (
                  <span key={chip} className="engineer__chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full technology tag cloud */}
      <div ref={techRef}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
          <p className="label-mono" style={{ letterSpacing: '0.2em' }}>
            FULL STACK MATRIX —
          </p>
          <span className="hud-tag">COUNT: 14_TAGS</span>
        </div>
        <div className="engineer__tech-grid">
          {allTechTags.map((tag) => (
            <span key={tag} className="engineer__tech-tag" data-cursor="">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineer;
