import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Countdown from '../components/Countdown';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="page-transition-wrapper"
    >
      <Hero />
      <About />
      
      <div className="py-20 bg-bg-dark border-t border-border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-cinzel text-3xl md:text-4xl text-white mb-8">
            The Battlefield Awaits
          </h3>
          <Countdown />
        </div>
      </div>
    </motion.div>
  );
}
