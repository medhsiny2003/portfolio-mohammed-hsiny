import { motion } from 'framer-motion';
import { FaGraduationCap, FaQuoteLeft, FaMicrochip, FaRobot, FaFighterJet, FaTools } from 'react-icons/fa';
import profileMohammedImg from '../assets/images/profile_mohammed.jpg';

const educationList = [
  {
    period: '2024 — 2027',
    degree: 'State Engineering Degree in Electrical & Industrial Control Engineering (GECI)',
    institution: 'Faculty of Sciences and Techniques (FST) — Mohammedia, Hassan II University',
    details: 'Advanced engineering studies in Embedded Systems, Autonomous Robotics, Power Electronics, Microcontrollers, Signal Processing, and Real-Time Control.',
    current: true,
  },
  {
    period: '2023 — 2024',
    degree: 'Licence en Sciences et Techniques (LST) – Industrial Computing & Instrumentation (I3)',
    institution: 'Faculty of Sciences and Techniques (FST) — Errachidia, Moulay Ismaïl University',
    details: 'Specialization in embedded computing, sensor instrumentation, digital electronics, automated measurement systems, and microcontrollers.',
    current: false,
  },
  {
    period: '2021 — 2023',
    degree: 'DEUST – Mathematics, Computer Science & Physics (MIP)',
    institution: 'Faculty of Sciences and Techniques (FST) — Errachidia, Moulay Ismaïl University',
    details: 'Rigorous preparatory foundation in applied mathematics, classical and modern physics, electronics, algorithms, and numerical modeling.',
    current: false,
  },
  {
    period: '2021',
    degree: 'Baccalauréat in Physical Sciences',
    institution: 'Lycée Najib Mahfoud — Safi',
    details: 'Solid academic grounding in physics, chemistry, and mathematics.',
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
            Passion, Autonomy & <span className="highlight-cyan">Field Reality</span>
          </h2>
          <p className="section-subtitle">
            An engineering journey fueled by passion for critical embedded systems, autonomous drones, defense technologies, and hands-on rapid prototyping.
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
              Currently pursuing my engineering degree in <strong>Electrical Engineering & Industrial Control (GECI)</strong>, 
              I am actively seeking a <strong>6-month Final Year Internship (PFE) starting January 2027</strong> in 
              <strong> embedded systems, autonomous robotics, drones & UAVs, or defense and autonomous vehicles</strong>.
            </p>

            <p className="bio-paragraph">
              Deeply passionate about <strong>defense technologies and mission-critical embedded systems</strong>, 
              I actively follow cutting-edge industry developments across the drone and autonomous systems ecosystem. 
              Curious, autonomous, and driven by a strong spirit of initiative, I build personal and competitive engineering projects 
              seamlessly integrating custom hardware and firmware.
            </p>

            <p className="bio-paragraph">
              My podium finishes in multiple national competitions and hackathons reflect my ability to rapidly concept, 
              prototype, calibrate, and present innovative, reliable engineering solutions under demanding conditions.
            </p>

            <div className="core-competencies-list">
              <div className="comp-item">
                <FaMicrochip className="comp-icon" />
                <div>
                  <strong>Critical Embedded Systems:</strong> Microcontrollers (STM32, ESP32, PIC, Arduino), FreeRTOS, hardware timers, and communication buses (CAN, SPI, I2C, UART).
                </div>
              </div>
              <div className="comp-item">
                <FaFighterJet className="comp-icon" />
                <div>
                  <strong>Drones & Autonomous UAVs:</strong> Flight controllers (ArduPilot, Pixhawk, Betaflight), MAVLink telemetry, dynamic PID tuning, and mission planning (QGroundControl, Mission Planner).
                </div>
              </div>
              <div className="comp-item">
                <FaRobot className="comp-icon" />
                <div>
                  <strong>Autonomous Robotics & Defense AI:</strong> Closed-loop PID control, multi-robot mesh networks (ESP-NOW), vision AI (YOLOv8, OpenCV), and 3D SolidWorks CAD design.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portrait and Quick Info using profile_mohammed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-portrait-wrapper"
          >
            <div className="portrait-inner-frame">
              <img
                src={profileMohammedImg}
                alt="Mohammed HSINY - Engineering Student at FST Mohammedia"
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
                <strong>Availability:</strong> January 2027 – June / July 2027 (6 months)<br />
                <strong>Target Sectors:</strong> Embedded Systems, Drones & UAVs, Autonomous Robotics, Defense & Aerospace R&D, Real-Time Navigation.<br />
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
