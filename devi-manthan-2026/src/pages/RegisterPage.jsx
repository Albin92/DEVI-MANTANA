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
