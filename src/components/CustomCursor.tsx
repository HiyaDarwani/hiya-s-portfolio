import React from 'react';
import { useCursor } from '../hooks/useCursor';

const CustomCursor: React.FC = () => {
  const { x, y, isHovering, label } = useCursor();

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: x, top: y }}
      />
      <div
        className={`cursor-ring ${isHovering ? 'cursor-ring--hover' : ''}`}
        style={{ left: x, top: y }}
      />
      {label && (
        <div
          className={`cursor-label ${label ? 'cursor-label--visible' : ''}`}
          style={{ left: x, top: y }}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default CustomCursor;
