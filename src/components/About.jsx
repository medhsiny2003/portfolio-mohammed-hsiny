import { motion } from 'framer-motion';
import { FaGraduationCap, FaQuoteLeft, FaMicrochip, FaCogs, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import profileImg from '../assets/images/profile_mohammed.jpg';

const educationData = [
  {
    period: '2024 — 2027',
    degree: 'Cycle Ingénieur d’État en Génie Électrique & Contrôle Industriel',
    institution: 'Faculté des Sciences et Techniques (FST) de Mohammedia',
    details: 'Systèmes embarqués temps réel, automatisme industriel avancé, SCADA, régulation & électronique de puissance.',
    current: true,
  },
  {
    period: '2023 — 2024',
    degree: 'Licence ST — Informatique Industrielle & Instrumentation',
    institution: 'Faculté des Sciences et Techniques (FST) d’Errachidia',
    details: 'Acquisition de données, traitement du signal, capteurs intelligents, microcontrôleurs & réseaux industriels.',
  },
  {
    period: '2021 — 2023',
    degree: 'DEUST — Mathématiques, Informatique & Physique (MIP)',
    institution: 'Faculté des Sciences et Techniques (FST) d’Errachidia',
    details: 'Fondements scientifiques rigoureux en mathématiques appliquées, physique fondamentale, électronique et algorithmique.',
  },
  {
    period: '2021',
    degree: 'Baccalauréat en Sciences Physiques',
    institution: 'Lycée Najib Mahfoud — Safi',
    details: 'Mention Bien, spécialité sciences physiques et chimie.',
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Profil Professionnel & Vision</span>
          <h2 className="section-title-large">
            Ingénierie & <span className="highlight-cyan">Excellence Technique</span>
          </h2>
          <p className="section-subtitle">
            Élève ingénieur rigoureux et proactif, combinant savoir-faire théorique et réalisations concrètes sur le terrain.
          </p>
        </div>

        {/* Main Grid: Profile & Vision */}
        <div className="profile-grid">
          {/* Left Column: Photo + Quote + Focus Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-left"
          >
            <div className="image-card-wrapper">
              <div className="image-frame">
                <img src={profileImg} alt="Mohammed HSINY" className="profile-portrait" />
                <div className="image-overlay-glow"></div>
                <div className="status-pill-floating">
                  <span className="dot-active"></span>
                  <span>FST Mohammedia</span>
                </div>
              </div>
            </div>

            {/* Inspiration Quote */}
            <div className="quote-box">
              <FaQuoteLeft className="quote-icon" />
              <p className="quote-text">
                « I have not failed. I've just found 10,000 ways that won't work. »
              </p>
              <span className="quote-author">— Thomas Edison</span>
            </div>

            {/* Core Pillars */}
            <div className="pillars-grid">
              <div className="pillar-item">
                <FaMicrochip className="pillar-icon cyan" />
                <div>
                  <h4>Systèmes Embarqués</h4>
                  <p>STM32, ESP32, FreeRTOS, protocoles CAN / Modbus / MAVLink.</p>
                </div>
              </div>
              <div className="pillar-item">
                <FaShieldAlt className="pillar-icon blue" />
                <div>
                  <h4>Défense & Autonomie</h4>
                  <p>Drones d'inspection, navigation par IA, ADAS & sécurité.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio + Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-right"
          >
            <div className="bio-block">
              <h3 className="bio-title">
                Concevoir, Prototyper & <span className="highlight-cyan">Innover</span>
              </h3>
              <p className="bio-paragraph">
                Élève ingénieur en <strong>Génie Électrique et Contrôle Industriel</strong> à la <strong>FST de Mohammedia</strong>, 
                je suis activement à la recherche d’un <strong>stage PFE de 6 mois à partir de Janvier 2027</strong> dans les domaines 
                des <strong>systèmes embarqués</strong>, de la <strong>robotique</strong>, des <strong>drones</strong>, des <strong>systèmes autonomes</strong> ou de la <strong>défense</strong>.
              </p>
              <p className="bio-paragraph">
                Curieux, autonome et doté d’un fort esprit d’initiative, je développe des projets personnels intégrant hardware et software de bout en bout : conception CAO, dimensionnement de puissance, routage électronique, firmware temps réel et interfaces de supervision. Mes distinctions dans plusieurs compétitions nationales témoignent de ma capacité à concrétiser des solutions novatrices.
              </p>
            </div>

            {/* Academic Formation Timeline */}
            <div className="education-timeline-wrapper">
              <div className="timeline-title-bar">
                <FaGraduationCap className="edu-icon" />
                <h3>Formation Académique</h3>
              </div>

              <div className="edu-timeline">
                {educationData.map((edu, index) => (
                  <div key={index} className={`edu-item ${edu.current ? 'current-edu' : ''}`}>
                    <div className="edu-marker">
                      <span className="edu-dot"></span>
                    </div>
                    <div className="edu-content">
                      <div className="edu-header">
                        <span className="edu-period">{edu.period}</span>
                        {edu.current && <span className="current-badge">En cours</span>}
                      </div>
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <h5 className="edu-inst">{edu.institution}</h5>
                      <p className="edu-details">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
        }

        .about-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-header-centered {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 4.5rem;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 4rem;
          align-items: start;
        }

        .profile-left {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .image-card-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          background: #0d121c;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .profile-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .image-frame:hover .profile-portrait {
          transform: scale(1.03);
        }

        .image-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(6, 8, 13, 0.85) 0%,
            rgba(6, 8, 13, 0.2) 50%,
            transparent 100%
          );
          pointer-events: none;
        }

        .status-pill-floating {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .dot-active {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .quote-box {
          background: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--accent-cyan);
          padding: 1.25rem 1.5rem;
          border-radius: 0 12px 12px 0;
          border-top: 1px solid var(--glass-border);
          border-right: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }

        .quote-icon {
          color: var(--accent-cyan);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          opacity: 0.7;
        }

        .quote-text {
          font-style: italic;
          color: var(--text-primary);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }

        .quote-author {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .pillars-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pillar-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
        }

        .pillar-icon {
          font-size: 1.5rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .pillar-icon.cyan { color: var(--accent-cyan); }
        .pillar-icon.blue { color: var(--accent-blue); }

        .pillar-item h4 {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }

        .pillar-item p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .bio-block {
          margin-bottom: 3rem;
        }

        .bio-title {
          font-size: 1.8rem;
          margin-bottom: 1.25rem;
        }

        .bio-paragraph {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .bio-paragraph strong {
          color: var(--text-primary);
        }

        .education-timeline-wrapper {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .timeline-title-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .edu-icon {
          font-size: 1.5rem;
          color: var(--accent-cyan);
        }

        .timeline-title-bar h3 {
          font-size: 1.3rem;
        }

        .edu-timeline {
          position: relative;
          padding-left: 1.5rem;
        }

        .edu-timeline::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        .edu-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .edu-item:last-child {
          margin-bottom: 0;
        }

        .edu-marker {
          position: absolute;
          left: -1.5rem;
          top: 4px;
        }

        .edu-dot {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg-deep);
          border: 2px solid var(--text-muted);
        }

        .current-edu .edu-dot {
          border-color: var(--accent-cyan);
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .edu-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: var(--transition-fast);
        }

        .edu-content:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .edu-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
        }

        .edu-period {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .current-badge {
          font-size: 0.65rem;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.4);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .edu-degree {
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }

        .edu-inst {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .edu-details {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .image-frame {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
