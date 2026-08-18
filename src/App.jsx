import { useEffect } from 'react';
import Lenis from 'lenis';
import { FaHeart, FaChevronUp, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Modern English Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top-row">
            <div className="footer-brand">
              <span className="brand-title">MOHAMMED HSINY</span>
              <p className="brand-subtitle">
                Electrical & Industrial Control Engineer · Seeking 6-Month PFE Internship (Jan 2027)
              </p>
            </div>

            <div className="footer-socials">
              <a
                href="https://wa.me/212611424571"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-hsiny"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mohammedhsiny2@gmail.com"
                className="footer-social-link"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-back-to-top"
              aria-label="Back to top"
            >
              <FaChevronUp />
            </button>
          </div>

          <div className="footer-bottom-bar">
            <span>© 2026 Mohammed HSINY. All rights reserved.</span>
            <span>FST Mohammedia · Casablanca, Morocco</span>
          </div>
        </div>
      </footer>

      <style>{`
        .site-footer {
          background: #04060a;
          border-top: 1px solid var(--glass-border);
          padding: 3.5rem 2rem 2.5rem;
          color: var(--text-secondary);
        }

        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.25rem;
        }

        .brand-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: var(--transition-fast);
        }

        .footer-social-link:hover {
          background: rgba(0, 229, 255, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .btn-back-to-top {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: var(--transition-fast);
        }

        .btn-back-to-top:hover {
          background: var(--accent-cyan);
          color: #040914;
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3);
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 2rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
}

export default App;
