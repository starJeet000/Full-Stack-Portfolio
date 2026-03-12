import { useEffect } from 'react';
import { Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Contact from './components/Contact.tsx';

// 1. Tell the browser immediately (before React even loads) NOT to remember scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function App() {
  useEffect(() => {
    // 2. Force scroll to top with a 0ms delay to beat the browser's native engine
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 300,
    });
  }, []);

  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      // THE SLEEK DARK COLOR WAVE
      // Transitions smoothly between Obsidian, Midnight Purple, Deep Teal, and Dark Slate
      background: 'linear-gradient(-45deg, #050505, #1e132d, #0d2729, #0f172a, #050505)',
      backgroundSize: '400% 400%',
      // Slow 25-second breathing animation
      animation: 'sleekWave 25s ease infinite',
      '@keyframes sleekWave': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;