export default function VasukiDivider() {
  return (
    <div className="flex justify-center my-8 overflow-hidden relative w-full h-[24px]">
      <svg className="absolute w-[200%]" style={{ left: '-50%' }} height="24" viewBox="0 0 200 24" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0 12 Q25 -10 50 12 T100 12 T150 12 T200 12" 
          stroke="#D4AF37" 
          strokeWidth="2" 
          strokeDasharray="10 5"
        />
      </svg>
    </div>
  );
}
