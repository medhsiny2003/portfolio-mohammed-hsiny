import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaLightbulb, FaCheck } from 'react-icons/fa';

// Real Images uploaded by Mohammed
import robothingsStageImg from '../assets/images/robothings_stage.jpg';
import robodaysEventImg from '../assets/images/robodays_event.jpg';
import awardEnsakhImg from '../assets/images/award_ensakh.jpg';
import awardEnsajImg from '../assets/images/award_ensaj.jpg';
import profileSummerImg from '../assets/images/profile_mohammed.jpg';

const distinctions = [
  {
    place: '1er Prix',
    emoji: '🥇',
    title: 'International Summer School',
    orgs: 'ENSEM | ENSAO | FSTM | FSBM Casablanca',
    highlight: 'Pitch projet d’innovation et présentation devant jury international.',
    image: profileSummerImg,
    color: 'gold',
  },
  {
    place: '2e Prix',
    emoji: '🥈',
    title: 'Compétition Nationale de Robotique',
    orgs: 'ENSA Khouribga | ENIM Rabat',
    highlight: 'Performance en robotique mobile autonome & précision de trajectoire.',
    image: awardEnsakhImg,
    color: 'silver',
  },
  {
    place: '3e Prix',
    emoji: '🥉',
    title: 'Compétition Nationale de Robotique',
    orgs: 'EMI Rabat | ENSA El Jadida',
    highlight: 'Épreuve technique sur piste et vitesse de traitement embarqué.',
    image: awardEnsajImg,
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
            Animer des équipes, vulgariser la technologie et porter des projets ambitieux sur les plus hautes marches des compétitions d'ingénierie.
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
                  <span><strong>Management & Direction :</strong> Supervision des activités, gestion des pôles et coordination des projets du club.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Encadrement Technique :</strong> Formation des membres sur STM32, Arduino, conception PCB KiCad et modélisation CAO SolidWorks.</span>
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
            <div className="card-photo-wrapper">
              <img
                src={robodaysEventImg}
                alt="Événement Compétition RoboDays"
                className="leadership-photo"
              />
              <div className="photo-badge gold">Événement National</div>
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
                  <span><strong>Cahiers des Charges :</strong> Rédaction et formalisation technique des épreuves (drones autonomes, suiveurs de ligne, évitement d’obstacles).</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Coordination Logistique :</strong> Recherche de partenariats industriels, sponsors, logistique et accueil des équipes participantes.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Jurys d’Évaluation :</strong> Définition des critères d’évaluation technique et animation des jurys de pitch.</span>
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
              <h3>Podiums & Distinctions en Compétitions Nationales & Internationales</h3>
              <p>Reconnaissance de la rigueur technique, de l’innovation matérielle et de la qualité des démonstrations en direct.</p>
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
                <div className="award-photo-thumb">
                  <img src={award.image} alt={award.title} className="award-img" />
                  <div className="award-rank-pill">{award.place}</div>
                </div>

                <div className="award-body">
                  <div className="award-top-row">
                    <span className="award-emoji">{award.emoji}</span>
                    <h4 className="award-event">{award.title}</h4>
                  </div>
                  <h5 className="award-orgs">{award.orgs}</h5>
                  <p className="award-highlight">{award.highlight}</p>
                </div>
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
          height: 250px;
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
          padding: 0.35rem 0.9rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .photo-badge.gold {
          color: var(--accent-gold);
          border-color: rgba(245, 158, 11, 0.4);
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.75rem;
        }

        .award-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition-fast);
          position: relative;
        }

        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .award-photo-thumb {
          position: relative;
          height: 190px;
          background: #080c14;
        }

        .award-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .award-rank-pill {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          padding: 0.25rem 0.75rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
        }

        .award-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .award-card.gold {
          border-color: rgba(245, 158, 11, 0.4);
        }
        .award-card.gold .award-rank-pill {
          color: var(--accent-gold);
          border-color: rgba(245, 158, 11, 0.5);
        }

        .award-card.silver {
          border-color: rgba(148, 163, 184, 0.4);
        }
        .award-card.silver .award-rank-pill {
          color: #e2e8f0;
          border-color: rgba(148, 163, 184, 0.5);
        }

        .award-card.bronze {
          border-color: rgba(217, 119, 6, 0.4);
        }
        .award-card.bronze .award-rank-pill {
          color: #fb923c;
          border-color: rgba(217, 119, 6, 0.5);
        }

        .award-top-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .award-emoji {
          font-size: 1.4rem;
        }

        .award-event {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .award-orgs {
          font-size: 0.82rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .award-highlight {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
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
