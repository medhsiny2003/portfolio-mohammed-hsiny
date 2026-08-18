import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMicrochip, FaCode, FaCheck, FaPlay, FaVideo, FaImages } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

// Real Images uploaded by Mohammed
import projectHtImg from '../assets/images/project_ht.jpeg';
import droneHtFrameImg from '../assets/images/drone_ht_frame.jpg';
import moiAvecFpvImg from '../assets/images/moi_avec_fpv.jpg';
import projectDroneFpvImg from '../assets/images/project_drone_fpv.jpg';
import projectAdasImg from '../assets/images/project_adas.jpg';
import smartCityFleetImg from '../assets/images/smart_city_fleet.jpg';
import project6dofImg from '../assets/images/project_6dof.jpg';
import bras6dofRealImg from '../assets/images/bras_6dof_real.jpg';
import projectSuiveurImg from '../assets/images/project_suiveur.jpg';
import suiveurLigneRealImg from '../assets/images/suiveur_ligne_real.jpg';
import skypharmaRealImg from '../assets/images/skypharma_chassis_real.jpg';
import skypharmaSolidworksImg from '../assets/images/skypharma_solidworks.png';
import skypharmaScadaImg from '../assets/images/skypharma_scada.png';
import robotHumanoideRealImg from '../assets/images/robot_humanoide_real.jpg';
import circuitBistableRealImg from '../assets/images/circuit_bistable_real.jpg';
import enim11Img from '../assets/images/enim11.jpg';
import tawfirMainImg from '../assets/images/tawfir_main.jpg';
import tawfirHardwareImg from '../assets/images/tawfir_hardware.jpg';
import tawfirPosterImg from '../assets/images/tawfir_poster.jpg';

const projectsData = [
  {
    id: 'drone-ht',
    title: "High Voltage (HV) Power Line Inspection Quadcopter Drone",
    category: "Drones & Aerospace",
    description: "Complete design, custom carbon machining, and flight integration of an autonomous quadcopter dedicated to High Voltage power line inspection and real-time AI anomaly detection.",
    tags: ["ArduPilot", "YOLOv8", "Python", "Vision AI", "MAVLink", "Carbon CNC", "Autonomous Flight"],
    image: projectHtImg,
    galleryImages: [
      { src: projectHtImg, caption: "Completed High Voltage Inspection Quadcopter" },
      { src: droneHtFrameImg, caption: "Custom CNC Carbon Frame Assembly & Avionics" },
    ],
    hardware: [
      "Custom reinforced carbon-fiber chassis engineered to carry mission payloads and withstand high electromagnetic interference",
      "Open-source industrial flight controller with ArduPilot / Pixhawk firmware",
      "High-efficiency brushless propulsion system with dynamic blade balancing",
      "Long-range MAVLink telemetry radio and encrypted high-definition video downlink",
    ],
    software: [
      "Embedded YOLOv8 vision pipeline for real-time electrical insulator fault and thermal hot-spot detection",
      "Autonomous waypoint mission navigation and fail-safe return-to-launch (RTL) routines via QGroundControl",
      "Onboard OpenCV real-time video pre-processing and full flight telemetry logging",
    ],
    impact: "Significantly enhances safety and reduces inspection downtime for High Voltage electrical utility grids.",
  },
  {
    id: 'drone-fpv-7',
    title: "7-Inch Freestyle & Long-Range FPV Drone",
    category: "Drones & Aerospace",
    description: "High-performance FPV racing/freestyle drone engineering. Custom dynamic PID tuning, high-power propulsion, and live acrobatic flight execution.",
    tags: ["Betaflight", "FPV 7\"", "Brushless Motors", "4-in-1 ESC", "High-C LiPo", "Acrobatic Flight"],
    image: moiAvecFpvImg,
    galleryImages: [
      { src: moiAvecFpvImg, caption: "7-inch FPV Quadcopter Ready for Flight Trials" },
      { src: projectDroneFpvImg, caption: "Avionics Stack & Brushless Propulsion Wiring" },
    ],
    videoUrl: "/videos/fpv_demo_oujda.mp4",
    videoTitle: "High-Speed FPV Flight & Aerobatics Demonstration",
    hardware: [
      "Rigid 7-inch carbon-fiber airframe engineered for aerodynamic torque resistance",
      "High-power brushless motors paired with balanced tri-blade propellers",
      "High-amperage 4-in-1 ESC operating on ultra-fast digital DShot protocol",
      "Low-latency FPV video transmitter linked to digital/analog pilot goggles",
    ],
    software: [
      "Advanced flight controller configuration and sensor calibration under Betaflight Configurator",
      "Dynamic low-pass filtering and gyro notch filters to eliminate mechanical resonance noise",
      "Custom PID rates tuning and RC command smoothing for millimeter-precise stick feel",
    ],
    impact: "Deep mastery of high-speed flight dynamics, aerodynamics, and emergency manual recovery control.",
  },
  {
    id: 'tawfir',
    title: "Project Tawfir – Smart Water Distribution & Invisible Leak Detection",
    category: "Embedded AI & IoT",
    description: "Intelligent water management and invisible leak detection solution combining embedded IoT hardware and Machine Learning (Isolation Forest) to monitor real-time consumption and identify pipeline anomalies.",
    tags: ["ESP32", "Isolation Forest", "Machine Learning", "Flow Sensors", "IoT", "Smart Water"],
    image: tawfirMainImg,
    galleryImages: [
      { src: tawfirMainImg, caption: "Project Tawfir – Embedded Acquisition & AI Processing Unit" },
      { src: tawfirHardwareImg, caption: "ESP32 Controller & Water Flow Sensor Rig" },
      { src: tawfirPosterImg, caption: "Project Architecture & Environmental Impact Poster" },
    ],
    hardware: [
      "ESP32 microcontroller serving as the central processing, edge filtering, and wireless telemetry hub",
      "High-precision pulse water flow sensors measuring instantaneous flow rate and total consumption",
      "Low-noise signal conditioning interface and protected embedded power stage",
    ],
    software: [
      "Machine Learning anomaly detection models, utilizing Isolation Forest to model user consumption baselines",
      "Proactive automated detection of micro-leaks, burst pipes, and abnormal consumption patterns",
      "Real-time wireless telemetry data streaming to a dedicated monitoring dashboard",
    ],
    impact: "Mitigates critical water loss, enhances distribution network efficiency, and validated by physical prototypes praised for environmental and socio-economic impact.",
  },
  {
    id: 'skypharma',
    title: "SkyPharma – Automated Cartesian Medicine Storage Robot",
    category: "Robotics & ADAS",
    description: "Automated cartesian inventory robot built with H-Bot kinematics, a Python web dashboard, and SQLite database for rapid, error-free pharmaceutical dispensing.",
    tags: ["H-Bot Kinematics", "GRBL", "SQLite", "Python", "Web HMI", "SolidWorks"],
    image: skypharmaRealImg,
    galleryImages: [
      { src: skypharmaRealImg, caption: "SkyPharma H-Bot Cartesian Mechanical Structure" },
      { src: skypharmaSolidworksImg, caption: "SolidWorks 3D CAD Assembly & Kinematic Study" },
      { src: skypharmaScadaImg, caption: "Web SCADA Supervision & Inventory Dashboard" },
    ],
    videoUrl: "/videos/skypharma_demo.mp4",
    videoTitle: "SkyPharma Automated Cartesian Robot Dispensing Demo",
    hardware: [
      "Lightweight H-Bot cartesian kinematic structure built with V-Slot aluminum extrusions and linear rails",
      "High-torque NEMA stepper motors coupled with high-precision micro-stepping drivers",
      "Electromechanical picking gripper / vacuum suction cup with integrated pressure sensor",
      "Microcontroller motion board flashed with GRBL motion control firmware",
    ],
    software: [
      "Python backend application server and RESTful command API",
      "Relational SQLite database managing real-time stock levels, drug expiration dates, and lot traceability",
      "Responsive web interface for live order dispatching and diagnostic motor jogging",
    ],
    impact: "Streamlines pharmacy dispensing workflows with zero picking errors and instant real-time inventory reconciliation.",
  },
  {
    id: 'flotte-adas',
    title: "Multi-Robot Autonomous Fleet & ADAS Platform",
    category: "Robotics & ADAS",
    description: "Autonomous cooperative mobile robot fleet with closed-loop PID control, sub-2ms ESP-NOW mesh networking, vehicle-to-vehicle telemetry, and obstacle avoidance.",
    tags: ["ESP-NOW", "PID Control", "Obstacle Avoidance", "ESP32", "Smart Fleet", "V2V Network"],
    image: projectAdasImg,
    galleryImages: [
      { src: projectAdasImg, caption: "Autonomous Robot Unit with ADAS Sensing Stack" },
      { src: smartCityFleetImg, caption: "Multi-Robot Communicating Fleet on Smart City Arena" },
    ],
    videoUrl: "/videos/robot_challenge_enim.mp4",
    videoTitle: "Autonomous Arena Driving & Cooperative Navigation Demo",
    hardware: [
      "Differential drive mobile chassis with dual DC gearmotors and caster wheel",
      "ESP32 master microcontrollers with ultra-low latency mesh radio links",
      "Array of ultrasonic distance sensors and infrared proximity modules",
      "Dual quadrature optical encoders mounted on motor drive shafts",
    ],
    software: [
      "Point-to-point ESP-NOW wireless protocol (< 2ms latency) for continuous vehicle-to-vehicle (V2V) state sharing",
      "Dual-loop PID speed and heading regulation for synchronous platoon cruising",
      "Active ADAS features: Adaptive Cruise Control (ACC), autonomous emergency braking (AEB), and cooperative convoy obstacle bypass",
    ],
    impact: "Demonstrated real-time V2V cooperation and autonomous obstacle avoidance under tight dynamic conditions.",
  },
  {
    id: 'bras-6dof',
    title: "6-DOF Articulated Robotic Arm",
    category: "Robotics & ADAS",
    description: "Mechanical design, analytical inverse kinematics (IK), and real-time embedded control of a 6-axis articulated robot with an interactive Python supervision GUI.",
    tags: ["SolidWorks", "STM32", "C++", "Python GUI", "Inverse Kinematics", "PWM"],
    image: project6dofImg,
    galleryImages: [
      { src: project6dofImg, caption: "6-DOF Articulated Arm Joint Prototype" },
      { src: bras6dofRealImg, caption: "CAD Optimization & Multi-Axis Servo Links" },
    ],
    hardware: [
      "Full 3D CAD mechanical assembly designed in SolidWorks with mass distribution optimization",
      "High-torque metal-gear digital servos on all 6 rotational axes",
      "STM32 (ARM Cortex-M) microcontroller generating multi-channel synchronized PWM signals",
      "Dedicated high-amperage regulated power rail with over-current and thermal protection",
    ],
    software: [
      "Real-time analytical Forward and Inverse Kinematics (FK/IK) computations in C++",
      "Joint trajectory smoothing algorithms with angular velocity and acceleration limiting",
      "Interactive Python GUI providing manual coordinate control, cartesian jog, and Teach & Repeat replay",
    ],
    impact: "Functional proof-of-concept for versatile, programmable industrial pick-and-place automation.",
  },
  {
    id: 'suiveur-ligne',
    title: "High-Speed Autonomous Line-Follower Robot",
    category: "Electronics & Prototyping",
    description: "Speed-optimized mobile robot featuring a high-density optical sensor bar, analog signal conditioning, and high-frequency PID trajectory tracking.",
    tags: ["PID Control", "Optical Sensor Bar", "High Speed", "H-Bridge MOSFET", "Analog Filtering"],
    image: projectSuiveurImg,
    galleryImages: [
      { src: projectSuiveurImg, caption: "High-Speed Lightweight Line-Follower Chassis" },
      { src: suiveurLigneRealImg, caption: "Optical Sensor Array & High-RPM Coreless DC Motors" },
    ],
    hardware: [
      "Custom multi-sensor phototransistor array with low-impedance signal conditioning circuitry",
      "High-RPM coreless DC motors with micro metal gearboxes",
      "Fast-switching MOSFET H-bridge motor drivers capable of high peak current",
      "Ultra-low profile, lightweight chassis to lower center of gravity and reduce cornering inertia",
    ],
    software: [
      "Digital weighted averaging of analog contrast readings for sub-millimeter line position estimation",
      "High-frequency closed-loop PID controller tuned for aggressive 90-degree cornering",
      "Adaptive launch control and intersection crossing detection algorithms",
    ],
    impact: "Maximized control loop execution speed and high-speed dynamic stability on test tracks.",
  },
  {
    id: 'robot-humanoide',
    title: "Bipedal Humanoid Robot Prototype",
    category: "Robotics & ADAS",
    description: "Articulated biped robot with multi-servo synchronization, dedicated 5V/10A high-current buck power stage, ultrasonic collision sensing, and dynamic gait planning.",
    tags: ["Servo Coordination", "Biped Locomotion", "Ultrasonic Sensing", "5V/10A DC-DC", "ZMP Stability"],
    image: robotHumanoideRealImg,
    galleryImages: [
      { src: robotHumanoideRealImg, caption: "Bipedal Articulated Prototype & High-Current Power Rail" },
    ],
    hardware: [
      "Multi-joint articulated skeletal structure with precision aluminum servo brackets",
      "LiPo battery pack paired with a high-efficiency 5V/10A step-down DC-DC buck converter",
      "Ultrasonic rangefinder for proactive distance and collision obstacle detection",
      "Master microcontroller orchestrating synchronous multi-servo motion profiles",
    ],
    software: [
      "Gait trajectory generation incorporating Zero Moment Point (ZMP) stability approximations",
      "Finite State Machine (FSM) managing standby, forward walk, dynamic turning, and obstacle avoidance states",
      "Power-saving holding torque reduction during idle phases",
    ],
    impact: "Practical exploration of dynamic balance, joint kinematics, and bio-inspired robotics locomotion.",
  },
  {
    id: 'logique-cablee',
    title: "Hardwired Sequential Logic & Automation Testbench",
    category: "Electronics & Prototyping",
    description: "Physical circuit design and breadboard implementation of bistable multivibrators, JK flip-flops, asynchronous binary counters, and combinational logic for automation sequencing.",
    tags: ["JK Flip-Flops", "Bistable Circuit", "Sequential Logic", "Hardware Testbench", "Electronics"],
    image: circuitBistableRealImg,
    galleryImages: [
      { src: circuitBistableRealImg, caption: "Bistable Multivibrator & JK Flip-Flop Test Circuit" },
    ],
    hardware: [
      "TTL/CMOS IC components: 74LS76 JK flip-flops, 555 timers, NAND/NOR logic gates, and transistor drivers",
      "Variable clock pulse generator with adjustable frequency and duty cycle control",
      "LED status annunciator matrix and relay output drivers for industrial load switching",
      "Signal timing and clock edge validation performed using a digital storage oscilloscope",
    ],
    software: [
      "GRAFCET sequential function charts and finite state transition diagrams",
      "Logic equation minimization using Karnaugh mapping (K-Maps)",
      "Pre-assembly circuit simulation on electronic CAD software",
    ],
    impact: "Fundamental mastery of hardwired sequential logic, clock propagation delays, and hardware noise immunity.",
  },
];

const categories = [
  "All",
  "Drones & Aerospace",
  "Robotics & ADAS",
  "Embedded AI & IoT",
  "Electronics & Prototyping",
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header-bar">
          <div>
            <span className="section-tag">Engineering & Hardware Prototyping</span>
            <h2 className="section-title-large">
              Featured <span className="highlight-cyan">Technical Projects</span>
            </h2>
            <p className="section-subtitle">
              Fully built and field-tested physical systems: autonomous drones, smart water IoT AI, mobile robot fleets, cartesian kinematics, and custom electronic circuits.
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

        {/* 1. Projects Cards Grid (DISPLAYED FIRST) */}
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

        {/* 2. Video Demonstrations Section (3 Videos: FPV, ENIM Hackathon, SkyPharma) */}
        <div className="video-spotlight-card">
          <div className="spotlight-header">
            <FaVideo className="spotlight-icon" />
            <div>
              <h3>Field Demonstrations & Live Trials</h3>
              <p>Watch full-speed FPV flight tests, robotics hackathon challenges, and cartesian automated dispensing demos.</p>
            </div>
          </div>
          <div className="video-grid-tri">
            {/* Video 1: FPV Flight Test */}
            <div className="video-player-box">
              <div className="video-wrapper">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="native-video-player"
                  poster={moiAvecFpvImg}
                >
                  <source src="/videos/fpv_demo_oujda.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
              <div className="video-caption">
                <span className="video-tag">Flight Test</span>
                <h4>FPV Flight Test & Acrobatic Demonstration</h4>
              </div>
            </div>

            {/* Video 2: ENIM Hackathon Challenge */}
            <div className="video-player-box">
              <div className="video-wrapper">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="native-video-player"
                  poster={enim11Img}
                >
                  <source src="/videos/robot_challenge_enim.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
              <div className="video-caption">
                <span className="video-tag">Robotics Hackathon Challenge</span>
                <h4>Robotics Hackathon Challenge · ENIM Rabat</h4>
              </div>
            </div>

            {/* Video 3: SkyPharma Cartesian Demo */}
            <div className="video-player-box">
              <div className="video-wrapper">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="native-video-player"
                  poster={skypharmaRealImg}
                >
                  <source src="/videos/skypharma_demo.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
              <div className="video-caption">
                <span className="video-tag">Automated Dispensing</span>
                <h4>SkyPharma Cartesian Robot Demonstration</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Project Details with Multi-Image Gallery */}
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
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <span className="modal-category-tag">{activeModalProject.category}</span>
                <h2 className="modal-title">{activeModalProject.title}</h2>
                <p className="modal-lead">{activeModalProject.description}</p>
              </div>

              <div className="modal-body-scroll">
                {/* Multi-Image Gallery in Modal */}
                {activeModalProject.galleryImages && activeModalProject.galleryImages.length > 0 && (
                  <div className="modal-gallery-section">
                    <h4 className="modal-section-title">
                      <FaImages className="section-play-icon" /> Visual Gallery & Technical Schematics
                    </h4>
                    <div className="modal-gallery-grid">
                      {activeModalProject.galleryImages.map((img, idx) => (
                        <div key={idx} className="gallery-item-frame">
                          <img src={img.src} alt={img.caption} className="gallery-item-img" />
                          <span className="gallery-item-caption">{img.caption}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Embedded Video in Modal if Available */}
                {activeModalProject.videoUrl && (
                  <div className="modal-video-container">
                    <h4 className="modal-section-title">
                      <FaPlay className="section-play-icon" /> {activeModalProject.videoTitle}
                    </h4>
                    <video controls playsInline className="modal-video-element">
                      <source src={activeModalProject.videoUrl} type="video/mp4" />
                      Your browser does not support HTML5 video playback.
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
                      <h4>Hardware & Electronic Architecture</h4>
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
                      <h4>Software & Protocol Architecture</h4>
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
                  <strong>Engineering Impact:</strong> {activeModalProject.impact}
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
          margin-bottom: 3.5rem;
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

        /* 1. Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4.5rem;
        }

        /* 2. Video Spotlight Card (3 Videos) */
        .video-spotlight-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 2.25rem;
          backdrop-filter: blur(10px);
        }

        .spotlight-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .spotlight-icon {
          font-size: 2.2rem;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .spotlight-header h3 {
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
        }

        .spotlight-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .video-grid-tri {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.75rem;
        }

        .video-player-box {
          background: #080c14;
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000000;
        }

        .native-video-player {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .video-caption {
          padding: 1.25rem 1.5rem;
        }

        .video-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
          display: block;
          margin-bottom: 0.35rem;
          letter-spacing: 0.05em;
        }

        .video-caption h4 {
          font-size: 1rem;
          color: var(--text-primary);
        }

        /* Modal Dialog Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 10, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
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
          font-size: 1.75rem;
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

        /* Modal Multi-Image Gallery */
        .modal-gallery-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .modal-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .gallery-item-frame {
          border-radius: 12px;
          overflow: hidden;
          background: #080c14;
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
        }

        .gallery-item-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          background: #050810;
        }

        .gallery-item-caption {
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          background: rgba(0, 0, 0, 0.4);
          line-height: 1.3;
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
          .video-grid-tri {
            grid-template-columns: 1fr;
          }
          .modal-arch-grid {
            grid-template-columns: 1fr;
          }
          .modal-gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
