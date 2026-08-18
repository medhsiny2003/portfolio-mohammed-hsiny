import { motion } from 'framer-motion';
import { FaIndustry, FaBolt, FaWrench, FaShip, FaCheck, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';

// Real Images uploaded by Mohammed
import stageOcpImg from '../assets/images/stage_ocp_real.jpg';
import stageCimarImg from '../assets/images/stage_cimar_real.jpg';
import stageMarsaImg from '../assets/images/stage_marsa_real.jpg';

const experiences = [
  {
    id: 'ocp',
    company: 'Groupe OCP — Direction Maroc Chimie',
    location: 'Plateforme Industrielle de Safi',
    period: 'Juillet 2026 — Présent',
    role: 'Stage Ingénieur — Supervision SCADA d’une Station Moyenne Tension (MT)',
    image: stageOcpImg,
    icon: <FaBolt />,
    badgeColor: 'cyan',
    summary: 'Centralisation du contrôle-commande et sécurisation de l’alimentation électrique critique des stations de pompage.',
    achievements: [
      'Traitement de l’absence de supervision entre la station Moyenne Tension et la salle de contrôle pour sécuriser le pompage d’eau de mer et l’alimentation des ateliers.',
      'Architecture d’automatisme et télégestion pour la centralisation du contrôle-commande des 12 cellules MT (9 moteurs/pompes, arrivées électriques).',
      'Configuration des relais de protection Sepam Series 80, programmation du protocole Modbus TCP/IP sur automate Schneider Modicon M580.',
      'Développement de la supervision SCADA sous Ignition : gestion des alarmes en temps réel, télécommandes sécurisées et monitoring des puissances I / U / P.',
    ],
    tags: ['Modicon M580', 'Ignition SCADA', 'Sepam Series 80', 'Modbus TCP/IP', 'Moyenne Tension (MT)', 'Réseaux Industriels'],
  },
  {
    id: 'cimar',
    company: 'Ciments du Maroc — Heidelberg Materials',
    location: 'Usine de Safi',
    period: 'Août — Septembre 2025',
    role: 'Stage Technique — Maintenance Électrique & Instrumentation',
    image: stageCimarImg,
    icon: <FaWrench />,
    badgeColor: 'blue',
    summary: 'Maintenance des équipements lourds de broyage, instrumentation de process et analyse des entraînements de puissance.',
    achievements: [
      'Opérations de maintenance préventive et corrective sur broyeurs à boules, compresseurs haute capacité et pompes de process.',
      'Suivi et traçabilité des interventions techniques via la GMAO du site industriel.',
      'Étalonnage et diagnostic d’instrumentation process : analyseurs de gaz, sondes de température PT100, capteurs de pression, vibration et proximité.',
      'Étude technique approfondie du démarrage électrolytique (rhéostat à liquide) du moteur asynchrone à rotor bobiné du broyeur.',
    ],
    tags: ['Instrumentation Process', 'GMAO', 'Sondes PT100', 'Rhéostat à Liquide', 'Moteurs Asynchrones', 'Sécurité Industrielle'],
  },
  {
    id: 'marsa',
    company: 'Marsa Maroc — Direction du Port de Safi',
    location: 'Port de Safi',
    period: 'Juillet 2025',
    role: 'Stagiaire Ingénieur — Fiabilisation d’une Grue Portuaire',
    image: stageMarsaImg,
    icon: <FaShip />,
    badgeColor: 'emerald',
    summary: 'Étude de sûreté de fonctionnement, automatisation du graissage et monitoring distant IoT/SCADA.',
    achievements: [
      'Étude de fiabilité de la grue portuaire G40T via l’analyse de l’historique des pannes et l’évaluation des indicateurs AMDEC, MTBF, MTTR et taux de disponibilité.',
      'Automatisation du graissage préventif sans intervention humaine : pilotage asservi de pompe par compteur horaire.',
      'Conception d’une solution IoT communicante à distance (routeur 4G industriel Teltonika).',
      'Développement d’une IHM SCADA dédiée pour l’historisation temporelle et le contrôle du cycle de graissage.',
    ],
    tags: ['IoT Teltonika 4G', 'AMDEC & Sûreté', 'Indicateurs MTBF/MTTR', 'IHM SCADA', 'Automatisation', 'Maintenance Prédictive'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="exp-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Immersion Industrielle</span>
          <h2 className="section-title-large">
            L'Industrie comme <span className="highlight-cyan">Terrain d'Apprentissage</span>
          </h2>
          <p className="section-subtitle">
            Des expériences concrètes au sein de leaders industriels qui ont forgé ma rigueur technique, ma capacité de diagnostic d'urgence et ma maîtrise des installations critiques.
          </p>
        </div>

        {/* Industrial Highlights Banner */}
        <div className="industrial-banner">
          <div className="banner-item">
            <FaShieldAlt className="banner-icon" />
            <div>
              <strong>Rigueur & Habilitations</strong>
              <span>Respect strict des consignes HSE, consignations électriques et travail en milieu continu.</span>
            </div>
          </div>
          <div className="banner-item">
            <FaBolt className="banner-icon" />
            <div>
              <strong>Diagnostic Méthodique</strong>
              <span>Analyse de pannes sur réseaux Modbus, bus de terrain, automates et capteurs industriels.</span>
            </div>
          </div>
          <div className="banner-item">
            <FaIndustry className="banner-icon" />
            <div>
              <strong>Intégration IoT & SCADA</strong>
              <span>Supervision temps réel, télégestion et digitalisation des flux de maintenance.</span>
            </div>
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="experience-cards-stack">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="experience-card"
            >
              <div className="card-two-col-layout">
                {/* Left Side: Content */}
                <div className="card-main-content">
                  <div className="card-top-bar">
                    <div className="company-meta">
                      <div className={`exp-icon-box ${exp.badgeColor}`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="company-name">{exp.company}</h3>
                        <span className="company-location">
                          <FaMapMarkerAlt className="map-pin-icon" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="period-pill">{exp.period}</div>
                  </div>

                  <h4 className="role-title">{exp.role}</h4>
                  <p className="summary-text">{exp.summary}</p>

                  <div className="achievements-list">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="achievement-row">
                        <FaCheck className="check-bullet" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tags-wrapper">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Real Photo */}
                <div className="card-photo-panel">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="stage-real-img"
                    loading="lazy"
                  />
                  <div className="photo-panel-overlay"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
          position: relative;
        }

        .exp-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .industrial-banner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.75rem 2rem;
          margin-bottom: 3.5rem;
          backdrop-filter: blur(10px);
        }

        .banner-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .banner-icon {
          font-size: 1.5rem;
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .banner-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .banner-item span {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .experience-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .experience-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
        }

        .experience-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(0, 229, 255, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
        }

        .card-two-col-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
        }

        .card-main-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .card-photo-panel {
          position: relative;
          background: #080c14;
          overflow: hidden;
          min-height: 280px;
        }

        .stage-real-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .experience-card:hover .stage-real-img {
          transform: scale(1.05);
        }

        .photo-panel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(16, 22, 32, 0.7) 0%,
            transparent 40%
          );
        }

        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .company-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .exp-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .exp-icon-box.cyan {
          background: rgba(0, 229, 255, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
        }

        .exp-icon-box.blue {
          background: rgba(59, 130, 246, 0.12);
          color: var(--accent-blue);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .exp-icon-box.emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .company-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .company-location {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.15rem;
        }

        .map-pin-icon {
          font-size: 0.75rem;
          color: var(--accent-cyan);
        }

        .period-pill {
          padding: 0.35rem 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .role-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent-cyan);
          margin-bottom: 0.6rem;
        }

        .summary-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .achievement-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .check-bullet {
          color: var(--accent-cyan);
          font-size: 0.85rem;
          margin-top: 0.35rem;
          flex-shrink: 0;
        }

        .tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--glass-border);
        }

        .tech-badge {
          padding: 0.3rem 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .card-two-col-layout {
            grid-template-columns: 1fr;
          }
          .card-photo-panel {
            height: 240px;
          }
          .photo-panel-overlay {
            background: linear-gradient(
              to top,
              rgba(16, 22, 32, 0.8) 0%,
              transparent 50%
            );
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
