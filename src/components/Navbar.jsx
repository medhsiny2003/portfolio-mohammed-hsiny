import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Industry', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technical Arsenal', href: '#skills' },
    { name: 'Leadership & Awards', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo-brand">
          <span className="logo-name">MOHAMMED HSINY</span>
          <span className="logo-badge">PFE 2027</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="nav-actions">
          <a
            href="https://wa.me/212611424571"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn whatsapp"
            title="WhatsApp: +212 611 424 571"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-hsiny"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn linkedin"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="/docs/CV_Mohammed_HSINY.pdf"
            download="CV_Mohammed_HSINY.pdf"
            className="btn-nav-cv"
          >
            <FaFileDownload />
            <span>CV</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-drawer"
          >
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.name}
                </a>
              ))}
              <div className="mobile-actions">
                <a
                  href="/docs/CV_Mohammed_HSINY.pdf"
                  download="CV_Mohammed_HSINY.pdf"
                  className="btn-primary-tech full-width"
                >
                  <FaFileDownload /> Download CV
                </a>
                <a
                  href="https://wa.me/212611424571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-tech full-width"
                >
                  <FaWhatsapp /> Direct WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition-smooth);
          padding: 1.25rem 0;
        }

        .navbar-header.scrolled {
          padding: 0.75rem 0;
          background: rgba(6, 8, 13, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .logo-badge {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link:hover {
          color: var(--accent-cyan);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-cyan);
          transition: var(--transition-fast);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .action-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .action-icon-btn:hover {
          transform: translateY(-2px);
          color: var(--text-primary);
        }

        .action-icon-btn.whatsapp:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: #25d366;
          color: #25d366;
        }

        .action-icon-btn.linkedin:hover {
          background: rgba(10, 102, 194, 0.2);
          border-color: #0a66c2;
          color: #38bdf8;
        }

        .btn-nav-cv {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 1rem;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: var(--accent-cyan);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          font-family: var(--font-mono);
          transition: var(--transition-fast);
        }

        .btn-nav-cv:hover {
          background: var(--accent-cyan);
          color: #040914;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3);
        }

        .mobile-toggle {
          display: none;
          font-size: 1.3rem;
          color: var(--text-primary);
          padding: 0.4rem;
        }

        .mobile-drawer {
          background: rgba(6, 8, 13, 0.98);
          border-bottom: 1px solid var(--glass-border);
          overflow: hidden;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          padding: 1.5rem 2rem;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .mobile-nav-link:hover {
          color: var(--accent-cyan);
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .full-width {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .btn-nav-cv {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
