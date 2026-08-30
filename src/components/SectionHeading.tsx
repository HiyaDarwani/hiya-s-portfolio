import React from 'react';
import { useReveal } from '../hooks/useParallax';

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title, className = '' }) => {
  const ref = useReveal(0.2);

  return (
    <div ref={ref} className={`section-heading ${className}`}>
      <span className="section-heading__number">{number}</span>
      <div className="section-heading__rule" />
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
};

export default SectionHeading;
