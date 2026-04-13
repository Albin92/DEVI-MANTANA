import { motion } from 'framer-motion';
import Events from '../components/Events';
import Coordinators from '../components/Coordinators';

export default function EventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="page-transition-wrapper"
    >
      <Events />
      <Coordinators />
    </motion.div>
  );
}
