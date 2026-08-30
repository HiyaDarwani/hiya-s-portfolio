import { useEffect, useRef, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  label: string | null;
}

export function useCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    isHovering: false,
    label: null,
  });
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lerp = 0.12;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;
      setCursor((prev) => ({
        ...prev,
        x: currentRef.current.x,
        y: currentRef.current.y,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-cursor]');
      if (el) {
        setCursor((prev) => ({
          ...prev,
          isHovering: true,
          label: el.getAttribute('data-cursor'),
        }));
      } else {
        setCursor((prev) => ({ ...prev, isHovering: false, label: null }));
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return cursor;
}
