import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa6';
import RevealWrapper from './ui/RevealWrapper';

const faqs = [
  { q: "Who can participate in Devi-Manthan 2026?", a: "The fest is open to all intercollegiate students across Karnataka and beyond." },
  { q: "Is there a registration fee?", a: "Registration details including fees (if any) will be announced soon. Contact coordinators for the latest info." },
  { q: "Can one student participate in multiple events?", a: "Yes, participants may register for multiple events subject to schedule availability." },
  { q: "What is the team size for events?", a: "Team sizes vary by event — individual to groups of 3. Check each event's details for specifics." },
  { q: "How do we reach the venue?", a: "Shree Devi College of Information Science, Mangaluru. Exact address and map link available in the Contact section." },
  { q: "Will there be food and refreshments?", a: "Yes, refreshments will be available on campus during the fest." },
  { q: "Can we register on the spot?", a: "Prior online registration is encouraged. On-spot registration is subject to availability — contact coordinators to confirm." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-bg-dark relative">
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <RevealWrapper className="text-center mb-16">
          <div className="text-gold tracking-[4px] text-xs font-bold uppercase mb-4">Frequently Asked</div>
          <h2 className="font-cinzel text-4xl md:text-5xl text-white">The Sage's Counsel</h2>
        </RevealWrapper>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <RevealWrapper key={idx} delay={idx * 0.1}>
              <div className="border-b border-border-gold overflow-hidden">
                <button
                  className="w-full flex justify-between items-center py-5 text-left font-cinzelPlain text-text-primary hover:text-gold transition-colors text-lg"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {faq.q}
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gold text-lg" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-raleway text-text-muted leading-relaxed pb-5 pt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
