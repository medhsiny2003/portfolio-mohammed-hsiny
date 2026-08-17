import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMicrochip, FaRobot, FaCog } from 'react-icons/fa';

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="project-card"
      onClick={() => onOpen(project)}
    >
      <div className="card-media-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image-cover"
          loading="lazy"
        />
        <div className="card-gradient-overlay"></div>
        <div className="category-pill-floating">{project.category}</div>
      </div>

      <div className="project-body">
        <div className="tech-tags-list">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-badge">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="tag-badge-more">+{project.tags.length - 3}</span>
          )}
        </div>

        <h3 className="project-heading">{project.title}</h3>
        <p className="project-summary">{project.description}</p>

        <div className="card-footer-action">
          <span className="btn-detail-link">
            <span>Détails & Architecture</span>
            <FaArrowRight className="arrow-icon" />
          </span>
        </div>
      </div>

      <style>{`
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 229, 255, 0.4);
          background: var(--bg-card-hover);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
        }

        .card-media-wrapper {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #080c14;
        }

        .project-image-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image-cover {
          transform: scale(1.06);
        }

        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(16, 22, 32, 0.95) 0%,
            rgba(16, 22, 32, 0.4) 50%,
            transparent 100%
          );
        }

        .category-pill-floating {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.75rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .tech-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 0.85rem;
        }

        .tag-badge {
          font-size: 0.72rem;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          border-radius: 4px;
          color: var(--accent-blue);
          font-family: var(--font-mono);
          font-weight: 500;
        }

        .tag-badge-more {
          font-size: 0.72rem;
          padding: 0.2rem 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .project-heading {
          font-size: 1.18rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .project-summary {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-footer-action {
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .btn-detail-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          transition: var(--transition-fast);
        }

        .arrow-icon {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
        }

        .project-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
