export default function LotusIcon({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 Q65 40 50 90 Q35 40 50 10 Z" />
      <path d="M50 90 Q75 60 80 40 Q55 50 50 90 Z" />
      <path d="M50 90 Q25 60 20 40 Q45 50 50 90 Z" />
      <path d="M50 90 Q85 80 95 60 Q65 75 50 90 Z" />
      <path d="M50 90 Q15 80 5 60 Q35 75 50 90 Z" />
    </svg>
  );
}
