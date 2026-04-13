import { motion } from 'framer-motion';
import RevealWrapper from '../components/ui/RevealWrapper';
import VasukiDivider from '../components/ui/VasukiDivider';

const characters = [
  {
    id: 'krishna',
    name: 'Lord Krishna',
    title: 'The Divine Strategist',
    image: '/characters/krishna.png',
    description: 'The master of strategy and wisdom. His guidance forms the ultimate framework for leadership and architecture. Embrace his vision to master intricate logic and resource management.',
    alignsWith: 'NETRUTVA (IT Manager)'
  },
  {
    id: 'arjuna',
    name: 'Arjuna',
    title: 'The Peerless Archer',
    image: '/characters/arjuna.png',
    description: 'Unmatched focus and precision. With his bow Gandiva, no target is out of reach. Channel Arjuna\'s clarity to swiftly hunt down bugs and deploy flawless solutions.',
    alignsWith: 'SAMADHAN (Debugging)'
  },
  {
    id: 'karna',
    name: 'Karna',
    title: 'The Warrior of the Sun',
    image: '/characters/karna.png',
    description: 'A symbol of relentless dedication, immense skill, and fierce pride. Harness Karna\'s unyielding innovation to forge and launch products that conquer the market.',
    alignsWith: 'NAVONMESH (Product Launch)'
  },
  {
    id: 'bhishma',
    name: 'Bhishma Pitamah',
    title: 'The Invincible Patriarch',
    image: '/characters/bhishma.png',
    description: 'The invincible grand-sire bound by a terrible oath. His vast experience and unshakable foundation inspire coders to build timeless and robust algorithms.',
    alignsWith: 'SRIJAN (Coding Validation)'
  }
];

export default function LegendsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-bg-dark min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-dark/80 to-bg-dark z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealWrapper className="text-center mb-16">
          <div className="text-gold tracking-[4px] text-xs font-bold uppercase mb-4">The Epic Characters</div>
          <h2 className="font-cinzel text-5xl md:text-6xl text-white mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Legends of the <span className="text-primary-light">Mahabharata</span>
          </h2>
          <VasukiDivider />
          <p className="font-raleway text-text-muted text-lg max-w-2xl mx-auto mt-6">
            Discover the mythological icons that drive the spirit of DEVI-MANTHAN 2026. Whose path will you choose to conquer the battlefield of technology?
          </p>
        </RevealWrapper>

        <div className="space-y-24">
          {characters.map((char, index) => (
            <motion.div 
              key={char.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-[600px] object-cover rounded-2xl border-2 border-gold/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMUEwNjA5Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IiNENEFGMzciIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFydHdvcmsgR2VuZXJhdGluZzwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute top-4 left-4 border border-gold/50 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full">
                  <h3 className="font-cinzel text-xl text-gold font-bold tracking-wider">{char.name}</h3>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h4 className="font-cinzelPlain text-3xl md:text-4xl text-primary-light">
                  {char.title}
                </h4>
                <div className="w-16 h-1 bg-gold rounded-full" />
                <p className="font-raleway text-lg text-text-muted leading-relaxed">
                  {char.description}
                </p>
                <div className="bg-bg-surface/50 border border-border-gold/30 p-6 rounded-xl mt-8">
                  <div className="text-xs text-gold uppercase tracking-widest font-bold mb-2">Aligns With Fest Event</div>
                  <div className="font-cinzel text-2xl text-white">{char.alignsWith}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
