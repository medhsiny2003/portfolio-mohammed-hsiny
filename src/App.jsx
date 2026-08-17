import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import './index.css';

function App() {
  useEffect(() => {
    let lenis;
    let animationFrameId;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis scroll initialization error:', err);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}

export default App;
