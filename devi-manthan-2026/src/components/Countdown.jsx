import { useCountdown } from '../hooks/useCountdown';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2026-04-24T09:00:00'));
  
  const timerData = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {timerData.map((item, idx) => (
        <CountdownBox key={idx} label={item.label} value={item.value} />
      ))}
    </div>
  );
}

function CountdownBox({ value, label }) {
  const digitRef = useRef(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (digitRef.current && prevValue.current !== value) {
      gsap.fromTo(digitRef.current, 
        { rotateX: -90, opacity: 0 },
        { rotateX: 0, opacity: 1, duration: 0.4, ease: "back.out(1.5)" }
      );
      prevValue.current = value;
    }
  }, [value]);

  return (
    <div className="bg-bg-card/80 border border-border-gold rounded-xl px-6 py-4 min-w-[90px] text-center backdrop-blur-sm">
      <div 
        ref={digitRef} 
        className="font-cinzel text-5xl text-gold mb-1"
        style={{ transformOrigin: 'center center' }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-raleway text-text-muted text-xs tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}
