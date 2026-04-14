import { motion } from 'framer-motion';
import RevealWrapper from '../components/ui/RevealWrapper';
import Countdown from '../components/Countdown';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { useEffect, useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';

export default function RegisterPage() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Make sure we scroll to top on load since this is a new page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{flexGrow: 1}}
    >
      <div style={{height: '110px'}}></div>

      {/* Floating Thematic Elements */}
      <div className="f-elem f-bow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
          <path d="M10 50 C 10 20, 90 20, 90 50" stroke="#F5C518" strokeWidth="2" />
          <path d="M10 50 L 90 50" stroke="#F5C518" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="f-elem f-chakra" style={{ top: '60%', right: '10%' }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
          <circle cx="50" cy="50" r="45" stroke="#F5C518" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="10" stroke="#F5C518" strokeWidth="2" />
          {[...Array(8)].map((_, i) => (
            <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos(i * Math.PI / 4)} y2={50 + 40 * Math.sin(i * Math.PI / 4)} stroke="#F5C518" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* ════════════ REGISTER HERO ════════════ */}
      <section id="register" style={{ paddingTop: '40px' }}>
        <div className="reg-glow"></div>
        <div className="reg-box r v">
          <span className="reg-sym">⚔</span>
          <h2 className="reg-title">The Conch Has Sounded</h2>
          <p className="reg-body">
            The greatest war is fought not with weapons — but with <strong>knowledge, skill, and innovation.</strong>
            Gather your team and prepare for the ultimate technical showdown. Registration is now open!
          </p>

          <RevealWrapper delay={0.2} className="mb-10">
            <Countdown />
          </RevealWrapper>
          
          <div className="reg-btns">
            <button className="btn-fire" onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}>
              <span><i className="fa-solid fa-bolt" style={{marginRight:'8px'}}></i>Enter the Battlefield</span>
            </button>
          </div>
        </div>
      </section>

      <div className="sdiv" style={{ margin: '40px 0' }}></div>

      {/* Include FAQ & Contact wrapped in our style boundaries */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <FAQ />
      </div>
      
      <div className="sdiv" style={{ margin: '40px 0' }}></div>

      <div style={{ position: 'relative', zIndex: 3 }} id="contact">
        <Contact />
      </div>

      <div className="sdiv" style={{ marginTop: '80px', marginBottom: '40px' }}></div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
}
