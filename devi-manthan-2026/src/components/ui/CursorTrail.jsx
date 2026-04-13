import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gold pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 2 : 1})`,
          opacity: clicked ? 0 : 0.6
        }}
      />
      <div 
        className="fixed top-0 left-0 w-10 h-10 border border-gold rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 1.5 : 1})`, opacity: 0.2 }}
      />
    </>
  );
}
