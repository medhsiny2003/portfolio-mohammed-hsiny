import { motion } from 'framer-motion';
import {
  FaMicrochip,
  FaIndustry,
  FaCogs,
  FaCode,
  FaLanguage,
  FaTerminal,
  FaServer,
  FaDraftingCompass,
} from 'react-icons/fa';

const skillCategories = [
  {
    id: 'embedded',
    title: 'Embedded Systems & Electronics',
    icon: <FaMicrochip />,
    color: 'cyan',
    skills: [
      { name: 'Microcontrollers', level: 'STM32 (ARM Cortex-M), ESP32, ESP8266, PIC, Arduino' },
      { name: 'Hardware Communication Buses', level: 'CAN Bus, SPI, I2C, UART, RS-485, Modbus' },
      { name: 'Embedded RTOS & Firmware', level: 'FreeRTOS, Embedded C/C++, Bare-Metal Registers' },
      { name: 'PCB & Circuit Design', level: 'KiCad, Proteus ISIS/ARES, SPICE, Oscilloscope Validation' },
      { name: 'Power Electronics & Drivers', level: 'MOSFET H-Bridges, Buck/Boost DC-DC Converters, Motor Drivers' },
    ],
  },
  {
    id: 'scada',
    title: 'Industrial Automation & SCADA',
    icon: <FaIndustry />,
    color: 'blue',
    skills: [
      { name: 'Industrial PLCs', level: 'Schneider Modicon M580 / M340, Siemens S7-1200 / S7-300' },
      { name: 'SCADA & Supervision', level: 'Ignition SCADA, Siemens WinCC, Intouch Wonderware' },
      { name: 'Protection & Medium Voltage', level: 'Schneider Sepam Series 80 relays, MV/LV Substation Architecture' },
      { name: 'Industrial Communication Protocols', level: 'Modbus TCP/IP, Modbus RTU, Profinet, OPC-UA, MQTT' },
      { name: 'Industrial Electrical Engineering', level: 'Motor starting (Soft-starters, VFDs, Liquid Rheostat), Industrial Safety' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics, Drones & CAD',
    icon: <FaCogs />,
    color: 'emerald',
    skills: [
      { name: 'UAV & Flight Controllers', level: 'ArduPilot, Pixhawk, Mission Planner, QGroundControl, Betaflight' },
      { name: '3D Mechanical CAD', level: 'SolidWorks (3D Parts, Assemblies, Motion Study, Technical Drawings)' },
      { name: 'Robotics Kinematics & Control', level: 'Analytical Forward/Inverse Kinematics (FK/IK), PID Closed-Loop Regulation' },
      { name: 'Hardware Prototyping', level: '3D Printing (FDM), Carbon-Fiber Assembly, Soldering & Wiring Harnesses' },
      { name: 'Simulation & Modeling', level: 'MATLAB / Simulink, Electronic Circuit SPICE Simulators' },
    ],
  },
  {
    id: 'software',
    title: 'AI, Vision & Software Development',
    icon: <FaCode />,
    color: 'gold',
    skills: [
      { name: 'Programming Languages', level: 'C, C++, Python, JavaScript (ES6+), Structured Text (ST), Ladder (LD)' },
      { name: 'Computer Vision & AI', level: 'YOLOv8, OpenCV, Real-time Object Detection & Tracking' },
      { name: 'Web & IoT Dashboarding', level: 'React, Node.js, HTML5/CSS3, RESTful APIs, SQLite' },
      { name: 'Developer Tools', level: 'Git, GitHub, VS Code, STM32CubeIDE, Linux / Shell, PlatformIO' },
    ],
  },
];

const languages = [
  { name: 'Arabic', level: 'Native / Bilingual', flag: '🇲🇦' },
  { name: 'French', level: 'Full Professional Proficiency (C1)', flag: '🇫🇷' },
  { name: 'English', level: 'Professional Working Proficiency (B1 / B2 Technical)', flag: '🇬🇧' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="section-title-large">
            Multidisciplinary <span className="highlight-cyan">Engineering Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of proven competencies across hardware electronics, real-time firmware, industrial automation, and modern software architectures.
          </p>
        </div>

        {/* 4-Category Technical Skills Grid */}
        <div className="skills-categories-grid">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`skill-category-card ${cat.color}`}
            >
              <div className="cat-card-header">
                <div className={`cat-icon-badge ${cat.color}`}>{cat.icon}</div>
                <h3 className="cat-title">{cat.title}</h3>
              </div>

              <div className="cat-skills-list">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item-row">
                    <div className="skill-bullet"></div>
                    <div className="skill-text-wrap">
                      <strong className="skill-name">{skill.name}</strong>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Soft Skills Footer Row */}
        <div className="extra-skills-row">
          <div className="languages-card">
            <div className="extra-card-header">
              <FaLanguage className="extra-icon" />
              <h3>Languages</h3>
            </div>
            <div className="languages-list">
              {languages.map((lang) => (
                <div key={lang.name} className="lang-pill">
                  <span className="lang-flag">{lang.flag}</span>
                  <div>
                    <strong>{lang.name}:</strong>
                    <span> {lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mindset-card">
            <div className="extra-card-header">
              <FaTerminal className="extra-icon" />
              <h3>Engineering Approach</h3>
            </div>
            <p className="mindset-text">
              <strong>Agile Prototyping & Field Testing:</strong> From schematic design and PCB layout to embedded C/C++ firmware, bench testing with oscilloscopes, and harsh environment deployment.
            </p>
          </div>
        </div>
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

        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .skill-category-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .skill-category-card:hover {
          background: var(--bg-card-hover);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
        }

        .skill-category-card.cyan:hover { border-color: rgba(0, 229, 255, 0.4); }
        .skill-category-card.blue:hover { border-color: rgba(59, 130, 246, 0.4); }
        .skill-category-card.emerald:hover { border-color: rgba(16, 185, 129, 0.4); }
        .skill-category-card.gold:hover { border-color: rgba(245, 158, 11, 0.4); }

        .cat-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .cat-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .cat-icon-badge.cyan {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
        }

        .cat-icon-badge.blue {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .cat-icon-badge.emerald {
          background: rgba(16, 185, 129, 0.1);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .cat-icon-badge.gold {
          background: rgba(245, 158, 11, 0.1);
          color: var(--accent-gold);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .cat-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cat-skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          flex-grow: 1;
        }

        .skill-item-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .skill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          margin-top: 0.45rem;
          flex-shrink: 0;
        }

        .skill-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .skill-name {
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .skill-level {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Languages & Mindset Row */
        .extra-skills-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .languages-card, .mindset-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          padding: 1.75rem 2rem;
          backdrop-filter: blur(10px);
        }

        .extra-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .extra-icon {
          font-size: 1.3rem;
          color: var(--accent-cyan);
        }

        .extra-card-header h3 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .languages-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .lang-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .lang-flag {
          font-size: 1.2rem;
        }

        .lang-pill strong {
          color: var(--text-primary);
        }

        .mindset-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .mindset-text strong {
          color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .extra-skills-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
