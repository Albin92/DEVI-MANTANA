import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorTrail from './components/ui/CursorTrail';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import LegendsPage from './pages/LegendsPage';
import RegisterPage from './pages/RegisterPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/legends" element={<LegendsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="font-raleway min-h-screen flex flex-col relative">
        <CursorTrail />
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
