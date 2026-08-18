import { motion } from 'framer-motion';
import { FaGraduationCap, FaQuoteLeft, FaMicrochip, FaBolt, FaTools, FaCheck } from 'react-icons/fa';
import profileCvImg from '../assets/images/profile_cv.png';

const educationList = [
  {
    period: '2024 — 2027',
    degree: 'State Engineering Degree in Electrical & Industrial Control Engineering (GECI)',
    institution: 'Faculty of Sciences and Techniques (FST) — Mohammedia',
    details: 'Specialization in Embedded Systems, Industrial Automation, SCADA Supervision, Power Electronics, Machine Learning & Robotics.',
    current: true,
  },
  {
    period: '2022 — 2024',
    degree: 'DEUST in Mathematics, Computer Science, Physics & Chemistry (MIP)',
    institution: 'Faculty of Sciences and Techniques (FST) — Errachidia',
    details: 'Intensive foundation in applied mathematics, signal processing, digital electronics, algorithms and physics.',
    current: false,
  },
  {
    period: '2021 — 2022',
    degree: 'Baccalauréat in Mathematical Sciences A',
    institution: 'Lycée Qualifiant — Errachidia',
    details: 'Graduated with Honors (Mention Bien). Rigorous analytical training in mathematics and physics.',
    current: false,
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Engineering Mindset & Trajectory</span>
          <h2 className="section-title-large">
            Bridging Theory & <span className="highlight-cyan">Field Reality</span>
          </h2>
          <p className="section-subtitle">
            An engineering journey driven by curiosity, systematic debugging, and a relentless focus on reliable physical systems.
          </p>
        </div>

        {/* Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="quote-banner"
        >
          <FaQuoteLeft className="quote-icon" />
          <div className="quote-content">
            <p className="quote-text">
              "I have not failed. I've just found 10,000 ways that won't work."
            </p>
            <span className="quote-author">— Thomas A. Edison</span>
          </div>
        </motion.div>

        {/* Main Grid: Bio + Profile + Philosophy */}
        <div className="about-bio-grid">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-bio-content"
          >
            <h3 className="bio-heading">
              Engineering Student at <span className="highlight-cyan">FST Mohammedia</span>
            </h3>
            
            <p className="bio-paragraph">
              Currently in my engineering curriculum in <strong>Electrical Engineering & Industrial Control (GECI)</strong>, 
              I develop a multidisciplinary approach at the crossroads of <strong>hardware electronics</strong>, 
              <strong>embedded software</strong>, and <strong>industrial automation</strong>.
            </p>

            <p className="bio-paragraph">
              My engineering philosophy revolves around <strong>rapid prototyping</strong>, <strong>physical testing</strong>, 
              and <strong>rigorous field validation</strong>. Whether it is building custom drones from scratch, developing 
              multi-robot fleets with ADAS capabilities, or programming industrial SCADA systems on Medium Voltage networks, 
              I design systems built to withstand real-world operational constraints.
            </p>

            <div className="core-competencies-list">
              <div className="comp-item">
                <FaMicrochip className="comp-icon" />
                <div>
                  <strong>Critical Embedded Systems:</strong> Microcontrollers (STM32, ESP32, PIC), FreeRTOS, hardware timers, and communication buses (CAN, SPI, I2C, UART).
                </div>
              </div>
              <div className="comp-item">
                <FaBolt className="comp-icon" />
                <div>
                  <strong>Industrial Automation & SCADA:</strong> PLCs (Schneider M580/M340, Siemens S7-1200), Modbus TCP/IP, Ignition SCADA, Sepam 80 relays, and MV stations.
                </div>
              </div>
              <div className="comp-item">
                <FaTools className="comp-icon" />
                <div>
                  <strong>Autonomous Robotics & Drones:</strong> CAD modeling under SolidWorks, custom CNC/carbon assembly, flight controllers (ArduPilot, Betaflight), and vision AI (YOLO).
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portrait and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-portrait-wrapper"
          >
            <div className="portrait-inner-frame">
              <img
                src={profileCvImg}
                alt="Mohammed HSINY"
                className="about-profile-photo"
              />
              <div className="portrait-details-overlay">
                <h4>Mohammed HSINY</h4>
                <span>Élève Ingénieur GECI · FSTM</span>
              </div>
            </div>

            <div className="pfe-box">
              <div className="pfe-box-header">
                <span className="live-indicator"></span>
                <strong>6-Month PFE Internship Search</strong>
              </div>
              <p>
                <strong>Availability:</strong> January 2027 – June 2027 (6 months)<br />
                <strong>Target Fields:</strong> Embedded Systems, Robotics & Autonomous Systems, Drones & UAVs, Industrial Automation / SCADA, Defense & Energy R&D.<br />
                <strong>Mobility:</strong> Morocco & International
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline-section">
          <div className="timeline-title-wrap">
            <FaGraduationCap className="timeline-header-icon" />
            <h3 className="timeline-heading">Academic Path & Degrees</h3>
          </div>

          <div className="timeline-track">
            {educationList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`timeline-item ${item.current ? 'current-phase' : ''}`}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-period-badge">{item.period}</span>
                    {item.current && <span className="current-tag">In Progress</span>}
                  </div>
                  <h4 className="timeline-degree">{item.degree}</h4>
                  <h5 className="timeline-institution">{item.institution}</h5>
                  <p className="timeline-details">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

        /* Quote Banner */
        .quote-banner {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.06), rgba(59, 130, 246, 0.04));
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: 16px;
          padding: 2rem 2.5rem;
          margin-bottom: 4.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .quote-icon {
          font-size: 2.2rem;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .quote-text {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
          margin-bottom: 0.35rem;
          font-style: italic;
        }

        .quote-author {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-cyan);
          letter-spacing: 0.05em;
        }

        /* Bio Grid */
        .about-bio-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 3.5rem;
          align-items: start;
          margin-bottom: 5rem;
        }

        .bio-heading {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }

        .bio-paragraph {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .bio-paragraph strong {
          color: var(--text-primary);
        }

        .core-competencies-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .comp-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .comp-item strong {
          color: var(--text-primary);
        }

        .comp-icon {
          font-size: 1.25rem;
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        /* Portrait & PFE Box */
        .about-portrait-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .portrait-inner-frame {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #090e18;
          border: 1px solid var(--glass-border);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .about-profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s ease;
        }

        .portrait-inner-frame:hover .about-profile-photo {
          transform: scale(1.03);
        }

        .portrait-details-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1.5rem;
          background: linear-gradient(to top, rgba(6, 8, 13, 0.92) 0%, transparent 100%);
        }

        .portrait-details-overlay h4 {
          font-size: 1.15rem;
          margin-bottom: 0.15rem;
        }

        .portrait-details-overlay span {
          font-size: 0.82rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .pfe-box {
          background: var(--bg-card);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 16px;
          padding: 1.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pfe-box-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
          color: #34d399;
          font-family: var(--font-heading);
          font-size: 0.95rem;
        }

        .live-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .pfe-box strong {
          color: var(--text-primary);
        }

        /* Education Timeline */
        .education-timeline-section {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          backdrop-filter: blur(10px);
        }

        .timeline-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .timeline-header-icon {
          font-size: 1.8rem;
          color: var(--accent-cyan);
        }

        .timeline-heading {
          font-size: 1.4rem;
        }

        .timeline-track {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid rgba(0, 229, 255, 0.2);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-marker {
          position: absolute;
          left: calc(-2rem - 6px);
          top: 6px;
        }

        .marker-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 10px var(--accent-cyan);
        }

        .timeline-item.current-phase .marker-dot {
          background: #10b981;
          box-shadow: 0 0 12px #10b981;
        }

        .timeline-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 1.5rem;
          transition: var(--transition-fast);
        }

        .timeline-card:hover {
          border-color: rgba(0, 229, 255, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }

        .timeline-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.6rem;
        }

        .timeline-period-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .current-tag {
          font-size: 0.7rem;
          padding: 0.15rem 0.5rem;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 100px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .timeline-degree {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }

        .timeline-institution {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .timeline-details {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-bio-grid {
            grid-template-columns: 1fr;
          }
          .about-portrait-wrapper {
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
