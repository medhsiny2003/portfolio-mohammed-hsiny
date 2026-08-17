import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaLightbulb, FaCheck, FaMedal } from 'react-icons/fa';
import robothingsStageImg from '../assets/images/robothings_stage.jpg';

const distinctions = [
  {
    place: '1er Prix',
    emoji: '🥇',
    title: 'International Summer School',
    orgs: 'ENSEM | ENSAO | FSTM | FSBM Casablanca',
    highlight: 'Projet d’innovation et présentation devant jury international',
    color: 'gold',
  },
  {
    place: '2e Prix',
    emoji: '🥈',
    title: 'Compétition Nationale de Robotique',
    orgs: 'ENSA Khouribga | ENIM Rabat',
    highlight: 'Performance robotique autonome et vitesse de traitement',
    color: 'silver',
  },
  {
    place: '3e Prix',
    emoji: '🥉',
    title: 'Compétition Nationale de Robotique',
    orgs: 'EMI Rabat | ENSA El Jadida',
    highlight: 'Navigation autonome & épreuves techniques sur piste',
    color: 'bronze',
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Engagement & Distinctions</span>
          <h2 className="section-title-large">
            Leadership, Transmission & <span className="highlight-gold">Prix Nationaux</span>
          </h2>
          <p className="section-subtitle">
            Animer des équipes, vulgariser la technologie et relever des défis compétitifs de haut niveau.
          </p>
        </div>

        {/* Leadership Cards: RoboThings + RoboDays */}
        <div className="leadership-grid">
          {/* Club RoboThings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="leadership-card"
          >
            <div className="card-photo-wrapper">
              <img
                src={robothingsStageImg}
                alt="Présentation RoboThings par Mohammed HSINY"
                className="leadership-photo"
              />
              <div className="photo-badge">2024 — 2026</div>
            </div>

            <div className="card-content-body">
              <div className="lead-header">
                <FaUsers className="lead-icon cyan" />
                <div>
                  <h3 className="lead-role">Président — Club RoboThings</h3>
                  <span className="lead-sub">FST Mohammedia</span>
                </div>
              </div>

              <ul className="lead-list">
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Management & Vision :</strong> Supervision et gestion globale des activités, projets et effectifs du club.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Encadrement Technique :</strong> Formation des membres sur les systèmes embarqués (STM32, Arduino, conception PCB KiCad, CAO SolidWorks).</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Ateliers & Projets :</strong> Organisation de workshops pratiques et développement de solutions robotiques collaboratives.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Compétition RoboDays */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="leadership-card"
          >
            <div className="robodays-banner">
              <div className="banner-content">
                <span className="banner-tag">Événement National</span>
                <h3>Compétition RoboDays</h3>
                <p>Initiative & pilotage d’une compétition nationale d’innovation réunissant étudiants, ingénieurs et passionnés du Maroc.</p>
              </div>
            </div>

            <div className="card-content-body">
              <div className="lead-header">
                <FaLightbulb className="lead-icon gold" />
                <div>
                  <h3 className="lead-role">Fondateur & Coordinateur</h3>
                  <span className="lead-sub">Compétition Nationale RoboDays</span>
                </div>
              </div>

              <ul className="lead-list">
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Cahiers des Charges :</strong> Rédaction et formalisation technique des épreuves (drones autonomes, robots suiveurs de ligne, évitement d’obstacles).</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Coordination Logistique :</strong> Gestion des partenariats industriels, sponsors, logistique et accueil des équipes participantes.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Jurys d’Évaluation :</strong> Mise en place des barèmes d’évaluation technique et animation des jurys de pitch.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Awards & Distinctions Block */}
        <div className="distinctions-block">
          <div className="distinctions-header">
            <FaTrophy className="trophy-header-icon" />
            <div>
              <h3>Distinctions en Compétitions Nationales & Internationales</h3>
              <p>Reconnaissance de la rigueur technique, de l’innovation matérielle et de la qualité des présentations.</p>
            </div>
          </div>

          <div className="awards-grid">
            {distinctions.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`award-card ${award.color}`}
              >
                <div className="award-top-row">
                  <span className="award-emoji">{award.emoji}</span>
                  <span className="award-rank">{award.place}</span>
                </div>
                <h4 className="award-event">{award.title}</h4>
                <h5 className="award-orgs">{award.orgs}</h5>
                <p className="award-highlight">{award.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
        }

        .leadership-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .leadership-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
        }

        .leadership-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(245, 158, 11, 0.35);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
        }

        .card-photo-wrapper {
          position: relative;
          height: 240px;
          background: #080c14;
        }

        .leadership-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .photo-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          padding: 0.3rem 0.8rem;
          background: rgba(6, 8, 13, 0.85);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .robodays-banner {
          height: 240px;
          background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
          border-bottom: 1px solid var(--glass-border);
          padding: 2rem;
          display: flex;
          align-items: center;
          position: relative;
        }

        .robodays-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.15), transparent 70%);
        }

        .banner-content {
          position: relative;
          z-index: 2;
        }

        .banner-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .banner-content h3 {
          font-size: 1.6rem;
          margin-bottom: 0.6rem;
          color: #fff;
        }

        .banner-content p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-content-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .lead-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .lead-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }
        .lead-icon.cyan { color: var(--accent-cyan); }
        .lead-icon.gold { color: var(--accent-gold); }

        .lead-role {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .lead-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .lead-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .lead-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .lead-list strong {
          color: var(--text-primary);
        }

        /* Distinctions Block */
        .distinctions-block {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .distinctions-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .trophy-header-icon {
          font-size: 2.4rem;
          color: var(--accent-gold);
        }

        .distinctions-header h3 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
        }

        .distinctions-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .award-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.75rem;
          transition: var(--transition-fast);
          position: relative;
        }

        .award-card:hover {
          transform: translateY(-4px);
        }

        .award-card.gold {
          border-color: rgba(245, 158, 11, 0.4);
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.06) 0%, transparent 100%);
        }

        .award-card.silver {
          border-color: rgba(148, 163, 184, 0.4);
          background: linear-gradient(135deg, rgba(148, 163, 184, 0.06) 0%, transparent 100%);
        }

        .award-card.bronze {
          border-color: rgba(217, 119, 6, 0.4);
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.06) 0%, transparent 100%);
        }

        .award-top-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .award-emoji {
          font-size: 1.6rem;
        }

        .award-rank {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .award-event {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .award-orgs {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .award-highlight {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Leadership;
