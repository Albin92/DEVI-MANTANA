import { useEffect } from 'react';
import gsap from 'gsap';

export default function MountMandara() {
  useEffect(() => {
    gsap.to('.mandara-vasuki', {
      rotation: 2,
      transformOrigin: 'center center',
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: 'sine.inOut'
    });
    gsap.to('.mandara-amrita', {
      y: -8,
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="mountGrad" x1="0" y1="100%" x2="0" y2="0%">
            <stop offset="0%" stopColor="#1A0E24" />
            <stop offset="50%" stopColor="#8E44AD" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212,175,55,1)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0)" />
          </radialGradient>
        </defs>
        
        <circle cx="200" cy="80" r="60" fill="url(#glow)" className="opacity-60 animate-glow-pulse pointer-events-auto" />
        <path className="mandara-mountain" d="M200 60 L320 320 L80 320 Z" fill="url(#mountGrad)" />
        <path className="mandara-vasuki" d="M120 200 Q200 160 280 200 T110 250 Q200 280 300 240" fill="none" stroke="#D4AF37" strokeWidth="12" strokeLinecap="round" />
        <path className="mandara-amrita" d="M185 50 Q200 70 215 50 Q215 20 185 20 Z" fill="#FFF8DC" />
        
        <path d="M50 300 Q150 280 200 320 T350 300 L350 350 L50 350 Z" fill="#C0392B" className="opacity-80" />
        <path d="M40 320 Q150 340 200 310 T360 320 L360 360 L40 360 Z" fill="#1ABC9C" className="opacity-60" />
      </svg>
    </div>
  );
}
