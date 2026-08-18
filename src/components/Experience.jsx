import { motion } from 'framer-motion';
import { FaIndustry, FaBolt, FaCheck, FaShieldAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

// Real Logos & Industry Images uploaded by Mohammed
import logoOcp from '../assets/images/logo_ocp.png';
import logoCimar from '../assets/images/logo_cimar.jpg';
import logoMarsa from '../assets/images/logo_marsa.png';
import industrie1Img from '../assets/images/industrie1.jpg';
import grue40tImg from '../assets/images/grue40t.jpg';

const experiences = [
  {
    id: 'ocp',
    company: 'OCP Group — Maroc Chimie Division',
    location: 'Safi Industrial Complex, Morocco',
    period: 'July 2026 — Present',
    role: 'Engineering Intern — SCADA Supervision of Medium Voltage (MV) Substation',
    logo: logoOcp,
    image: industrie1Img,
    imageCaption: 'Substation Architecture & Electrical Power Switchgear',
    summary: 'Centralization of control-command architecture and securing critical power supply for seawater pumping stations and chemical process units.',
    achievements: [
      'Engineered an automated supervision architecture to eliminate communication gaps between the Medium Voltage station and the main control room, safeguarding vital seawater pumping operations.',
      'Designed PLC tele-management architecture to centralize control of 12 MV cubicles (9 pump/motor bays, incomers, busbars).',
      'Configured Sepam Series 80 digital protection relays and programmed Modbus TCP/IP communication on Schneider Modicon M580 PLC.',
      'Developed real-time SCADA supervision under Ignition: live fault alarming, secure remote tele-controls, and active electrical parameter monitoring (I / U / P / cos φ).',
    ],
    tags: ['Modicon M580', 'Ignition SCADA', 'Sepam Series 80', 'Modbus TCP/IP', 'Medium Voltage (MT)', 'Industrial Networks'],
  },
  {
    id: 'cimar',
    company: 'Ciments du Maroc — Heidelberg Materials',
    location: 'Safi Cement Plant, Morocco',
    period: 'August — September 2025',
    role: 'Technical Intern — Electrical Maintenance & Process Instrumentation',
    logo: logoCimar,
    image: industrie1Img,
    imageCaption: 'Heavy Grinding Machinery & Instrumentation Process',
    summary: 'Preventive and corrective maintenance of heavy grinding machinery, field instrumentation, and power drive systems.',
    achievements: [
      'Executed preventive and curative maintenance on ball mills, heavy process compressors, and industrial slurry pumps.',
      'Managed and logged all technical maintenance interventions through the plant Computerized Maintenance Management System (CMMS / GMAO).',
      'Calibrated and diagnosed industrial process instrumentation: gas analyzers, PT100 temperature sensors, pressure transmitters, vibration sensors, and inductive proximity switches.',
      'Conducted an in-depth electrical study of the electrolytic starter (liquid rheostat) for high-power wound-rotor induction motors driving the primary cement mill.',
    ],
    tags: ['Process Instrumentation', 'CMMS / GMAO', 'PT100 Probes', 'Liquid Starter', 'Induction Motors', 'Industrial HSE'],
  },
  {
    id: 'marsa',
    company: 'Marsa Maroc — Port of Safi Directorate',
    location: 'Port of Safi, Morocco',
    period: 'July 2025',
    role: 'Engineering Intern — Reliability & Automation of Harbor Cranes',
    logo: logoMarsa,
    image: grue40tImg,
    imageCaption: 'Marsa Maroc — G40T Harbor Crane & IoT Automation',
    summary: 'Operational safety study, automated preventive lubrication, and IoT remote monitoring for heavy port infrastructure.',
    achievements: [
      'Conducted an operational dependability study (FMECA / AMDEC) on the G40T harbor crane by analyzing failure logs and tracking MTBF, MTTR, and operational availability rates.',
      'Automated preventive mechanical lubrication without human intervention: PLC/timer-driven pump sequencing based on crane running hours.',
      'Designed a secure IoT remote monitoring architecture using Teltonika 4G industrial cellular gateways.',
      'Developed a custom SCADA Human-Machine Interface (HMI) for automated lubrication cycle control and historical trend logging.',
    ],
    tags: ['Teltonika 4G IoT', 'FMECA / AMDEC', 'MTBF & MTTR Metrics', 'SCADA HMI', 'Automation', 'Predictive Maintenance'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="exp-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Industrial Immersion</span>
          <h2 className="section-title-large">
            Real-World <span className="highlight-cyan">Industrial Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical engineering roles inside leading heavy industry players, shaping rigor, diagnostic methodology, and mastery of mission-critical systems.
          </p>
        </div>

        {/* Industrial Highlights 3-Column Banner */}
        <div className="industrial-banner">
          <div className="banner-item">
            <FaShieldAlt className="banner-icon" />
            <div>
              <strong>Industrial Rigor & Safety</strong>
              <span>Strict compliance with electrical lockout/tagout (LOTO), HSE protocols, and high-voltage operations.</span>
            </div>
          </div>
          <div className="banner-item">
            <FaBolt className="banner-icon" />
            <div>
              <strong>Methodical Troubleshooting</strong>
              <span>Fault isolation on Modbus networks, fieldbuses, PLC I/O modules, power drives, and process sensors.</span>
            </div>
          </div>
          <div className="banner-item">
            <FaIndustry className="banner-icon" />
            <div>
              <strong>SCADA & IoT Modernization</strong>
              <span>Real-time telemetry, remote supervision, predictive maintenance, and operational process digitalization.</span>
            </div>
          </div>
        </div>

        {/* Experience Cards Stack with 2-Column Layout (Image on Right) */}
        <div className="experience-cards-stack">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
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
                      {/* Real Company Logo */}
                      <div className="company-logo-container">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="company-logo-img"
                        />
                      </div>
                      <div>
                        <h3 className="company-name">{exp.company}</h3>
                        <span className="company-location">
                          <FaMapMarkerAlt className="map-pin-icon" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="period-pill">
                      <FaCalendarAlt className="cal-icon" /> {exp.period}
                    </div>
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

                {/* Right Side: Image Panel */}
                <div className="card-photo-panel">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="stage-real-img"
                    loading="lazy"
                  />
                  <div className="photo-panel-overlay"></div>
                  <div className="panel-caption-badge">
                    <span>{exp.imageCaption}</span>
                  </div>
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

        /* Experience Cards Stack */
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
          grid-template-columns: 1fr 360px;
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
          min-height: 300px;
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
            transparent 45%
          );
        }

        .panel-caption-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          padding: 0.5rem 0.85rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          font-size: 0.75rem;
          color: #f1f5f9;
          font-weight: 500;
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

        .company-logo-container {
          width: 58px;
          height: 58px;
          border-radius: 12px;
          background: #ffffff;
          padding: 0.35rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          flex-shrink: 0;
          overflow: hidden;
        }

        .company-logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
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
          gap: 0.35rem;
          margin-top: 0.2rem;
        }

        .map-pin-icon {
          font-size: 0.75rem;
          color: var(--accent-cyan);
        }

        .period-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .cal-icon {
          font-size: 0.75rem;
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
          line-height: 1.6;
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
          font-size: 0.92rem;
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
            min-height: unset;
          }
          .photo-panel-overlay {
            background: linear-gradient(
              to top,
              rgba(16, 22, 32, 0.85) 0%,
              transparent 50%
            );
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
