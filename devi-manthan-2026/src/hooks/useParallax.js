import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useParallax(speed = 1, yOffset = 100) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: -yOffset * speed },
        {
          y: yOffset * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [speed, yOffset]);

  return ref;
}
