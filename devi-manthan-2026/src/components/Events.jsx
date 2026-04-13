import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events } from '../data/events';
import VasukiDivider from './ui/VasukiDivider';
import RevealWrapper from './ui/RevealWrapper';
import EventCard from './EventCard';
import EventModal from './EventModal';

export default function Events() {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const categories = ['All', ...new Set(events.map(e => e.category))];

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <section id="events" className="relative py-24 bg-bg-dark min-h-screen">
      <div className="diagonal-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealWrapper className="text-center mb-12">
          <div className="text-gold tracking-[4px] text-xs font-bold uppercase mb-4">The Battlefield</div>
          <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-6">
            Choose Your <span className="text-primary-light">Arena</span>
          </h2>
          <VasukiDivider />
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-raleway text-sm transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gold text-bg-dark font-bold' 
                  : 'bg-bg-card border border-border-gold text-text-muted hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </RevealWrapper>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredEvents.map(event => (
              <EventCard 
                key={event.id} 
                event={event} 
                onOpenModal={() => setSelectedEvent(event)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <EventModal 
        event={selectedEvent} 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </section>
  );
}
