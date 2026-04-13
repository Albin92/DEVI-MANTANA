export default function ChakraSVG({ className = '' }) {
  return (
    <svg className={`animate-spin-slow ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="chakra-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C0392B" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="45" stroke="url(#chakra-grad)" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="30" stroke="url(#chakra-grad)" strokeWidth="1" />
      <circle cx="50" cy="50" r="15" fill="var(--bg-dark)" stroke="url(#chakra-grad)" strokeWidth="2" />
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1="50" y1="30" x2="50" y2="45"
          stroke="url(#chakra-grad)"
          strokeWidth="2"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      ))}
    </svg>
  );
}
