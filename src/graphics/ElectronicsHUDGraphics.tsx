import React from 'react';

interface SVGGraphicProps {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
}

/* ── Logic Gate (AND / NAND / XOR) SVG Graphic ────────────────────────── */
export const LogicGateGraphic: React.FC<SVGGraphicProps & { type?: 'AND' | 'NAND' | 'XOR' }> = ({
  type = 'AND',
  className = '',
  style,
  opacity = 0.5,
}) => (
  <svg
    viewBox="0 0 160 80"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, ...style }}
    aria-hidden="true"
    width="160"
    height="80"
  >
    {/* Inputs */}
    <line x1="10" y1="25" x2="40" y2="25" stroke="#7C3AED" strokeWidth="1" />
    <line x1="10" y1="55" x2="40" y2="55" stroke="#7C3AED" strokeWidth="1" />
    <circle cx="10" cy="25" r="2" fill="#7C3AED" />
    <circle cx="10" cy="55" r="2" fill="#7C3AED" />
    <text x="14" y="20" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.7">IN_A</text>
    <text x="14" y="50" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.7">IN_B</text>

    {/* Gate shape */}
    {type === 'AND' && (
      <path
        d="M40 15 L70 15 C95 15 95 65 70 65 L40 65 Z"
        fill="rgba(124,58,237,0.05)"
        stroke="#7C3AED"
        strokeWidth="1.2"
      />
    )}
    {type === 'NAND' && (
      <>
        <path
          d="M40 15 L68 15 C90 15 90 65 68 65 L40 65 Z"
          fill="rgba(124,58,237,0.05)"
          stroke="#7C3AED"
          strokeWidth="1.2"
        />
        <circle cx="94" cy="40" r="4" fill="none" stroke="#7C3AED" strokeWidth="1" />
      </>
    )}
    {type === 'XOR' && (
      <>
        <path d="M34 15 Q46 40 34 65" fill="none" stroke="#7C3AED" strokeWidth="1.2" />
        <path
          d="M40 15 Q52 40 40 65 Q70 65 92 40 Q70 15 40 15 Z"
          fill="rgba(124,58,237,0.05)"
          stroke="#7C3AED"
          strokeWidth="1.2"
        />
      </>
    )}

    {/* Output line */}
    <line x1={type === 'NAND' ? "98" : "92"} y1="40" x2="145" y2="40" stroke="#7C3AED" strokeWidth="1" />
    <circle cx="145" cy="40" r="2.5" fill="#3B82F6" />
    <text x="105" y="34" fontSize="6" fill="#3B82F6" fontFamily="monospace" opacity="0.8">OUT_Y</text>
    <text x="50" y="44" fontSize="7" fill="#7C3AED" fontFamily="monospace" fontWeight="bold" opacity="0.6">{type}</text>
  </svg>
);

/* ── IC Chip Pinout Diagram Graphic ───────────────────────────────────── */
export const ICPinoutGraphic: React.FC<SVGGraphicProps & { chipName?: string }> = ({
  chipName = 'MCU_ESP32',
  className = '',
  style,
  opacity = 0.4,
}) => (
  <svg
    viewBox="0 0 220 180"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, ...style }}
    aria-hidden="true"
    width="220"
    height="180"
  >
    {/* Outer chip body */}
    <rect x="50" y="20" width="120" height="140" fill="rgba(13,13,18,0.85)" stroke="#7C3AED" strokeWidth="1.2" rx="4" />
    {/* Index notch */}
    <path d="M100 20 A10 10 0 0 0 120 20" fill="rgba(5,5,8,0.9)" stroke="#7C3AED" strokeWidth="1" />

    {/* Left pins */}
    {[
      { pin: '1', label: '3V3' },
      { pin: '2', label: 'EN' },
      { pin: '3', label: 'VP' },
      { pin: '4', label: 'VN' },
      { pin: '5', label: 'GPIO34' },
      { pin: '6', label: 'GND' },
    ].map((p, i) => (
      <g key={`l-${i}`}>
        <line x1="20" y1={40 + i * 20} x2="50" y2={40 + i * 20} stroke="#7C3AED" strokeWidth="1" />
        <rect x="15" y={37 + i * 20} width="6" height="6" fill="#7C3AED" opacity="0.4" />
        <text x="56" y={43 + i * 20} fontSize="6" fill="#9D97B0" fontFamily="monospace">{p.pin}</text>
        <text x="24" y={35 + i * 20} fontSize="5" fill="#7C3AED" fontFamily="monospace" opacity="0.7">{p.label}</text>
      </g>
    ))}

    {/* Right pins */}
    {[
      { pin: '12', label: 'GND' },
      { pin: '11', label: 'RX0' },
      { pin: '10', label: 'TX0' },
      { pin: '9', label: 'SDA' },
      { pin: '8', label: 'SCL' },
      { pin: '7', label: 'GPIO23' },
    ].map((p, i) => (
      <g key={`r-${i}`}>
        <line x1="170" y1={40 + i * 20} x2="200" y2={40 + i * 20} stroke="#7C3AED" strokeWidth="1" />
        <rect x="199" y={37 + i * 20} width="6" height="6" fill="#7C3AED" opacity="0.4" />
        <text x="156" y={43 + i * 20} fontSize="6" fill="#9D97B0" fontFamily="monospace" textAnchor="end">{p.pin}</text>
        <text x="196" y={35 + i * 20} fontSize="5" fill="#7C3AED" fontFamily="monospace" opacity="0.7" textAnchor="end">{p.label}</text>
      </g>
    ))}

    {/* Center IC Label */}
    <text x="110" y="85" fontSize="8" fill="#7C3AED" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="1px">{chipName}</text>
    <text x="110" y="100" fontSize="5.5" fill="#9D97B0" fontFamily="monospace" textAnchor="middle" opacity="0.6">SILICON_ID: 0x4F8A</text>
    <circle cx="110" cy="120" r="8" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.5" />
    <path d="M110 115 L110 125 M105 120 L115 120" stroke="#3B82F6" strokeWidth="0.6" opacity="0.6" />
  </svg>
);

/* ── Electronic Component Schematic Symbols (Resistor, Capacitor, Diode, GND) ── */
export const ComponentSymbolsGraphic: React.FC<SVGGraphicProps> = ({
  className = '',
  style,
  opacity = 0.4,
}) => (
  <svg
    viewBox="0 0 240 60"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, ...style }}
    aria-hidden="true"
    width="240"
    height="60"
  >
    {/* Resistor R1 */}
    <g transform="translate(10, 15)">
      <line x1="0" y1="15" x2="10" y2="15" stroke="#7C3AED" strokeWidth="1" />
      <path d="M10 15 L13 5 L19 25 L25 5 L31 25 L37 5 L43 25 L46 15" fill="none" stroke="#7C3AED" strokeWidth="1" />
      <line x1="46" y1="15" x2="56" y2="15" stroke="#7C3AED" strokeWidth="1" />
      <text x="28" y="36" fontSize="5.5" fill="#7C3AED" fontFamily="monospace" textAnchor="middle" opacity="0.8">R1: 10K</text>
    </g>

    {/* Capacitor C1 */}
    <g transform="translate(75, 15)">
      <line x1="0" y1="15" x2="15" y2="15" stroke="#7C3AED" strokeWidth="1" />
      <line x1="15" y1="5" x2="15" y2="25" stroke="#7C3AED" strokeWidth="1.4" />
      <line x1="21" y1="5" x2="21" y2="25" stroke="#7C3AED" strokeWidth="1.4" />
      <line x1="21" y1="15" x2="36" y2="15" stroke="#7C3AED" strokeWidth="1" />
      <text x="18" y="36" fontSize="5.5" fill="#7C3AED" fontFamily="monospace" textAnchor="middle" opacity="0.8">C1: 100nF</text>
    </g>

    {/* Diode D1 */}
    <g transform="translate(130, 15)">
      <line x1="0" y1="15" x2="12" y2="15" stroke="#7C3AED" strokeWidth="1" />
      <polygon points="12,5 12,25 24,15" fill="rgba(124,58,237,0.2)" stroke="#7C3AED" strokeWidth="1" />
      <line x1="24" y1="5" x2="24" y2="25" stroke="#7C3AED" strokeWidth="1.4" />
      <line x1="24" y1="15" x2="36" y2="15" stroke="#7C3AED" strokeWidth="1" />
      <text x="18" y="36" fontSize="5.5" fill="#7C3AED" fontFamily="monospace" textAnchor="middle" opacity="0.8">D1: 1N4148</text>
    </g>

    {/* GND */}
    <g transform="translate(190, 15)">
      <line x1="15" y1="0" x2="15" y2="12" stroke="#7C3AED" strokeWidth="1" />
      <line x1="5" y1="12" x2="25" y2="12" stroke="#7C3AED" strokeWidth="1.2" />
      <line x1="9" y1="16" x2="21" y2="16" stroke="#7C3AED" strokeWidth="1" />
      <line x1="12" y1="20" x2="18" y2="20" stroke="#7C3AED" strokeWidth="0.8" />
      <text x="15" y="32" fontSize="5.5" fill="#7C3AED" fontFamily="monospace" textAnchor="middle" opacity="0.8">GND</text>
    </g>
  </svg>
);
