export default function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
      <svg className="relative block w-[200%] h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="animate-wave-slide" style={{ animationDuration: '8s' }} fill="#C0392B" d="M0,60 C150,10 300,100 600,60 C900,20 1050,110 1200,60 L1200,120 L0,120 Z" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[200%] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="animate-wave-slide" style={{ animationDuration: '6s', animationDirection: 'reverse' }} fill="#2D0A1A" d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[200%] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="animate-wave-slide" style={{ animationDuration: '4s' }} fill="#0A0409" d="M0,60 C300,10 300,110 600,60 C900,10 900,110 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
