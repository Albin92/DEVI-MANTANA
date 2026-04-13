import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function EventModal({ event, isOpen, onClose }) {
  if (!isOpen || !event) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="bg-bg-card border border-border-gold rounded-2xl p-8 max-w-lg w-full relative shadow-2xl shadow-gold/10"
          onClick={e => e.stopPropagation()}
        >
          <button 
            className="absolute top-4 right-4 text-text-muted hover:text-gold text-2xl transition-colors"
            onClick={onClose}
          >
            ✕
          </button>
          
          <div className="text-gold text-5xl mb-6">{event.icon}</div>
          
          <span className="text-xs px-3 py-1 bg-white/5 border border-gold/30 text-gold rounded-full font-raleway font-semibold mb-4 inline-block">
            {event.category}
          </span>
          
          <h3 className="font-cinzel text-3xl text-white mb-1">{event.name}</h3>
          <h4 className="font-cinzelPlain text-gold text-lg mb-4">{event.subtitle}</h4>
          
          <div className="bg-bg-dark/50 rounded-xl p-4 border border-border-gold/30 mb-6">
            <p className="font-raleway italic text-text-muted text-sm mb-2 text-center">
              "{event.tagline}"
            </p>
          </div>
          
          <div className="space-y-4 font-raleway text-sm text-text-muted">
            <div>
              <strong className="text-gold block mb-1">Description</strong>
              <p className="leading-relaxed">{event.description}</p>
            </div>
            <div>
              <strong className="text-gold block mb-1">Rules &amp; Info</strong>
              <p className="leading-relaxed">{event.rules}</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => {
                onClose();
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gold text-bg-dark font-cinzelPlain px-6 py-2 rounded-lg font-bold hover:bg-gold-light transition-colors"
            >
              Register for Event
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
