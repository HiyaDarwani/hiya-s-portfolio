import React from 'react';

interface CircuitGraphicProps {
  variant?: 'hero' | 'schematic' | 'trace';
  className?: string;
  animated?: boolean;
  opacity?: number;
  style?: React.CSSProperties;
}

const CircuitGraphic: React.FC<CircuitGraphicProps> = ({
  variant = 'hero',
  className = '',
  animated = false,
  opacity = 0.18,
  style,
}) => {
  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        style={{ opacity, ...style }}
      >
        {/* Main horizontal trace */}
        <line x1="20" y1="200" x2="580" y2="200" stroke="#7C3AED" strokeWidth="0.6" />
        {/* Vertical branches */}
        <line x1="120" y1="200" x2="120" y2="80" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="240" y1="200" x2="240" y2="320" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="360" y1="200" x2="360" y2="80" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="480" y1="200" x2="480" y2="320" stroke="#7C3AED" strokeWidth="0.6" />
        {/* IC component at 120,80 */}
        <rect x="80" y="50" width="80" height="50" fill="none" stroke="#7C3AED" strokeWidth="0.8" />
        <line x1="90" y1="50" x2="90" y2="38" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="105" y1="50" x2="105" y2="38" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="120" y1="50" x2="120" y2="38" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="135" y1="50" x2="135" y2="38" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="150" y1="50" x2="150" y2="38" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="90" y1="100" x2="90" y2="112" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="105" y1="100" x2="105" y2="112" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="135" y1="100" x2="135" y2="112" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="150" y1="100" x2="150" y2="112" stroke="#7C3AED" strokeWidth="0.6" />
        {/* Capacitor at 360,80 */}
        <line x1="360" y1="50" x2="360" y2="62" stroke="#7C3AED" strokeWidth="0.6" />
        <line x1="345" y1="62" x2="375" y2="62" stroke="#7C3AED" strokeWidth="1.2" />
        <line x1="345" y1="68" x2="375" y2="68" stroke="#7C3AED" strokeWidth="1.2" />
        <line x1="360" y1="68" x2="360" y2="80" stroke="#7C3AED" strokeWidth="0.6" />
        {/* Resistor at 240,320 */}
        <line x1="240" y1="320" x2="240" y2="332" stroke="#7C3AED" strokeWidth="0.6" />
        <rect x="228" y="332" width="24" height="36" fill="none" stroke="#7C3AED" strokeWidth="0.8" rx="2" />
        <line x1="240" y1="368" x2="240" y2="380" stroke="#7C3AED" strokeWidth="0.6" />
        {/* Oscilloscope wave at 480,320 */}
        <path
          d="M430 355 L445 355 L445 330 L460 380 L475 330 L490 380 L505 330 L520 355 L535 355"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="0.8"
        />
        {/* Nodes / solder joints */}
        <circle cx="120" cy="200" r="2.5" fill="#7C3AED" />
        <circle cx="240" cy="200" r="2.5" fill="#7C3AED" />
        <circle cx="360" cy="200" r="2.5" fill="#7C3AED" />
        <circle cx="480" cy="200" r="2.5" fill="#7C3AED" />
        {/* Corner brackets */}
        <path d="M20 20 L20 50 L50 50" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.5" />
        <path d="M580 20 L580 50 L550 50" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.5" />
        <path d="M20 380 L20 350 L50 350" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.5" />
        <path d="M580 380 L580 350 L550 350" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.5" />
        {/* Grid dots */}
        {[60,120,180,240,300,360,420,480,540].map(x =>
          [40,100,160,220,280,340].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="#7C3AED" opacity="0.15" />
          ))
        )}
      </svg>
    );
  }

  if (variant === 'schematic') {
    return (
      <svg
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        style={{ opacity, ...style }}
      >
        {/* Schematic construction lines */}
        <line x1="0" y1="150" x2="400" y2="150" stroke="#7C3AED" strokeWidth="0.4" strokeDasharray="4 8" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="#7C3AED" strokeWidth="0.4" strokeDasharray="4 8" />
        {/* Cross-hairs */}
        <circle cx="200" cy="150" r="30" fill="none" stroke="#7C3AED" strokeWidth="0.4" />
        <circle cx="200" cy="150" r="60" fill="none" stroke="#7C3AED" strokeWidth="0.3" opacity="0.5" />
        <circle cx="200" cy="150" r="4" fill="none" stroke="#7C3AED" strokeWidth="0.6" />
        {/* Schematic labels */}
        <text x="210" y="148" fontSize="7" fill="#7C3AED" fontFamily="monospace" opacity="0.5">REV 01</text>
        <text x="10" y="145" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.4">GND</text>
        <text x="370" y="145" fontSize="6" fill="#7C3AED" fontFamily="monospace" opacity="0.4">VCC</text>
        {/* Measurement ticks */}
        {[0,50,100,150,200,250,300,350,400].map(x => (
          <line key={x} x1={x} y1="146" x2={x} y2="154" stroke="#7C3AED" strokeWidth="0.4" opacity="0.4" />
        ))}
        {[0,50,100,150,200,250,300].map(y => (
          <line key={y} x1="196" y1={y} x2="204" y2={y} stroke="#7C3AED" strokeWidth="0.4" opacity="0.4" />
        ))}
      </svg>
    );
  }

  if (variant === 'trace') {
    return (
      <svg
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        style={{ opacity, ...style }}
      >
        <path
          className={animated ? 'trace-path trace-path--animated' : 'trace-path'}
          d="M0 100 L100 100 L100 40 L200 40 L200 100 L350 100 L350 160 L450 160 L450 100 L600 100 L600 60 L700 60 L700 100 L800 100"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="1"
        />
        <path
          className={animated ? 'trace-path trace-path--animated' : 'trace-path'}
          d="M0 140 L80 140 L80 80 L180 80 L180 140 L280 140"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="0.8"
          style={{ transitionDelay: '0.3s' }}
        />
        {[100, 200, 350, 450, 600, 700].map((x, i) => (
          <circle key={i} cx={x} cy={x < 350 ? 40 : x === 350 ? 160 : x < 600 ? 160 : 60} r="3" fill="none" stroke="#7C3AED" strokeWidth="0.8" />
        ))}
      </svg>
    );
  }

  return null;
};

export default CircuitGraphic;
