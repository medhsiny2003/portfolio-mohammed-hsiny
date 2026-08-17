import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
  FaCheck,
  FaCopy,
} from 'react-icons/fa';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohammedhsiny2@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="section-header-centered">
          <span className="section-tag">Contact & Disponibilité PFE</span>
          <h2 className="section-title-large">
            Échangeons sur <span className="highlight-cyan">Votre Projet</span>
          </h2>
          <p className="section-subtitle">
            Disponible pour un stage PFE d'ingénieur (6 mois) à partir de <strong>Janvier 2027</strong> en systèmes embarqués, robotique, drones ou automatisation industrielle.
          </p>
        </div>

        {/* Contact Methods Cards Grid */}
        <div className="contact-cards-grid">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-card"
          >
            <div className="card-icon-box cyan">
              <FaEnvelope />
            </div>
            <div className="card-info">
              <span className="info-label">Email Professionnel</span>
              <a href="mailto:mohammedhsiny2@gmail.com" className="info-value">
                mohammedhsiny2@gmail.com
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="copy-btn"
              title="Copier l'adresse email"
            >
              {copiedEmail ? <FaCheck className="copied-icon" /> : <FaCopy />}
            </button>
          </motion.div>

          {/* Phone & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-card"
          >
            <div className="card-icon-box emerald">
              <FaWhatsapp />
            </div>
            <div className="card-info">
              <span className="info-label">Téléphone / WhatsApp</span>
              <a
                href="https://wa.me/212611424571"
                target="_blank"
                rel="noopener noreferrer"
                className="info-value"
              >
                +212 611 424 571
              </a>
            </div>
            <a
              href="https://wa.me/212611424571"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-btn"
            >
              Discussion
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-card"
          >
            <div className="card-icon-box blue">
              <FaLinkedin />
            </div>
            <div className="card-info">
              <span className="info-label">Réseau LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/mohammed-hsiny"
                target="_blank"
                rel="noopener noreferrer"
                className="info-value"
              >
                linkedin.com/in/mohammed-hsiny
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="contact-card"
          >
            <div className="card-icon-box gold">
              <FaMapMarkerAlt />
            </div>
            <div className="card-info">
              <span className="info-label">Localisation & Mobilité</span>
              <span className="info-value">
                Safi, Maroc (Mobilité nationale & internationale)
              </span>
            </div>
          </motion.div>
        </div>

        {/* Download Box */}
        <div className="download-documents-banner">
          <div className="banner-text">
            <h3>Documents Techniques Officiels</h3>
            <p>Téléchargez le dossier complet de compétences, réalisations et le CV détaillé au format PDF.</p>
          </div>
          <div className="banner-btns">
            <a
              href="/docs/CV_Mohammed_HSINY.pdf"
              download="CV_Mohammed_HSINY.pdf"
              className="btn-primary-tech"
            >
              <FaFileDownload />
              <span>Télécharger le CV</span>
            </a>
            <a
              href="/docs/Portfolio_Mohammed_HSINY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-tech"
            >
              <FaFileDownload />
              <span>Portfolio Complet (8 Pages)</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="portfolio-footer">
          <div className="footer-content">
            <p className="footer-brand">
              <strong>MOHAMMED HSINY</strong> · Élève Ingénieur en Génie Électrique & Contrôle Industriel
            </p>
            <p className="footer-inst">FST Mohammedia · Promotion 2026-2027</p>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        .contact-section {
          padding: 8rem 2rem 3rem;
          background: var(--bg-deep);
          position: relative;
        }

        .contact-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3.5rem;
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
          transition: var(--transition-smooth);
        }

        .contact-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(0, 229, 255, 0.3);
          transform: translateY(-4px);
        }

        .card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .card-icon-box.cyan {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.25);
        }

        .card-icon-box.emerald {
          background: rgba(37, 211, 102, 0.1);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.25);
        }

        .card-icon-box.blue {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .card-icon-box.gold {
          background: rgba(245, 158, 11, 0.1);
          color: var(--accent-gold);
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .card-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
        }

        .info-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-mono);
          margin-bottom: 0.2rem;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: var(--transition-fast);
        }

        a.info-value:hover {
          color: var(--accent-cyan);
        }

        .copy-btn {
          padding: 0.5rem;
          color: var(--text-muted);
          font-size: 1rem;
          border-radius: 8px;
          transition: var(--transition-fast);
        }

        .copy-btn:hover {
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
        }

        .copied-icon {
          color: #10b981;
        }

        .chat-btn {
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.3);
          border-radius: 6px;
          font-weight: 700;
          font-family: var(--font-mono);
          transition: var(--transition-fast);
        }

        .chat-btn:hover {
          background: #25d366;
          color: #040914;
        }

        .download-documents-banner {
          background: linear-gradient(135deg, rgba(16, 22, 32, 0.9) 0%, rgba(13, 27, 42, 0.8) 100%);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 5rem;
          backdrop-filter: blur(10px);
        }

        .banner-text h3 {
          font-size: 1.4rem;
          margin-bottom: 0.35rem;
        }

        .banner-text p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .banner-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .portfolio-footer {
          border-top: 1px solid var(--glass-border);
          padding-top: 2.5rem;
          text-align: center;
        }

        .footer-brand {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .footer-inst {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          margin-bottom: 0.75rem;
        }

        .footer-copy {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .download-documents-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .banner-btns {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
