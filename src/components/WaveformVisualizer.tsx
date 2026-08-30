import React, { useState } from 'react';

type WaveType = 'SINE' | 'SQUARE' | 'PULSE' | 'TRIANGLE';

interface WaveformVisualizerProps {
  className?: string;
  style?: React.CSSProperties;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  className = '',
  style,
}) => {
  const [waveType, setWaveType] = useState<WaveType>('SINE');
  const [frequency, setFrequency] = useState<number>(3); // 1-8

  const generateWavePath = () => {
    const width = 340;
    const height = 100;
    const centerY = height / 2;
    const amp = 32;
    const points: string[] = [];

    const cycles = frequency;
    const totalPoints = 120;

    for (let i = 0; i <= totalPoints; i++) {
      const x = (i / totalPoints) * width;
      const progress = (i / totalPoints) * cycles * 2 * Math.PI;

      let y = centerY;
      if (waveType === 'SINE') {
        y = centerY - Math.sin(progress) * amp;
      } else if (waveType === 'SQUARE') {
        y = Math.sin(progress) >= 0 ? centerY - amp : centerY + amp;
      } else if (waveType === 'PULSE') {
        const mod = (progress % (2 * Math.PI)) / (2 * Math.PI);
        y = mod < 0.2 ? centerY - amp : centerY + amp;
      } else if (waveType === 'TRIANGLE') {
        const mod = (progress % (2 * Math.PI)) / (2 * Math.PI);
        y = mod < 0.5 ? centerY - amp + (mod * 4 * amp) : centerY + amp - ((mod - 0.5) * 4 * amp);
      }

      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }

    return points.join(' ');
  };

  return (
    <div
      className={`waveform-synth ${className}`}
      style={{
        border: '1px solid var(--border-subtle)',
        background: 'rgba(10, 9, 16, 0.85)',
        backdropFilter: 'blur(8px)',
        padding: '1.2rem',
        borderRadius: '2px',
        maxWidth: '420px',
        ...style,
      }}
    >
      {/* Header with LED status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="hud-led" style={{ background: 'var(--accent-cyan)', boxShadow: '0 0 6px var(--accent-cyan)' }} />
          <span className="label-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.6rem' }}>
            OSCILLOSCOPE // CH1_SYNTH
          </span>
        </div>
        <span className="label-mono" style={{ fontSize: '0.55rem', opacity: 0.5 }}>
          {frequency * 100} Hz
        </span>
      </div>

      {/* SVG Screen display */}
      <div
        style={{
          position: 'relative',
          background: 'rgba(5, 5, 8, 0.95)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
          padding: '0.4rem',
        }}
      >
        <svg
          viewBox="0 0 340 100"
          width="100%"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={`v-${i}`} x1={i * 56.6} y1="0" x2={i * 56.6} y2="100" stroke="#06B6D4" strokeWidth="0.3" opacity="0.12" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`h-${i}`} x1="0" y1={i * 33.3} x2="340" y2={i * 33.3} stroke="#06B6D4" strokeWidth="0.3" opacity="0.12" />
          ))}

          {/* Animated Waveform Path */}
          <path
            d={generateWavePath()}
            fill="none"
            stroke="var(--accent-cyan)"
            strokeWidth="1.5"
            style={{ transition: 'd 0.3s ease-out' }}
          />

          {/* Secondary reference cyan trace */}
          <path
            d={generateWavePath()}
            fill="none"
            stroke="var(--accent-violet)"
            strokeWidth="0.8"
            opacity="0.35"
            transform="translate(0, 4)"
          />
        </svg>
      </div>

      {/* Wave shape selector buttons */}
      <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.8rem' }}>
        {(['SINE', 'SQUARE', 'PULSE', 'TRIANGLE'] as WaveType[]).map((type) => (
          <button
            key={type}
            onClick={() => setWaveType(type)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.52rem',
              letterSpacing: '0.12em',
              padding: '0.3rem 0.6rem',
              border: waveType === type ? '1px solid var(--accent-cyan)' : '1px solid var(--border-faint)',
              color: waveType === type ? 'var(--accent-cyan)' : 'var(--text-muted)',
              background: waveType === type ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
              borderRadius: '2px',
              transition: 'all 0.2s',
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Frequency Control Slider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '0.8rem' }}>
        <span className="label-mono" style={{ fontSize: '0.52rem', color: 'var(--text-muted)' }}>FREQ</span>
        <input
          type="range"
          min="1"
          max="8"
          step="1"
          value={frequency}
          onChange={(e) => setFrequency(Number(e.target.value))}
          style={{
            flex: 1,
            accentColor: 'var(--accent-cyan)',
            cursor: 'pointer',
          }}
          aria-label="Adjust signal frequency"
        />
      </div>
    </div>
  );
};

export default WaveformVisualizer;
