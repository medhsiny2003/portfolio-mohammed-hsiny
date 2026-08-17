import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLayerGroup, FaMicrochip, FaCode, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

// Images
import droneFpvImg from '../assets/images/drone_fpv_field.jpg';
import robothingsImg from '../assets/images/robothings_stage.jpg';
import atvImg from '../assets/ATV_dynamic.png';
import explodedImg from '../assets/b9ebb3c8-3181-4bd6-81fb-b93bdfac5105.jpg';
import cobotImg from '../assets/co-bot.png';
import borewellImg from '../assets/borewell.jpg';
import simulationImg from '../assets/simulation.png';
import autoVehicleImg from '../assets/autonomouse_vehicle.jpg';

const projectsData = [
  {
    id: 'drone-ht',
    title: "Drone quadricoptère d'inspection des lignes HT",
    category: "Drones & Aéro",
    description: "Conception et réalisation d'un drone autonome pour l'inspection des lignes Haute Tension avec détection d'anomalies par IA embarquée.",
    tags: ["ArduPilot", "YOLO", "Python", "Vision IA", "MAVLink", "Télémétrie"],
    image: droneFpvImg,
    hardware: [
      "Contrôleur de vol open-source avec firmware ArduPilot / Pixhawk",
      "Calculateur embarqué pour inférence temps réel",
      "Capteur optique haute résolution sur nacelle stabilisée 2 axes",
      "Système de télémétrie longue portée MAVLink (915 MHz / 433 MHz)",
    ],
    software: [
      "Pipeline de détection d'isolateurs et d'anomalies thermiques/mécaniques sous YOLOv8",
      "Planification de mission et navigation autonome waypoint via QGroundControl / Mission Planner",
      "Traitement vidéo embarqué OpenCV et logging télémétrique complet",
    ],
    impact: "Automatisation et sécurisation accrue de l'inspection des infrastructures électriques HT, réduisant les risques humains et les temps d'arrêt.",
  },
  {
    id: 'skypharma',
    title: "SkyPharma – Robot cartésien de gestion de stock",
    category: "Robotique & ADAS",
    description: "Robot cartésien automatisé avec interface web et gestion de stock SQLite pour la dispensation et l'inventaire en temps réel de médicaments.",
    tags: ["H-Bot", "GRBL", "SQLite", "Python", "IHM Web", "G-Code"],
    image: simulationImg,
    hardware: [
      "Structure mécanique cinématique H-Bot avec profilés aluminium V-Slot",
      "Moteurs pas-à-pas NEMA avec drivers micro-stepping haute précision",
      "Préhenseur électromécanique / ventouse de préhension avec capteur de vide",
      "Carte de commande microcontrôleur sous firmware GRBL",
    ],
    software: [
      "Serveur applicatif et API développés sous Python",
      "Base de données relationnelle SQLite pour la traçabilité des lots et stocks",
      "Interface utilisateur web responsive pour la commande et le diagnostic",
    ],
    impact: "Automatisation de la délivrance médicamenteuse avec zéro erreur de picking et inventaire instantané.",
  },
  {
    id: 'bras-6dof',
    title: "Bras manipulateur robotisé 6 DOF",
    category: "Robotique & ADAS",
    description: "Conception mécanique, cinématique inverse et contrôle-commande embarqué temps réel d'un bras 6 axes avec IHM de supervision.",
    tags: ["SolidWorks", "STM32", "C++", "Python", "Cinématique Inverse", "FreeRTOS"],
    image: explodedImg,
    hardware: [
      "Modélisation mécanique complète sous SolidWorks avec optimisation des masses",
      "Servomoteurs numériques haute puissance à pignons métalliques",
      "Microcontrôleur STM32 (ARM Cortex-M) pour la génération des signaux PWM",
      "Alimentation de puissance régulée avec protections thermiques et surintensités",
    ],
    software: [
      "Calculs trigonométriques de cinématique directe et inverse (IK) en temps réel en C++",
      "Algorithme de lissage de trajectoire et limitation d'accélération articulaire",
      "IHM Python de commande avec modes manuel, coordonné cartésien et Teach & Repeat",
    ],
    impact: "Démonstrateur complet de manipulation robotique industrielle polyvalente et programmable.",
  },
  {
    id: 'flotte-adas',
    title: "Plateforme multi-robots avec fonctions ADAS",
    category: "Robotique & ADAS",
    description: "Flotte de robots autonomes communicants avec asservissement PID haute précision, protocole ESP-NOW et fonctions de sécurité avancées.",
    tags: ["ESP-NOW", "PID", "Détection d'obstacles", "Systèmes Autonomes", "ESP32"],
    image: cobotImg,
    hardware: [
      "Châssis différentiel à deux roues motrices et roulette folle",
      "Microcontrôleurs ESP32 avec communication sans fil maillée ultra-rapide",
      "Réseau de capteurs télémétriques à ultrasons et infrarouges",
      "Encodeurs incrémentaux en quadrature sur les axes moteurs",
    ],
    software: [
      "Protocole radio point-à-point ESP-NOW (< 2ms de latence) pour le partage d'état",
      "Double régulateur PID pour le maintien d'allure et la synchronisation de vitesse",
      "Fonctions ADAS : Régulateur de vitesse adaptatif (ACC), freinage d'urgence autonome et évitement d'obstacle en convoi",
    ],
    impact: "Étude et validation des architectures de communication coopératives pour véhicules autonomes communicants.",
  },
  {
    id: 'drone-fpv-7',
    title: "Drone FPV Freestyle 7 pouces",
    category: "Drones & Aéro",
    description: "Conception et assemblage complet d'un drone FPV 7\" longue autonomie avec optimisation de la propulsion brushless et réglage fin des filtres PID sous Betaflight.",
    tags: ["Betaflight", "FPV 7\"", "Brushless", "ESC 4-en-1", "LiPo High-C", "Filtres PID"],
    image: droneFpvImg,
    hardware: [
      "Châssis carbone 7 pouces renforcé contre les torsions aérodynamiques",
      "Moteurs brushless dimensionnés pour grand ratio poussée/masse",
      "ESC 4-en-1 haute intensité sous protocole numérique DShot",
      "Système de transmission vidéo temps réel avec OSD actif",
    ],
    software: [
      "Configuration et calibration avancée sous configurateur Betaflight",
      "Réglage des filtres passe-bas dynamiques et notch gyro pour éliminer le bruit mécanique",
      "Acquisition et analyse des logs boîte noire (Blackbox Explorer) pour réglage PID parfait",
    ],
    impact: "Maîtrise complète de la dynamique de vol rapide, de l'aérodynamique et du diagnostic matériel haute puissance.",
  },
  {
    id: 'robot-humanoide',
    title: "Robot Humanoïde Bipède",
    category: "Robotique & ADAS",
    description: "Structure articulée bipède avec synchronisation multi-servos, régulation de puissance 5V/10A dédiée, détection d'obstacles et génération de marche.",
    tags: ["Servomoteurs", "Locomotion", "Ultrasons", "Régulation 5V/10A", "Stabilité ZMP"],
    image: borewellImg,
    hardware: [
      "Structure multi-axes articulée à liaison mécanique vissée",
      "Batterie Li-Po associée à un étage d'abaissement DC-DC buck haute intensité (10A)",
      "Capteur de distance à ultrasons pour détection prédictive des collisions",
      "Microcontrôleur maître cadençant la génération séquentielle des pas",
    ],
    software: [
      "Génération de trajectoires articulaires pour respect du Zero Moment Point (ZMP)",
      "Gestion d'états : repos, marche avant, virage dynamique et évitement d'obstacle",
      "Optimisation de la consommation électrique lors des phases d'arrêt",
    ],
    impact: "Exploration des dynamiques d'équilibre et de locomotion bio-inspirée.",
  },
  {
    id: 'suiveur-ligne',
    title: "Robot Suiveur de Ligne Rapide",
    category: "Électronique & Prototypage",
    description: "Robot mobile de vitesse avec barrette de capteurs optiques haute sensibilité, filtrage analogique et asservissement PID haute fréquence.",
    tags: ["Régulation PID", "Capteurs Optiques", "Vitesse", "Filtrage Analogique", "Pont en H"],
    image: autoVehicleImg,
    hardware: [
      "Barrette de photodétecteurs avec conditionnement de signal à faible impédance",
      "Moteurs DC haute vitesse avec réducteurs micro-métalliques",
      "Drivers de puissance MOSFET à commutation rapide",
      "Châssis ultra-léger profilé pour abaisser le centre de gravité",
    ],
    software: [
      "Filtrage et pondération numérique des signaux analogiques de contraste",
      "Boucle de régulation PID cadencée à haute fréquence pour virages à angle droit",
      "Gestion des départs arrêtés et zones d'intersections complexes",
    ],
    impact: "Optimisation extrême des temps de boucle de régulation et de la stabilité dynamique à haute vitesse.",
  },
  {
    id: 'logique-cablee',
    title: "Circuit Automatisme & Logique Câblée",
    category: "Automatisme & SCADA",
    description: "Système séquentiel matériel à base de bascules JK, compteurs asynchrones et portes logiques pour le pilotage d'étapes d'automatisme.",
    tags: ["Bascules JK", "Logique Séquentielle", "Automatisme", "Bancs de Test", "Électronique"],
    image: atvImg,
    hardware: [
      "Composants TTL/CMOS : bascules JK, portes logiques NAND/NOR, décodeurs",
      "Générateur d'horloge à base de NE555 avec réglage de fréquence et de rapport cyclique",
      "Banc de LEDs d'état et actionneurs relais pour la commande de charges de puissance",
      "Vérification des chronogrammes et fronts montants/descendants à l'oscilloscope",
    ],
    software: [
      "Modélisation GRAFCET et diagrammes d'états de transition",
      "Synthèse des équations logiques par méthode des tableaux de Karnaugh",
      "Simulation préliminaire sous logiciel de CAO électronique",
    ],
    impact: "Compréhension profonde des mécanismes fondamentaux de la logique séquentielle et de la robustesse matérielle.",
  },
];

const categories = [
  "Tous",
  "Drones & Aéro",
  "Robotique & ADAS",
  "Automatisme & SCADA",
  "Électronique & Prototypage",
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header-bar">
          <div>
            <span className="section-tag">Projets d'Ingénierie & Prototypage</span>
            <h2 className="section-title-large">
              Conceptions & <span className="highlight-cyan">Réalisations Techniques</span>
            </h2>
            <p className="section-subtitle">
              Une sélection de projets hardware et software alliant modélisation CAO, développement embarqué, vision par ordinateur et essais sur le terrain.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="category-filter-list">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActiveModalProject}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog for Project Details */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Fermer la modale"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <span className="modal-category-tag">{activeModalProject.category}</span>
                <h2 className="modal-title">{activeModalProject.title}</h2>
                <p className="modal-lead">{activeModalProject.description}</p>
              </div>

              <div className="modal-body-scroll">
                {/* Tech Badges */}
                <div className="modal-tags-bar">
                  {activeModalProject.tags.map((tag) => (
                    <span key={tag} className="modal-tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Sections */}
                <div className="modal-arch-grid">
                  <div className="arch-card">
                    <div className="arch-card-header">
                      <FaMicrochip className="arch-icon cyan" />
                      <h4>Architecture Matérielle & Électronique</h4>
                    </div>
                    <ul className="arch-list">
                      {activeModalProject.hardware.map((item, i) => (
                        <li key={i}>
                          <FaCheck className="item-bullet" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="arch-card">
                    <div className="arch-card-header">
                      <FaCode className="arch-icon blue" />
                      <h4>Architecture Logicielle & Protocoles</h4>
                    </div>
                    <ul className="arch-list">
                      {activeModalProject.software.map((item, i) => (
                        <li key={i}>
                          <FaCheck className="item-bullet" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact / Results Box */}
                <div className="impact-box">
                  <strong>Impact & Retombées :</strong> {activeModalProject.impact}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
        }

        .projects-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .projects-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .category-filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          background: var(--bg-card);
          padding: 0.35rem;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .category-tab {
          padding: 0.5rem 1.1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .category-tab:hover {
          color: var(--text-primary);
        }

        .category-tab.active {
          background: var(--accent-cyan);
          color: #040914;
          box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 10, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        .modal-dialog {
          background: #0d121c;
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: 24px;
          max-width: 850px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: var(--transition-fast);
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: var(--text-primary);
          transform: rotate(90deg);
        }

        .modal-header {
          padding: 2.5rem 2.5rem 1.5rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .modal-category-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .modal-title {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
          padding-right: 2rem;
        }

        .modal-lead {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-body-scroll {
          padding: 2rem 2.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .modal-tags-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-tag-badge {
          padding: 0.35rem 0.8rem;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          color: var(--accent-cyan);
          border-radius: 6px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .modal-arch-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .arch-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .arch-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .arch-icon {
          font-size: 1.3rem;
        }
        .arch-icon.cyan { color: var(--accent-cyan); }
        .arch-icon.blue { color: var(--accent-blue); }

        .arch-card-header h4 {
          font-size: 0.95rem;
        }

        .arch-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .arch-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .item-bullet {
          color: var(--accent-cyan);
          font-size: 0.75rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .impact-box {
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          font-size: 0.9rem;
          color: #a7f3d0;
          line-height: 1.6;
        }

        .impact-box strong {
          color: #34d399;
        }

        @media (max-width: 768px) {
          .modal-header {
            padding: 1.75rem 1.5rem 1rem;
          }
          .modal-body-scroll {
            padding: 1.5rem;
          }
          .modal-arch-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
