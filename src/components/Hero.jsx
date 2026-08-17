import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaArrowRight, FaAward, FaIndustry, FaRobot, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes simulation for cybernetic/industrial electrical grid
    const numParticles = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background gradient glow
      const grad = ctx.createRadialGradient(
        width * 0.65,
        height * 0.4,
        50,
        width * 0.65,
        height * 0.4,
        width * 0.7
      );
      grad.addColorStop(0, 'rgba(0, 229, 255, 0.05)');
      grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
      grad.addColorStop(1, 'rgba(6, 8, 13, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Particle circle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pfe-status-badge"
          >
            <span className="pulse-dot"></span>
            <span>RECHERCHE DE STAGE PFE (6 MOIS) · JANVIER 2027</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-role-tag"
          >
            Élève Ingénieur · FST Mohammedia
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-main-title"
          >
            MOHAMMED <span className="highlight-cyan">HSINY</span>
            <span className="hero-subheading">
              Génie Électrique & <span className="text-gradient">Contrôle Industriel</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-description"
          >
            Passionné par l'intégration <strong>hardware & software</strong>, les <strong>systèmes embarqués critiques</strong>, 
            la <strong>robotique autonome</strong>, les <strong>drones</strong> et l'<strong>automatisation SCADA / PLC</strong>. 
            Je conçois et prototype des solutions fiables et innovantes pour l'industrie et la R&D.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-cta-group"
          >
            <a href="#projects" className="btn-primary-tech">
              <span>Voir les Projets</span>
              <FaArrowRight />
            </a>

            <a
              href="/docs/CV_Mohammed_HSINY.pdf"
              download="CV_Mohammed_HSINY.pdf"
              className="btn-secondary-tech"
            >
              <FaFileDownload />
              <span>Télécharger CV (PDF)</span>
            </a>

            <a
              href="/docs/Portfolio_Mohammed_HSINY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-tech outline-glow"
            >
              <span>Portfolio Complet (8p)</span>
            </a>
          </motion.div>

          {/* Metrics Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-metrics-grid"
          >
            <div className="metric-card">
              <div className="metric-icon-box">
                <FaIndustry className="icon cyan" />
              </div>
              <div className="metric-info">
                <span className="metric-value">3+ Stages</span>
                <span className="metric-label">OCP, Ciments du Maroc, Marsa Maroc</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box">
                <FaRobot className="icon blue" />
              </div>
              <div className="metric-info">
                <span className="metric-value">8+ Projets</span>
                <span className="metric-label">Drones HT/FPV, ADAS, Bras 6-DOF</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box">
                <FaAward className="icon gold" />
              </div>
              <div className="metric-info">
                <span className="metric-value">3 Prix</span>
                <span className="metric-label">Compétitions Nationales & Summer School</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-box">
                <FaUsers className="icon emerald" />
              </div>
              <div className="metric-info">
                <span className="metric-value">Président</span>
                <span className="metric-label">Club RoboThings & Fondateur RoboDays</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 5rem;
          background: var(--bg-deep);
          overflow: hidden;
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-content {
          max-width: 950px;
        }

        .pfe-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 1.1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 100px;
          color: #34d399;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          font-family: var(--font-mono);
          margin-bottom: 1.5rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseAnim 2s infinite;
        }

        @keyframes pulseAnim {
          0% { transform: scale(0.95); opacity: 0.8; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); opacity: 0.8; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-role-tag {
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .hero-main-title {
          font-size: clamp(2.8rem, 6.5vw, 4.8rem);
          line-height: 1.08;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero-subheading {
          display: block;
          font-size: clamp(1.6rem, 3.8vw, 2.6rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }

        .text-gradient {
          background: linear-gradient(135deg, #f8fafc 30%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 820px;
          margin-bottom: 2.5rem;
        }

        .hero-description strong {
          color: var(--text-primary);
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .outline-glow {
          border-color: rgba(0, 229, 255, 0.35);
          color: var(--accent-cyan);
        }

        .outline-glow:hover {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
        }

        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
        }

        .metric-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: var(--transition-fast);
        }

        .metric-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          background: var(--bg-card-hover);
        }

        .metric-icon-box {
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon.cyan { color: var(--accent-cyan); }
        .icon.blue { color: var(--accent-blue); }
        .icon.gold { color: var(--accent-gold); }
        .icon.emerald { color: var(--accent-emerald); }

        .metric-info {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .metric-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 7rem 1.5rem 4rem;
          }
          .hero-cta-group {
            flex-direction: column;
          }
          .btn-primary-tech, .btn-secondary-tech {
            width: 100%;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
