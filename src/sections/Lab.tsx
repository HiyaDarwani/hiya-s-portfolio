import React, { useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { useReveal } from '../hooks/useParallax';
import { PCBGraphic, OscilloscopeWave, BreadboardGraphic } from '../graphics/LabGraphics';
import { ComponentSymbolsGraphic } from '../graphics/ElectronicsHUDGraphics';
import { WaveformVisualizer } from '../components/WaveformVisualizer';

interface LabCard {
  id: string;
  index: string;
  tag: string;
  title: string;
  desc: string;
  graphic: React.ReactNode;
  blinkDelay: string;
}

const labCards: LabCard[] = [
  {
    id: 'microcontroller',
    index: '01',
    tag: 'PLATFORM',
    title: 'MICROCONTROLLERS',
    desc: 'Arduino & ESP32 development — sensors, actuators, wireless comms, and real-time control loops.',
    graphic: <PCBGraphic animated className="" />,
    blinkDelay: '0s',
  },
  {
    id: 'fpga',
    index: '02',
    tag: 'DIGITAL DESIGN',
    title: 'FPGA / VERILOG',
    desc: 'Hardware description with Verilog — RTL design, sequential logic, and digital system modelling.',
    graphic: <OscilloscopeWave className="" />,
    blinkDelay: '0.8s',
  },
  {
    id: 'iot',
    index: '03',
    tag: 'CONNECTIVITY',
    title: 'IOT SYSTEMS',
    desc: 'End-to-end IoT prototypes — edge devices to cloud dashboards, MQTT, and sensor networks.',
    graphic: <BreadboardGraphic className="" />,
    blinkDelay: '1.5s',
  },
  {
    id: 'embedded',
    index: '04',
    tag: 'FIRMWARE',
    title: 'EMBEDDED C/C++',
    desc: 'Bare-metal and RTOS firmware — memory management, peripheral drivers, and power optimisation.',
    graphic: (
      <svg viewBox="0 0 280 160" aria-hidden="true" width="100%" height="auto">
        <rect x="5" y="5" width="270" height="150" fill="none" stroke="#8B5CF6" strokeWidth="0.8" rx="3" opacity="0.3" />
        {/* Code lines representation */}
        {['void setup() {', '  pinMode(LED, OUTPUT);', '  Serial.begin(115200);', '}', '', 'void loop() {', '  digitalWrite(LED, HIGH);', '  delay(500);', '  digitalWrite(LED, LOW);', '  delay(500);', '}'].map((line, i) => (
          <text key={i} x="14" y={22 + i * 12} fontSize="7.5" fill={line.startsWith('  ') ? '#9D97B0' : '#06B6D4'} fontFamily="monospace" opacity={line === '' ? 0 : 0.85}>
            {line}
          </text>
        ))}
      </svg>
    ),
    blinkDelay: '2.2s',
  },
  {
    id: 'sensors',
    index: '05',
    tag: 'HARDWARE',
    title: 'SENSORS & ACTUATORS',
    desc: 'IMUs, environmental sensors, motor drivers, and signal conditioning circuits.',
    graphic: (
      <svg viewBox="0 0 280 160" aria-hidden="true" width="100%" height="auto">
        <rect x="5" y="5" width="270" height="150" fill="none" stroke="#8B5CF6" strokeWidth="0.8" rx="3" opacity="0.3" />
        {/* Sensor waveform */}
        <path d="M15 80 Q40 40 65 80 Q90 120 115 80 Q140 40 165 80 Q190 120 215 80 Q240 40 265 80" fill="none" stroke="#06B6D4" strokeWidth="1.2" opacity="0.8" />
        {/* Labels */}
        <text x="15" y="145" fontSize="7" fill="#06B6D4" fontFamily="monospace" opacity="0.7">TEMP: 27.3°C</text>
        <text x="100" y="145" fontSize="7" fill="#06B6D4" fontFamily="monospace" opacity="0.7">HUM: 64%</text>
        <text x="200" y="145" fontSize="7" fill="#06B6D4" fontFamily="monospace" opacity="0.7">PRES: 1013hPa</text>
        <text x="15" y="20" fontSize="7" fill="#8B5CF6" fontFamily="monospace" opacity="0.5">BME280 / MPU6050</text>
      </svg>
    ),
    blinkDelay: '0.4s',
  },
  {
    id: 'debug',
    index: '06',
    tag: 'TOOLS',
    title: 'TEST & DEBUG',
    desc: 'Oscilloscopes, logic analysers, multimeters — building intuition for hardware debugging.',
    graphic: <OscilloscopeWave className="" />,
    blinkDelay: '1.2s',
  },
];

const LabCardComponent: React.FC<{ card: LabCard }> = ({ card }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="lab__component-card" data-cursor={card.title} role="article">
      <div
        className="lab__led"
        style={{ animationDelay: card.blinkDelay }}
        aria-hidden="true"
      />
      <div className="lab__component-name">{card.tag} / {card.index}</div>
      <h3 className="lab__component-title">{card.title}</h3>
      <div className="lab__component-icon">
        {card.graphic}
      </div>
      <p className="lab__component-desc">{card.desc}</p>
    </div>
  );
};

const Lab: React.FC = () => {
  const introRef = useReveal(0.2);
  const synthRef = useReveal(0.15);
  const gridRef = useReveal(0.1);

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
          Where software meets solder. The hands-on electronics space — from
          bare-metal firmware to complete IoT systems.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <span className="hud-tag">WORKBENCH: RIGOL_DS1054Z</span>
          <span className="hud-tag hud-tag--cyan">SIGNAL_GEN: ONLINE</span>
          <span className="hud-tag">LOGIC_PROBE: ACTIVE</span>
        </div>
      </div>

      {/* Interactive Oscilloscope Waveform Controller */}
      <div ref={synthRef} style={{ marginBottom: '3.5rem' }}>
        <WaveformVisualizer />
      </div>

      <div ref={gridRef} className="lab__components">
        {labCards.map((card) => (
          <LabCardComponent key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Lab;
