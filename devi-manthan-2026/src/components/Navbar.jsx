import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import LotusIcon from './ui/LotusIcon';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Legends', path: '/legends' },
    { name: 'Events', path: '/events' },
    { name: 'Register', path: '/register' }
  ];

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gold z-[60]" 
        style={{ width: `${scrollProgress}%` }}
      />
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-2 bg-bg-dark/85 backdrop-blur-xl border-b border-border-gold shadow-lg shadow-black/50' : 'py-4 bg-bg-dark/30 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <LotusIcon size={32} color="#D4AF37" className={scrolled ? 'animate-spin-slow' : ''} />
            <span className="font-cinzel font-bold text-gold text-xl tracking-wider">DEVI-MANTHAN</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-raleway transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 ${
                  location.pathname === link.path ? 'text-gold after:w-full' : 'text-text-muted hover:text-gold after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/register"
              className="inline-block font-cinzelPlain border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-bg-dark transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            >
              Enter Battlefield
            </Link>
          </div>

          <button 
            className="md:hidden text-gold text-2xl z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg-dark/95 backdrop-blur-3xl z-[55] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-cinzel text-3xl ${location.pathname === link.path ? 'text-gold font-bold scale-110' : 'text-text-muted'} block text-center`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 }}
              className="mt-4"
            >
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzelPlain border border-gold text-gold px-8 py-3 rounded-full text-xl"
              >
                Enter Battlefield
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
