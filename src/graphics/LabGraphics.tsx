import React from 'react';

interface LabSVGProps {
  className?: string;
  animated?: boolean;
}

/* PCB board with traces and component footprints */
export const PCBGraphic: React.FC<LabSVGProps> = ({ className = '', animated = false }) => (
  <svg
    viewBox="0 0 300 220"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    width="100%"
    height="auto"
  >
    {/* PCB outline */}
    <rect x="10" y="10" width="280" height="200" fill="none" stroke="#7C3AED" strokeWidth="1.5" rx="3" opacity="0.4" />
    {/* Corner mounting holes */}
    {[[22,22],[278,22],[22,198],[278,198]].map(([cx,cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="#7C3AED" strokeWidth="0.8" opacity="0.3" />
    ))}
    {/* Horizontal traces */}
    <path
      className={animated ? 'trace-path trace-path--animated' : ''}
      d="M30 60 L80 60 L80 80 L200 80 L200 60 L270 60"
      fill="none" stroke="#7C3AED" strokeWidth="1.2" opacity="0.6"
    />
    <path
      className={animated ? 'trace-path trace-path--animated' : ''}
      d="M30 140 L120 140 L120 120 L180 120 L180 140 L270 140"
      fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.5"
      style={{ transitionDelay: '0.4s' }}
    />
    {/* IC footprint */}
    <rect x="110" y="85" width="80" height="50" fill="rgba(124,58,237,0.05)" stroke="#7C3AED" strokeWidth="1" rx="2" opacity="0.7" />
    {[0,1,2,3].map(i => (
      <React.Fragment key={i}>
        <line x1={118 + i*18} y1="85" x2={118 + i*18} y2="75" stroke="#7C3AED" strokeWidth="1" opacity="0.5" />
        <line x1={118 + i*18} y1="135" x2={118 + i*18} y2="145" stroke="#7C3AED" strokeWidth="1" opacity="0.5" />
      </React.Fragment>
    ))}
    <text x="150" y="115" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="monospace" opacity="0.6">ESP32</text>
    {/* Capacitors */}
    {[[50,95],[240,95]].map(([x,y], i) => (
      <React.Fragment key={i}>
        <line x1={x} y1={y-10} x2={x} y2={y-3} stroke="#7C3AED" strokeWidth="0.8" opacity="0.5" />
        <line x1={x-8} y1={y-3} x2={x+8} y2={y-3} stroke="#7C3AED" strokeWidth="1.5" opacity="0.5" />
        <line x1={x-8} y1={y+3} x2={x+8} y2={y+3} stroke="#7C3AED" strokeWidth="1.5" opacity="0.5" />
        <line x1={x} y1={y+3} x2={x} y2={y+10} stroke="#7C3AED" strokeWidth="0.8" opacity="0.5" />
      </React.Fragment>
    ))}
    {/* LEDs */}
    {[[55,160],[90,160],[125,160]].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="none" stroke="#7C3AED" strokeWidth="0.8" opacity="0.5" />
    ))}
    {/* Connector pins */}
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x={30} y={45 + i*25} width="10" height="10" fill="none" stroke="#7C3AED" strokeWidth="0.6" rx="1" opacity="0.3" />
    ))}
    {/* Silkscreen labels */}
    <text x="20" y="30" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.4">HD-PCB-01</text>
    <text x="210" y="200" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.3">REV A</text>
  </svg>
);

/* Oscilloscope waveform */
export const OscilloscopeWave: React.FC<LabSVGProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    width="100%"
    height="auto"
  >
    {/* Screen border */}
    <rect x="5" y="5" width="310" height="110" fill="rgba(5,5,8,0.9)" stroke="#7C3AED" strokeWidth="1" rx="4" opacity="0.8" />
    {/* Grid */}
    {[0,1,2,3,4,5,6].map(i => (
      <line key={`v${i}`} x1={15 + i*45} y1="10" x2={15 + i*45} y2="110" stroke="#7C3AED" strokeWidth="0.3" opacity="0.15" />
    ))}
    {[0,1,2,3].map(i => (
      <line key={`h${i}`} x1="10" y1={25 + i*25} x2="310" y2={25 + i*25} stroke="#7C3AED" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Waveform CH1 — sine-like */}
    <path
      d="M15 60 C25 60 30 20 40 20 C50 20 55 100 65 100 C75 100 80 20 90 20 C100 20 105 100 115 100 C125 100 130 20 140 20 C150 20 155 100 165 100 C175 100 180 20 190 20 C200 20 205 100 215 100 C225 100 230 20 240 20 C250 20 255 100 265 100 C275 100 280 60 300 60"
      fill="none"
      stroke="#A855F7"
      strokeWidth="1.2"
      opacity="0.85"
    />
    {/* Waveform CH2 — square */}
    <path
      d="M15 75 L50 75 L50 40 L95 40 L95 75 L140 75 L140 40 L185 40 L185 75 L230 75 L230 40 L275 40 L275 75 L305 75"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="1"
      opacity="0.6"
    />
    {/* Labels */}
    <text x="12" y="18" fontSize="6" fill="#A855F7" fontFamily="monospace" opacity="0.8">CH1</text>
    <text x="30" y="18" fontSize="6" fill="#3B82F6" fontFamily="monospace" opacity="0.7">CH2</text>
    <text x="240" y="18" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.5">1ms/div</text>
    <text x="250" y="112" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.5">500mV</text>
  </svg>
);

/* Breadboard silhouette */
export const BreadboardGraphic: React.FC<LabSVGProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 280 160"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    width="100%"
    height="auto"
  >
    <rect x="5" y="5" width="270" height="150" fill="rgba(13,13,18,0.7)" stroke="#7C3AED" strokeWidth="1" rx="3" opacity="0.6" />
    {/* Center gap */}
    <rect x="5" y="72" width="270" height="16" fill="rgba(5,5,8,0.5)" stroke="none" />
    {/* Hole grid top half */}
    {Array.from({ length: 25 }, (_, col) =>
      Array.from({ length: 5 }, (_, row) => (
        <circle
          key={`t${col}-${row}`}
          cx={15 + col * 10}
          cy={18 + row * 10}
          r="1.5"
          fill="#7C3AED"
          opacity={0.25}
        />
      ))
    )}
    {/* Hole grid bottom half */}
    {Array.from({ length: 25 }, (_, col) =>
      Array.from({ length: 5 }, (_, row) => (
        <circle
          key={`b${col}-${row}`}
          cx={15 + col * 10}
          cy={93 + row * 10}
          r="1.5"
          fill="#7C3AED"
          opacity={0.25}
        />
      ))
    )}
    {/* Power rails */}
    <line x1="10" y1="8" x2="270" y2="8" stroke="#ef4444" strokeWidth="1.5" opacity="0.3" />
    <line x1="10" y1="152" x2="270" y2="152" stroke="#1d4ed8" strokeWidth="1.5" opacity="0.3" />
    {/* Jump wires */}
    <path d="M55 45 Q55 65 75 65 Q95 65 95 45" fill="none" stroke="#A855F7" strokeWidth="1.2" opacity="0.5" />
    <path d="M115 35 Q115 75 155 75 Q195 75 195 115" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
    <line x1="135" y1="35" x2="135" y2="115" stroke="#7C3AED" strokeWidth="1" opacity="0.4" />
    {/* Component across gap */}
    <rect x="160" y="65" width="30" height="30" fill="none" stroke="#7C3AED" strokeWidth="0.8" rx="2" opacity="0.5" />
    <text x="167" y="84" fontSize="7" fill="#7C3AED" fontFamily="monospace" opacity="0.6">IC</text>
  </svg>
);

export default PCBGraphic;
