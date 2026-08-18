import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMicrochip, FaCode, FaCheck, FaPlay, FaVideo } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

// Real Images uploaded by Mohammed
import droneFromScratchImg from '../assets/images/drone_fromscratch.jpg';
import moiAvecFpvImg from '../assets/images/moi_avec_fpv.jpg';
import skypharmaRealImg from '../assets/images/skypharma_chassis_real.jpg';
import smartCityRealImg from '../assets/images/smart_city_disposition.jpg';
import robotHumanoideRealImg from '../assets/images/robot_humanoide_real.jpg';
import circuitBistableRealImg from '../assets/images/circuit_bistable_real.jpg';
import droneFieldImg from '../assets/images/drone_fpv_field.jpg';
import bras6DofRealImg from '../assets/images/bras_6dof_real.jpg';
import suiveurLigneRealImg from '../assets/images/suiveur_ligne_real.jpg';

const projectsData = [
  {
    id: 'drone-ht',
    title: "Drone d'inspection des lignes HT & From-Scratch",
    category: "Drones & Aéro",
    description: "Conception, usinage et assemblage complet d'un drone autonome pour l'inspection des lignes Haute Tension avec détection d'anomalies par IA embarquée.",
    tags: ["ArduPilot", "YOLO", "Python", "Vision IA", "MAVLink", "From-Scratch"],
    image: droneFromScratchImg,
    hardware: [
      "Châssis carbone sur-mesure assemblé pour supporter les charges utiles",
      "Contrôleur de vol open-source avec firmware ArduPilot / Pixhawk",
      "Calculateur embarqué pour inférence de modèles de vision temps réel",
      "Système de télémétrie longue portée MAVLink et transmission vidéo sécurisée",
    ],
    software: [
      "Pipeline de détection d'isolateurs et d'anomalies thermiques/mécaniques sous YOLOv8",
      "Planification de mission et navigation autonome waypoint via QGroundControl",
      "Traitement vidéo embarqué OpenCV et logging télémétrique complet",
    ],
    impact: "Automatisation et sécurisation accrue de l'inspection des infrastructures électriques HT, réduisant les risques humains et les temps d'arrêt.",
  },
  {
    id: 'drone-fpv-7',
    title: "Drone FPV Freestyle & Compétition (ENSA Oujda)",
    category: "Drones & Aéro",
    description: "Conception et pilotage de drones FPV haute performance. Démonstrations en vol acrobatique et épreuves compétitives nationales.",
    tags: ["Betaflight", "FPV 7\"", "Brushless", "ESC 4-en-1", "LiPo High-C", "Démonstration Vol"],
    image: moiAvecFpvImg,
    videoUrl: "/videos/fpv_demo_oujda.mp4",
    videoTitle: "Démonstration en Vol FPV · Compétition ENSA Oujda",
    hardware: [
      "Châssis carbone 7 pouces renforcé contre les torsions aérodynamiques",
      "Moteurs brushless haute puissance avec hélices équilibrées dynamiquement",
      "ESC 4-en-1 haute intensité sous protocole numérique DShot",
      "Émetteur vidéo analogique/digital faible latence avec lunettes FPV",
    ],
    software: [
      "Configuration et calibration avancée sous configurateur Betaflight",
      "Réglage des filtres passe-bas dynamiques et notch gyro pour éliminer le bruit mécanique",
      "Optimisation des courbes de commande RC et des PID rates pour une précision millimétrique",
    ],
    impact: "Maîtrise complète de la dynamique de vol rapide, de l'aérodynamique et du pilotage manuel d'urgence.",
  },
  {
    id: 'skypharma',
    title: "SkyPharma – Robot cartésien de gestion de stock",
    category: "Robotique & ADAS",
    description: "Robot cartésien automatisé avec cinématique H-Bot, interface web et gestion de stock SQLite pour la dispensation rapide de médicaments.",
    tags: ["H-Bot", "GRBL", "SQLite", "Python", "IHM Web", "G-Code"],
    image: skypharmaRealImg,
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
    id: 'flotte-adas',
    title: "Plateforme multi-robots ADAS (Challenge ENIM)",
    category: "Robotique & ADAS",
    description: "Flotte de robots autonomes communicants avec asservissement PID haute précision, protocole ESP-NOW et épreuves de pilotage en arène compétitive.",
    tags: ["ESP-NOW", "PID", "Détection d'obstacles", "Challenge ENIM", "ESP32", "Smart City"],
    image: smartCityRealImg,
    videoUrl: "/videos/robot_challenge_enim.mp4",
    videoTitle: "Épreuve de Conduite & Navigation Robotique · Challenge ENIM",
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
    impact: "Validation sur piste compétitive des temps de réponse et de la coordination coopérative inter-robots.",
  },
  {
    id: 'robot-humanoide',
    title: "Robot Humanoïde Bipède",
    category: "Robotique & ADAS",
    description: "Structure articulée bipède avec synchronisation multi-servos, régulation de puissance 5V/10A dédiée, détection d'obstacles et génération de marche.",
    tags: ["Servomoteurs", "Locomotion", "Ultrasons", "Régulation 5V/10A", "Stabilité ZMP"],
    image: robotHumanoideRealImg,
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
    id: 'bras-6dof',
    title: "Bras manipulateur robotisé 6 DOF",
    category: "Robotique & ADAS",
    description: "Conception mécanique, cinématique inverse et contrôle-commande embarqué temps réel d'un bras 6 axes avec IHM de supervision.",
    tags: ["SolidWorks", "STM32", "C++", "Python", "Cinématique Inverse", "FreeRTOS"],
    image: bras6DofRealImg,
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
    id: 'suiveur-ligne',
    title: "Robot Suiveur de Ligne Rapide",
    category: "Électronique & Prototypage",
    description: "Robot mobile de vitesse avec barrette de capteurs optiques haute sensibilité, filtrage analogique et asservissement PID haute fréquence.",
    tags: ["Régulation PID", "Capteurs Optiques", "Vitesse", "Filtrage Analogique", "Pont en H"],
    image: suiveurLigneRealImg,
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
    title: "Circuit Automatisme & Logique Séquentielle",
    category: "Automatisme & SCADA",
    description: "Réalisation matérielle de circuits bistables, bascules JK, compteurs asynchrones et portes logiques pour le pilotage d'étapes d'automatisme.",
    tags: ["Bascules JK", "Bistable", "Logique Séquentielle", "Bancs de Test", "Électronique"],
    image: circuitBistableRealImg,
    hardware: [
      "Composants TTL/CMOS : bascules JK, circuits bistables, portes logiques NAND/NOR",
      "Générateur d'horloge avec réglage précis de fréquence et rapport cyclique",
      "Banc de LEDs d'état et actionneurs relais pour la commande de charges",
      "Vérification des chronogrammes et fronts d'horloge à l'oscilloscope numérique",
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
              Des prototypes physiques concrets et testés en conditions réelles et compétitives : drones, robots autonomes, systèmes cinématiques et cartes électroniques.
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

        {/* Video Highlights Banner */}
        <div className="video-spotlight-card">
          <div className="spotlight-header">
            <FaVideo className="spotlight-icon" />
            <div>
              <h3>Démonstrations Vidéo en Compétitions Nationales</h3>
              <p>Visionnez les démonstrations en vol FPV et les épreuves de navigation robotique en direct.</p>
            </div>
          </div>
          <div className="video-grid-dual">
            {/* Video 1: FPV Oujda */}
            <div className="video-player-box">
              <div className="video-wrapper">
                <video
                  controls
                  preload="metadata"
                  className="native-video-player"
                  poster={moiAvecFpvImg}
                >
                  <source src="/videos/fpv_demo_oujda.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos HTML5.
                </video>
              </div>
              <div className="video-caption">
                <span className="video-tag">Compétition ENSA Oujda</span>
                <h4>Démonstration de Vol & Pilotage Drone FPV</h4>
              </div>
            </div>

            {/* Video 2: Challenge ENIM */}
            <div className="video-player-box">
              <div className="video-wrapper">
                <video
                  controls
                  preload="metadata"
                  className="native-video-player"
                  poster={smartCityRealImg}
                >
                  <source src="/videos/robot_challenge_enim.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos HTML5.
                </video>
              </div>
              <div className="video-caption">
                <span className="video-tag">Challenge Robotique ENIM</span>
                <h4>Conduite & Navigation sur Arène Compétitive</h4>
              </div>
            </div>
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
                {/* Embedded Video in Modal if Available */}
                {activeModalProject.videoUrl && (
                  <div className="modal-video-container">
                    <h4 className="modal-section-title">
                      <FaPlay className="section-play-icon" /> {activeModalProject.videoTitle}
                    </h4>
                    <video controls className="modal-video-element">
                      <source src={activeModalProject.videoUrl} type="video/mp4" />
                      Votre navigateur ne supporte pas la vidéo HTML5.
                    </video>
                  </div>
                )}

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
          margin-bottom: 3rem;
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

        /* Video Spotlight Card */
        .video-spotlight-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 2rem;
          margin-bottom: 3.5rem;
          backdrop-filter: blur(10px);
        }

        .spotlight-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .spotlight-icon {
          font-size: 2rem;
          color: var(--accent-cyan);
        }

        .spotlight-header h3 {
          font-size: 1.3rem;
          margin-bottom: 0.2rem;
        }

        .spotlight-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .video-grid-dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .video-player-box {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .native-video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-caption {
          padding: 1.25rem;
        }

        .video-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
          display: block;
          margin-bottom: 0.35rem;
        }

        .video-caption h4 {
          font-size: 1rem;
          color: var(--text-primary);
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
          background: rgba(4, 6, 10, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
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

        .modal-video-container {
          background: #000;
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          overflow: hidden;
          padding: 1rem;
        }

        .modal-section-title {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-play-icon {
          font-size: 0.8rem;
        }

        .modal-video-element {
          width: 100%;
          max-height: 350px;
          border-radius: 8px;
          background: #000;
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

        @media (max-width: 900px) {
          .video-grid-dual {
            grid-template-columns: 1fr;
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
