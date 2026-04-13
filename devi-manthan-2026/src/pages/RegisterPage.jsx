import { motion } from 'framer-motion';
import Register from '../components/Register';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function RegisterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="page-transition-wrapper"
    >
      <Register />
      <FAQ />
      <Contact />
    </motion.div>
  );
}
