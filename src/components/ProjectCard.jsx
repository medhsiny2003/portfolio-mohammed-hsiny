import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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
      {/* Card Thumbnail */}
      <div className="card-thumb-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-thumb-img"
          loading="lazy"
        />
        <div className="card-category-badge">{project.category}</div>
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tags */}
        <div className="project-tags-row">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag-pill more">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Footer Action */}
        <div className="project-card-footer">
          <span className="btn-explore-link">
            <span>Explore Engineering Specs</span>
            <FaArrowRight className="arrow-icon" />
          </span>
        </div>
      </div>

      <style>{`
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: var(--transition-smooth);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .project-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(0, 229, 255, 0.4);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        }

        .card-thumb-wrap {
          position: relative;
          height: 210px;
          background: #080c14;
          overflow: hidden;
        }

        .project-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-thumb-img {
          transform: scale(1.06);
        }

        .card-category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.75rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .project-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
          line-height: 1.35;
        }

        .project-card-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .tag-pill {
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .tag-pill.more {
          color: var(--accent-cyan);
          border-color: rgba(0, 229, 255, 0.3);
        }

        .project-card-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .btn-explore-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .arrow-icon {
          transition: transform var(--transition-fast);
        }

        .project-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
