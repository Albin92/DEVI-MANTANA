import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Timing mapping for clashes based on user's image rules
const EVENT_TIMES = {
  "CHITRAKATHA (Photography)": { start: 9.0, end: 13.0 },
  "SUTRADHARA (IT Manager)": { start: 10.0, end: 16.0 },
  "SPARDHA (Gaming)": { start: 10.0, end: 13.0 },
  "VYUHANTARA (Surprise Event)": { start: 10.0, end: 13.5 },
  "MAYAJAAL (Escape Room)": { start: 10.0, end: 11.5 },
  "VISHWAKARMA (Product Launch)": { start: 11.0, end: 13.5 },
  "ASTRACODERS (Web Designing)": { start: 11.5, end: 13.5 }
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbyfLclDur_fftk-6uNBtScP-Cd9hqSYFLFg8JUfSqvPNtFtq1-ZJ8xeHEAe7H_49fdr3w/exec';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    year: '1st Year',
    dept: 'BCA',
    hasTeammate: false,
    teammateName: '',
    teammateId: '',
    events: []
  });

  const [clashes, setClashes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setFormData({
        name: '', regNo: '', year: '1st Year', dept: 'BCA',
        hasTeammate: false, teammateName: '', teammateId: '', events: []
      });
      setClashes([]);
      setSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    // Check for clashes whenever events change
    const selected = formData.events;
    let foundClashes = [];

    for (let i = 0; i < selected.length; i++) {
      for (let j = i + 1; j < selected.length; j++) {
        const e1 = EVENT_TIMES[selected[i]];
        const e2 = EVENT_TIMES[selected[j]];
        if (e1 && e2) {
          // Exclude photography from clashes if it can happen concurrently
          // According to user's old code: if (selected[i] !== "CAPTURECODE" && selected[j] !== "CAPTURECODE")
          if (!selected[i].includes("Photography") && !selected[j].includes("Photography")) {
            if (e1.start < e2.end && e1.end > e2.start) {
              foundClashes.push(`• ${selected[i]} & ${selected[j]}`);
            }
          }
        }
      }
    }
    setClashes(foundClashes);

    // Auto-hide teammate if solo events only are selected
    const isSoloEventSelected = selected.includes("SUTRADHARA (IT Manager)") || selected.includes("CHITRAKATHA (Photography)");
    if (isSoloEventSelected && selected.length === 1) {
       // Only solo events selected (we could force teammates off, but let's just leave it up to the user since they might have teammates for other events, wait old logic hid it)
       setFormData(prev => ({ ...prev, hasTeammate: false, teammateName: '', teammateId: '' }));
    }

  }, [formData.events]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'eventCheck') {
      const newEvents = checked 
        ? [...formData.events, value]
        : formData.events.filter(event => event !== value);
      setFormData(prev => ({ ...prev, events: newEvents }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.events.length === 0) {
      alert("ERROR: You must select at least one mission to deploy.");
      return;
    }

    if (clashes.length > 0) {
      alert("Please resolve time clashes before confirming deployment.");
      return;
    }

    setLoading(true);

    let finalName = formData.name;
    if (formData.hasTeammate) {
      const tmInfo = [formData.teammateName.trim(), formData.teammateId.trim().toUpperCase()].filter(Boolean).join(" - ");
      if (tmInfo !== "") {
        finalName += ` (Team: ${tmInfo})`;
      }
    }

    const payload = new FormData();
    payload.append('name', finalName);
    payload.append('regNo', formData.regNo.trim().toUpperCase());
    payload.append('year', formData.year);
    payload.append('dept', formData.dept);
    payload.append('event', formData.events.join(", "));

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: payload,
        mode: 'no-cors'
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Error!', err.message);
      alert("Deployment failed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        key="reg-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-y-auto pt-20 pb-10"
      >
        <motion.div 
          key="reg-modal-content"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="bg-[#110818] border-t-4 border-b-4 border-[#D4AF37] w-full max-w-lg p-6 md:p-8 relative shadow-[0_0_30px_rgba(212,175,55,0.3)] my-auto mt-[80px]"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(17, 8, 24, 0.9), rgba(10, 4, 9, 0.95))' }}
        >
          <button onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#D4AF37] transition z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
          </button>

          {!success ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-cinzel text-white tracking-widest uppercase mb-1" style={{textShadow: '0 0 10px rgba(212,175,55,0.5)'}}>
                  Join the <span className="text-[#D4AF37]">Mahabharata</span>
                </h2>
                <p className="text-xs text-[#d4af37] font-rajdhani mb-2 uppercase tracking-widest font-bold">
                  The Kurukshetra Awaits Your Arrival
                </p>
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 mb-2"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                          <label className="block text-xs font-rajdhani text-gray-400 mb-1 tracking-widest uppercase">Warrior Identity (Name)</label>
                          <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full p-2 rounded-sm bg-black/60 border border-white/20 text-[#F5F0E8] font-rajdhani text-base focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                      </div>
                      <div>
                          <label className="block text-xs font-rajdhani text-gray-400 mb-1 tracking-widest uppercase">Registration Number</label>
                          <input name="regNo" value={formData.regNo} onChange={handleChange} required type="text" placeholder="e.g. 23S123" className="w-full p-2 rounded-sm bg-black/60 border border-white/20 text-[#F5F0E8] font-rajdhani text-base uppercase focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                      </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                          <label className="block text-xs font-rajdhani text-gray-400 mb-1 tracking-widest uppercase">Training Year</label>
                          <select name="year" value={formData.year} onChange={handleChange} className="w-full p-2 rounded-sm bg-black/60 border border-white/20 text-[#F5F0E8] font-rajdhani text-base font-bold focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all">
                              <option value="1st Year">1st Year</option>
                              <option value="2nd Year">2nd Year</option>
                              <option value="3rd Year">3rd Year</option>
                          </select>
                      </div>
                      <div>
                          <label className="block text-xs font-rajdhani text-gray-400 mb-1 tracking-widest uppercase">Faction (Dept)</label>
                          <select name="dept" value={formData.dept} onChange={handleChange} className="w-full p-2 rounded-sm bg-black/60 border border-white/20 text-[#F5F0E8] font-rajdhani text-base font-bold focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all">
                              <option value="BCA">BCA</option>
                              <option value="B.Com">B.Com</option>
                              <option value="BBA">BBA</option>
                              <option value="B.Sc">B.Sc</option>
                          </select>
                      </div>
                  </div>

                  {/* Teammate Section */}
                  <div className="border border-[#D4AF37]/30 p-3 bg-[#D4AF37]/5 rounded-sm transition-all duration-300">
                      <label className="flex items-center space-x-3 cursor-pointer">
                          <input type="checkbox" name="hasTeammate" checked={formData.hasTeammate} onChange={handleChange} className="form-checkbox h-4 w-4 text-[#D4AF37] bg-black/50 border-white/30 rounded-sm focus:ring-[#D4AF37]" />
                          <span className="text-xs font-rajdhani text-[#d4af37] font-semibold tracking-widest uppercase mb-0">Add Teammate Formations</span>
                      </label>
                      
                      {formData.hasTeammate && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3"
                        >
                            <div>
                                <label className="block text-xs font-rajdhani text-gray-400 mb-1 tracking-widest uppercase">Teammate Name</label>
                                <input name="teammateName" value={formData.teammateName} onChange={handleChange} type="text" placeholder="e.g. Arjuna" className="w-full p-2 rounded-sm bg-black/60 border border-white/20 text-[#F5F0E8] font-rajdhani text-base focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-rajdhani text-gray-400 mb-1 tracking-widest uppercase">Teammate ID</label>
                                <input name="teammateId" value={formData.teammateId} onChange={handleChange} type="text" placeholder="e.g. 23S124" className="w-full p-2 rounded-sm bg-black/60 border border-white/20 text-[#F5F0E8] font-rajdhani text-base uppercase focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                            </div>
                        </motion.div>
                      )}
                  </div>

                  <div>
                      <label className="block text-xs font-rajdhani text-gray-400 mb-2 tracking-widest uppercase">Select Trials (Check all that apply)</label>
                      <div className="bg-black/50 border border-white/10 p-4 rounded-sm max-h-[14rem] overflow-y-auto custom-scroll space-y-4">
                          <div>
                              <h4 className="text-xs font-cinzel text-[#D4AF37] font-bold tracking-wider mb-2 border-b border-[#D4AF37]/30 pb-1">PHASE 1: THE INITIATION</h4>
                              <div className="space-y-2 mt-2">
                                  {Object.keys(EVENT_TIMES).map((eventName) => (
                                    <label key={eventName} className="flex items-start space-x-3 cursor-pointer group">
                                        <input type="checkbox" name="eventCheck" value={eventName} checked={formData.events.includes(eventName)} onChange={handleChange} className="form-checkbox h-4 w-4 mt-1 text-[#D4AF37] bg-black/50 border-white/30 rounded-sm focus:ring-[#D4AF37]" />
                                        <div className="flex flex-col">
                                          <span className="text-sm font-rajdhani font-semibold text-[#F5F0E8] group-hover:text-[#D4AF37] transition-colors">{eventName}</span>
                                          <span className="text-[10px] font-rajdhani text-gray-500 uppercase tracking-widest">{EVENT_TIMES[eventName].start === 9.0 ? '09:00 AM' : EVENT_TIMES[eventName].start === 10.0 ? '10:00 AM' : EVENT_TIMES[eventName].start === 11.0 ? '11:00 AM' : '11:30 AM'} - {EVENT_TIMES[eventName].end === 11.5 ? '11:30 AM' : EVENT_TIMES[eventName].end === 13.0 ? '01:00 PM' : EVENT_TIMES[eventName].end === 13.5 ? '01:30 PM' : '04:00 PM'}</span>
                                        </div>
                                    </label>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>

                  {clashes.length > 0 && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[#E74C3C] font-rajdhani text-sm font-bold tracking-wider bg-[#E74C3C]/10 p-3 rounded border border-[#E74C3C]/50 mt-2">
                        ⚠️ TIME CLASH DETECTED:<br/>
                        {clashes.map((c, i) => <div key={i}>{c}</div>)}
                    </motion.div>
                  )}

                  <button type="submit" disabled={loading || clashes.length > 0} className="w-full mt-6 flex justify-center items-center py-4 text-xl tracking-widest font-cinzel font-bold border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed uppercase rounded-sm">
                      {loading ? 'Consulting the Gods...' : 'Confirm Registration'}
                  </button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="text-center py-10"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37] mb-6 shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                <i className="fa-solid fa-check text-4xl text-[#D4AF37]"></i>
              </div>
              <h2 className="text-3xl font-cinzel text-white mb-4">You Are Enlisted</h2>
              <p className="text-[#F5F0E8] font-rajdhani text-lg">Your fate is sealed. The battlefield awaits you.</p>
              <p className="text-[#D4AF37] mt-4 font-rajdhani font-bold">{formData.events.map(ev => ev.split('(')[0].trim()).join(' · ')}</p>
            </motion.div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
