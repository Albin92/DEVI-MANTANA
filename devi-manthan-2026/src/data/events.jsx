import React from 'react';
import { FaCrown, FaCode, FaBug, FaCamera, FaCompass, FaChalkboardUser, FaGamepad, FaRocket, FaBrain, FaGlobe, FaMicrochip } from 'react-icons/fa6';

export const events = [
  {
    id: 1, name: 'NETRUTVA', subtitle: 'Krishna\'s Strategy (IT Manager)',
    icon: <FaCrown />, category: 'Management',
    tagline: 'Lead with Vision. Decide with Precision.',
    description: 'Test your leadership, strategic thinking, and IT management skills in real-world simulated scenarios, guided by the wisdom of the Divine Strategist.',
    rules: 'Teams of 2–3 | Registration required | Finals on Day 2'
  },
  {
    id: 2, name: 'SRIJAN', subtitle: 'Vishwakarma\'s Forge (Coding)',
    icon: <FaCode />, category: 'Technical',
    tagline: 'Where Ideas Transform into Code.',
    description: 'Bring your algorithms to life. Solve complex problems under pressure and prove your programming prowess in the celestial forge.',
    rules: 'Individual or pairs | Language of choice | Proctored environment'
  },
  {
    id: 3, name: 'SAMADHAN', subtitle: 'Arjuna\'s Focus (Debugging)',
    icon: <FaBug />, category: 'Technical',
    tagline: 'Decode Problems. Deliver Solutions.',
    description: 'Hunt down bugs with the unmatched focus of Arjuna. Fix broken code and emerge as the ultimate problem-solver in the debugging arena.',
    rules: 'Individual | Multiple rounds | Timed elimination'
  },
  {
    id: 4, name: 'DRISHTI', subtitle: 'Sanjaya\'s Vision (Photography)',
    icon: <FaCamera />, category: 'Creative',
    tagline: 'See Beyond. Capture the Unseen.',
    description: 'Frame stories through your lens with the divine sight of Sanjaya. Compete in photography and short video creation challenges.',
    rules: 'Individual | Own device | Theme announced on event day'
  },
  {
    id: 5, name: 'ANVESHAN', subtitle: 'Sahadeva\'s Quest (Treasure Hunt)',
    icon: <FaCompass />, category: 'Fun',
    tagline: 'Search Smart. Discover More.',
    description: 'Navigate clues, decode puzzles, and race your team to uncover the hidden treasure across the campus battlefield.',
    rules: 'Teams of 3 | Campus-wide | Physical + digital clues'
  },
  {
    id: 6, name: 'PRASTUTI', subtitle: 'Yudhishthira\'s Wisdom (Tech Presentation)',
    icon: <FaChalkboardUser />, category: 'Technical',
    tagline: 'Present Ideas. Inspire Minds.',
    description: 'Showcase your research and tech ideas to a panel of expert judges. Clarity, truth, and confidence win here.',
    rules: 'Teams of 2 | 10-minute presentation + 5-minute Q&A'
  },
  {
    id: 7, name: 'SPARDHA', subtitle: 'Bheema\'s Might (Gaming Tournament)',
    icon: <FaGamepad />, category: 'Gaming',
    tagline: 'Compete. Conquer. Dominate.',
    description: 'Enter the digital battlefield. Compete in popular gaming titles and prove your reflexes and strategy with unstoppable might.',
    rules: 'Individual or teams | Games announced on Day 1 | Knock-out format'
  },
  {
    id: 8, name: 'NAVONMESH', subtitle: 'Karna\'s Arsenal (Product Launch)',
    icon: <FaRocket />, category: 'Innovation',
    tagline: 'Innovate Today. Launch Tomorrow.',
    description: 'Pitch your unique product concept or startup idea. Present an arsenal of innovative features to a live audience and jury.',
    rules: 'Teams of 2–4 | 7-minute pitch | Prototype or deck required'
  },
  {
    id: 9, name: 'MEDHA', subtitle: 'Vidura\'s Intellect (Quiz Competition)',
    icon: <FaBrain />, category: 'Technical',
    tagline: 'Knowledge is Power. Prove Yours.',
    description: 'A multi-round quiz spanning technology, current affairs, science, and logical reasoning demanding impeccable intellect.',
    rules: 'Teams of 2 | Prelims + Finals | Buzzer round included'
  },
  {
    id: 10, name: "ASTRACODERS", subtitle: 'Drona\'s Legacy (Web Design)',
    icon: <FaGlobe />, category: 'Technical',
    tagline: 'Weave Webs. Win Battles.',
    description: "Design and build responsive, creative websites. Inspired by Drona's legacy — master your craft, shape the digital battlefield.",
    rules: 'Individual or pairs | 3-hour build | Theme given on the day'
  },
  {
    id: 11, name: 'YANTRA SPARSHA', subtitle: 'Nakula\'s Craft (Hardware & IoT)',
    icon: <FaMicrochip />, category: 'Innovation',
    tagline: 'Build the Future. Touch Tomorrow.',
    description: 'Design and present hardware prototypes or IoT solutions that solve real-world problems. Where circuits meet creativity.',
    rules: 'Teams of 2–3 | Working prototype preferred | 8-minute demo slot'
  }
];
