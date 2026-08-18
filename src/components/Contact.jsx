import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaFileDownload,
  FaArrowRight,
} from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'mohammedhsiny2@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Direct Inquiries</span>
          <h2 className="section-title-large">
            Let's Build the <span className="highlight-cyan">Next Innovation</span>
          </h2>
          <p className="section-subtitle">
            Available for a 6-month Final Year Internship (PFE) starting January 2027 in Embedded Systems, Autonomous Robotics, Drones, SCADA / PLC Automation, or R&D.
          </p>
        </div>

        {/* Contact Main Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Action Cards */}
          <div className="contact-cards-col">
            {/* 1-Click Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="contact-card email-card"
            >
              <div className="card-icon-wrap cyan">
                <FaEnvelope />
              </div>
              <div className="card-info">
                <span className="card-label">Official Email</span>
                <span className="card-value">{email}</span>
              </div>
              <button
                onClick={copyEmail}
                className={`btn-copy-email ${copied ? 'copied' : ''}`}
                title="Copy email to clipboard"
              >
                {copied ? <FaCheck /> : <FaCopy />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </motion.div>

            {/* Direct WhatsApp Card */}
            <motion.a
              href="https://wa.me/212611424571"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="contact-card whatsapp-card"
            >
              <div className="card-icon-wrap green">
                <FaWhatsapp />
              </div>
              <div className="card-info">
                <span className="card-label">WhatsApp Direct</span>
                <span className="card-value">+212 611 424 571</span>
              </div>
              <span className="card-action-icon">
                <FaArrowRight />
              </span>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/mohammed-hsiny-09885b31a/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="contact-card linkedin-card"
            >
              <div className="card-icon-wrap blue">
                <FaLinkedin />
              </div>
              <div className="card-info">
                <span className="card-label">LinkedIn Profile</span>
                <span className="card-value">MOHAMMED HSINY</span>
              </div>
              <span className="card-action-icon">
                <FaArrowRight />
              </span>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="contact-card location-card"
            >
              <div className="card-icon-wrap gold">
                <FaMapMarkerAlt />
              </div>
              <div className="card-info">
                <span className="card-label">Current Base & Mobility</span>
                <span className="card-value">Mohammedia / Casablanca, Morocco (Open to International Mobility)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: PFE Summary & Direct Downloads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-summary-panel"
          >
            <div className="panel-badge">
              <span className="live-dot"></span> PFE 2027 Fast-Track
            </div>

            <h3 className="panel-title">Internship Availability & Profile Summary</h3>
            <p className="panel-lead">
              Looking for challenging engineering problems where hardware electronics, embedded control algorithms, and industrial reliability intersect.
            </p>

            <div className="specs-box">
              <div className="spec-row">
                <span className="spec-label">Timeline:</span>
                <span className="spec-val">January 2027 — June / July 2027 (6 Months)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Target Roles:</span>
                <span className="spec-val">Embedded Software Engineer, Robotics Engineer, UAV Flight Systems Engineer, SCADA / Automation Engineer</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Target Sectors:</span>
                <span className="spec-val">Robotics, Defense & Aerospace, Energy / Power Grids, Heavy Process Industries, Automotive ADAS</span>
              </div>
            </div>

            <div className="downloads-group">
              <a
                href="/docs/CV_Mohammed_HSINY.pdf"
                download="CV_Mohammed_HSINY.pdf"
                className="btn-primary-tech"
              >
                <FaFileDownload />
                <span>Download Official Resume (PDF)</span>
              </a>

              <a
                href="/docs/Portfolio_Mohammed_HSINY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-tech"
              >
                <FaFileDownload />
                <span>Download Complete Portfolio (8 Pages PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
        }

        .contact-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-cards-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          backdrop-filter: blur(10px);
          transition: var(--transition-fast);
          text-decoration: none;
          color: inherit;
        }

        .contact-card:hover {
          background: var(--bg-card-hover);
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
        }

        .contact-card.email-card:hover { border-color: rgba(0, 229, 255, 0.4); }
        .contact-card.whatsapp-card:hover { border-color: rgba(37, 211, 102, 0.4); }
        .contact-card.linkedin-card:hover { border-color: rgba(10, 102, 194, 0.5); }
        .contact-card.location-card:hover { border-color: rgba(245, 158, 11, 0.4); }

        .card-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .card-icon-wrap.cyan {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
        }

        .card-icon-wrap.green {
          background: rgba(37, 211, 102, 0.12);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }

        .card-icon-wrap.blue {
          background: rgba(10, 102, 194, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(10, 102, 194, 0.3);
        }

        .card-icon-wrap.gold {
          background: rgba(245, 158, 11, 0.1);
          color: var(--accent-gold);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          flex-grow: 1;
        }

        .card-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .btn-copy-email {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .btn-copy-email:hover {
          background: rgba(0, 229, 255, 0.15);
          border-color: var(--accent-cyan);
        }

        .btn-copy-email.copied {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
          color: #34d399;
        }

        .card-action-icon {
          font-size: 1.1rem;
          color: var(--text-muted);
          transition: transform var(--transition-fast), color var(--transition-fast);
        }

        .contact-card:hover .card-action-icon {
          transform: translateX(4px);
          color: var(--text-primary);
        }

        /* Right Column: Summary Panel */
        .contact-summary-panel {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .panel-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
        }

        .panel-title {
          font-size: 1.45rem;
          margin-bottom: 0.75rem;
        }

        .panel-lead {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .specs-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 2rem;
        }

        .spec-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .spec-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
        }

        .spec-val {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .downloads-group {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
