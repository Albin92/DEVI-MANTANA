import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function EventModal({ event, isOpen, onClose }) {
  if (!isOpen || !event) return null;

  // Split Rules by newline to map them cleanly
  const rulesList = event.rules ? event.rules.split('\n').filter(r => r.trim() !== '') : [];

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#02020D]/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
        onClick={onClose}
        style={{ overflowY: 'auto' }}
      >
        {/* Massive 2-Column Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6 md:p-10 max-w-6xl w-full relative shadow-2xl flex flex-col md:flex-row gap-10 my-8"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white text-xl transition-colors z-50 p-2"
            onClick={onClose}
          >
            ✕
          </button>
          
          {/* LEFT COLUMN: Hero & Logo Integration */}
          <div className="flex-1 flex flex-col justify-between border-r-0 md:border-r border-white/5 md:pr-10">
            
            <div>
              {/* Category Sub Label */}
              <div className="text-[var(--saff)] text-xs font-mono tracking-widest uppercase mb-4 opacity-80">
                // {event.category}_EVENT
              </div>
              
              {/* Event Typography */}
              <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-white leading-none mb-3" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                {event.name}
              </h2>
              
              <div className="inline-blockpx-3 py-1 bg-white/5 border border-[var(--saff)]/40 text-[var(--saff)] text-xs font-mono px-3 py-1 rounded-full mb-8">
                {event.subtitle.toUpperCase()}
              </div>
            </div>

            {/* MASSIVE LOGO CONTAINER */}
            {event.imageIcon ? (
              <div className="flex-1 flex items-center justify-center bg-[#050508] border border-white/5 rounded-2xl p-8 mb-8 relative group overflow-hidden shadow-inner">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-[var(--gold)] opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700" />
                <motion.img 
                  src={event.imageIcon} 
                  alt={event.name} 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="w-full max-w-[400px] h-auto object-contain filter drop-shadow-[0_0_30px_rgba(245,197,24,0.15)] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ) : (
               <div className="flex-1 flex items-center justify-center bg-[#050508] border border-white/5 rounded-2xl p-8 mb-8 relative">
                 <div className="text-[var(--gold)] text-9xl opacity-80" style={{filter: 'drop-shadow(0 0 40px rgba(245, 197, 24, 0.2))'}}>{event.icon}</div>
               </div>
            )}

            {/* Tagline / Description Base */}
            <div>
              <p className="font-raleway text-white/50 text-sm leading-relaxed">
                <span className="text-white block font-bold mb-1 opacity-90">{event.tagline}</span>
                {event.description}
              </p>
            </div>
            
          </div>

          {/* RIGHT COLUMN: The Intel & Rules */}
          <div className="flex-1 flex flex-col justify-start">
             
             {/* Rules Section */}
             <div className="mb-10">
               <div className="flex items-center gap-4 mb-6">
                 <h3 className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase m-0">Rules &amp; Guidelines</h3>
                 <div className="h-[1px] bg-white/10 flex-1"></div>
               </div>
               
               <ul className="space-y-4">
                 {rulesList.map((rule, idx) => {
                   // Optional: separate rule number from text if rule starts with "1. "
                   const ruleText = rule.replace(/^[0-9]+\.\s*/, '');
                   return (
                     <motion.li 
                       key={idx}
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.3 + (idx * 0.05) }}
                       className="flex items-start gap-4 font-raleway text-sm text-white/70"
                     >
                       <span className="text-[#ff3333] font-mono mt-[2px] opacity-80">❯</span>
                       <span className="leading-relaxed">{ruleText}</span>
                     </motion.li>
                   )
                 })}
               </ul>
             </div>

             {/* Event Heads Section */}
             {event.eventHeads && event.eventHeads.length > 0 && (
               <div className="mt-auto">
                 <div className="flex items-center gap-4 mb-6">
                   <h3 className="text-[#ff3333] text-xs font-bold tracking-[0.2em] uppercase m-0">Event Heads</h3>
                   <div className="h-[1px] bg-white/10 flex-1"></div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {event.eventHeads.map((head, i) => (
                     <div key={i} className="bg-[#0f0f14] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors flex items-center gap-4 group">
                       
                       {head.photo ? (
                         <img src={head.photo} alt={head.name} className="w-12 h-12 rounded-lg object-cover border border-white/10" />
                       ) : (
                         <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center border border-white/5 text-white/20 group-hover:text-white/40 transition-colors">
                           <i className="fa-solid fa-user"></i>
                         </div>
                       )}

                       <div>
                         <div className="text-[#ff3333] text-[10px] font-mono uppercase tracking-widest mb-1">{head.role}</div>
                         <div className="text-white text-sm font-semibold mb-0.5">{head.name}</div>
                         <div className="text-white/40 text-xs font-mono">{head.phone}</div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             )}

             {/* Action Button */}
             <div className="mt-10 flex justify-end">
                <button 
                  onClick={() => {
                    onClose();
                    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent border border-[var(--saff)] text-[var(--saff)] font-mono text-sm px-8 py-3 rounded-md hover:bg-[var(--saff)] hover:text-black transition-all duration-300"
                >
                  [ ENROLL NOW ]
                </button>
             </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
