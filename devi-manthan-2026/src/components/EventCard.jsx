import { motion } from 'framer-motion';

const categoryStyles = {
  Technical:  'bg-accent/20 text-accent border border-accent/30',
  Management: 'bg-primary/20 text-primary-light border border-primary/30',
  Creative:   'bg-accent-teal/20 text-accent-teal border border-accent-teal/30',
  Fun:        'bg-amber-500/20 text-amber-400 border border-amber-400/30',
  Innovation: 'bg-blue-500/20 text-blue-400 border border-blue-400/30',
  Gaming:     'bg-green-500/20 text-green-400 border border-green-400/30',
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  exit: { opacity: 0, scale: 0.9 }
};

export default function EventCard({ event, onOpenModal }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `perspective(600px) rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0px)';
  };

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-bg-card border border-border-gold rounded-xl p-6 cursor-pointer relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />

      <span className={`text-xs px-3 py-1 rounded-full font-raleway font-semibold mb-4 inline-block ${categoryStyles[event.category] || categoryStyles.Technical}`}>
        {event.category}
      </span>

      <div className="text-gold text-4xl mb-3 duration-300 transform group-hover:scale-110 origin-left">{event.icon}</div>

      <h3 className="font-cinzelPlain text-xl text-gold mb-1 font-bold">{event.name}</h3>

      <p className="font-raleway italic text-text-muted text-sm mb-3">
        "{event.tagline}"
      </p>

      <p className="font-raleway text-text-muted text-sm leading-relaxed mb-5 line-clamp-3">
        {event.description}
      </p>

      <button onClick={() => onOpenModal(event)}
        className="text-sm font-raleway text-gold border border-border-gold px-4 py-2 rounded-lg group-hover:bg-gold group-hover:text-bg-dark transition-all duration-300">
        View Details →
      </button>
    </motion.article>
  );
}
