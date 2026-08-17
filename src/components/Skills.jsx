import { motion } from 'framer-motion';
import {
  FaMicrochip,
  FaIndustry,
  FaCubes,
  FaCode,
  FaLanguage,
  FaCheckCircle,
  FaBolt,
  FaLaptopCode,
} from 'react-icons/fa';

const skillCategories = [
  {
    id: 'embedded',
    title: 'Systèmes Embarqués & Robotique',
    icon: <FaMicrochip className="cat-icon cyan" />,
    description: 'Conception hardware/software, temps réel, communication et navigation autonome.',
    competences: [
      'Programmation embarquée C/C++',
      'Protocoles de communication (CAN, Modbus, UART, I2C, SPI, MAVLink, ESP-NOW)',
      'Systèmes temps réel & FreeRTOS',
      'Vision par ordinateur & Machine Learning (OpenCV, YOLO)',
      'Lois de commande avancées & Asservissement PID',
      'Navigation autonome, guidage & télémétrie',
    ],
    tools: [
      'STM32 / STM32CubeIDE',
      'ESP32 / Arduino IDE',
      'Raspberry Pi',
      'Betaflight / INAV',
      'ArduPilot / QGroundControl',
      'Mission Planner',
      'ROS',
      'KiCad (PCB Design)',
      'VS Code',
    ],
  },
  {
    id: 'automation',
    title: 'Automatisme & Contrôle Industriel',
    icon: <FaIndustry className="cat-icon blue" />,
    description: 'Automatisation d’installations critiques, supervision SCADA et réseaux de terrain.',
    competences: [
      'Automates Programmables Industriels (PLC)',
      'Supervision SCADA & Télégouvernance',
      'Instrumentation process & Métrologie (PT100, capteurs de pression, gaz, vibration)',
      'Réseaux industriels (Modbus TCP/IP, Profibus, Ethernet IP)',
      'Installations CFO / CFA & Électrotechnique',
      'Électronique de puissance & Alimentation embarquée',
    ],
    tools: [
      'Schneider Control Expert',
      'Siemens STEP 7 & TIA Portal',
      'Ignition SCADA',
      'Relais Sepam Series 80',
      'Schneider Modicon M580',
      'CANECO BT / HT',
      'AutoCAD',
      'GMAO',
      'Norme NF C 15-100',
    ],
  },
  {
    id: 'mechanical',
    title: 'Conception Mécanique & Simulation',
    icon: <FaCubes className="cat-icon emerald" />,
    description: 'Modélisation 3D, cinématique, prototypage rapide et validation numérique.',
    competences: [
      'Conception mécanique 3D & Assemblage vissé',
      'Cinématique directe et inverse de mécanismes articulés',
      'Impression 3D (FDM) & Fabrication assistée',
      'Câblage haute puissance, soudage & bancs de test',
      'Modélisation et simulation physique multiphysique',
    ],
    tools: [
      'SolidWorks (CAO 3D)',
      'MATLAB / Simulink',
      'Gazebo Simulator',
      'Factory I/O',
    ],
  },
  {
    id: 'dev-ai',
    title: 'Développement & Intelligence Artificielle',
    icon: <FaCode className="cat-icon gold" />,
    description: 'Développement logiciel robuste, traitement d’images et modèles d’IA.',
    competences: [
      'Architecture logicielle modulaire',
      'Traitement d’images temps réel & détection d’objets',
      'Modélisation mathématique & physique',
      'Gestion de versions & collaboration Git',
      'Intégration d’outils d’IA & LLMs (Codex, Claude, etc.)',
    ],
    tools: [
      'Python',
      'C / C++',
      'OpenCV',
      'YOLOv8',
      'Git / GitHub',
      'Pascal',
      'SQLite',
    ],
  },
];

const languagesData = [
  { name: 'Arabe', level: 'Langue maternelle', badge: 'Natif' },
  { name: 'Français', level: 'Maîtrise professionnelle', badge: 'C1' },
  { name: 'Anglais', level: 'Niveau professionnel', badge: 'B1 / B2' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Arsenal Technique</span>
          <h2 className="section-title-large">
            Compétences & <span className="highlight-cyan">Outils Maîtrisés</span>
          </h2>
          <p className="section-subtitle">
            Une double compétence forte entre l'ingénierie matérielle (électronique, automatismes, mécanique) et le développement logiciel temps réel / IA.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="card-top">
                <div className="icon-wrapper">{cat.icon}</div>
                <div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                  <p className="skill-card-desc">{cat.description}</p>
                </div>
              </div>

              <div className="competence-block">
                <h4 className="block-label">Domaines de Compétences</h4>
                <ul className="comp-list">
                  {cat.competences.map((c, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-bullet" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tools-block">
                <h4 className="block-label">Outils & Technologies</h4>
                <div className="tools-pills">
                  {cat.tools.map((t, i) => (
                    <span key={i} className="tool-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Soft Skills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="languages-bar-card"
        >
          <div className="lang-header">
            <FaLanguage className="lang-icon" />
            <div>
              <h3>Langues & Communication</h3>
              <p>Facilité d'intégration dans des équipes pluridisciplinaires et internationales.</p>
            </div>
          </div>

          <div className="lang-items-grid">
            {languagesData.map((lang, index) => (
              <div key={index} className="lang-item">
                <div className="lang-meta">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-badge">{lang.badge}</span>
                </div>
                <span className="lang-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
          position: relative;
        }

        .skills-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
        }

        .skill-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(0, 229, 255, 0.35);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.6rem;
        }

        .cat-icon.cyan { color: var(--accent-cyan); }
        .cat-icon.blue { color: var(--accent-blue); }
        .cat-icon.emerald { color: var(--accent-emerald); }
        .cat-icon.gold { color: var(--accent-gold); }

        .skill-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .skill-card-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .block-label {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.85rem;
        }

        .comp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .comp-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .check-bullet {
          color: var(--accent-cyan);
          font-size: 0.75rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .tools-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .tool-pill {
          padding: 0.3rem 0.65rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          font-size: 0.76rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .tool-pill:hover {
          background: rgba(0, 229, 255, 0.1);
          border-color: rgba(0, 229, 255, 0.4);
          color: var(--accent-cyan);
        }

        .languages-bar-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          backdrop-filter: blur(10px);
        }

        .lang-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang-icon {
          font-size: 2.2rem;
          color: var(--accent-cyan);
        }

        .lang-header h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .lang-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .lang-items-grid {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .lang-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 0.9rem 1.25rem;
          min-width: 180px;
        }

        .lang-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.25rem;
        }

        .lang-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .lang-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          background: rgba(0, 229, 255, 0.15);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
          font-weight: 700;
        }

        .lang-level {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .languages-bar-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .lang-items-grid {
            width: 100%;
            flex-direction: column;
          }
          .lang-item {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
