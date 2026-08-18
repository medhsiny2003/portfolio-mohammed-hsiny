import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaCalendarCheck, FaMedal } from 'react-icons/fa';

// Real Images uploaded by Mohammed
import robothingsStageImg from '../assets/images/robothings_stage.jpg';
import robodaysEventImg from '../assets/images/robodays_event.jpg';
import award1stImg from '../assets/images/award_1st_ensakh.jpg';
import award2ndImg from '../assets/images/award_2nd_ensakh.jpg';
import award3rdImg from '../assets/images/award_3rd_challenges.jpg';

const flagshipAwards = [
  {
    title: '1st Prize — Innovation, AI & Engineering Hackathons',
    organizers: 'ENSEM · ENSAO · FSTM · FSBM Casablanca · ENSA Agadir',
    image: award1stImg,
    badge: '1st Prize / Gold',
    badgeClass: 'gold',
    description: 'First place victories and top distinctions awarded in high-level engineering hackathons, edge AI innovation summits, and rapid technology prototyping defenses across premier engineering universities.',
  },
  {
    title: '2nd Prize — Autonomous Robotics & Navigation Hackathons',
    organizers: 'ENSA Khouribga · ENIM Rabat · ENSAM Casablanca',
    image: award2ndImg,
    badge: '2nd Prize / Silver',
    badgeClass: 'silver',
    description: '2nd place national podium finishes achieved following demanding 48-hour hardware/software hackathons, autonomous mobile obstacle clearing, and real-time embedded control under high pressure.',
  },
  {
    title: '3rd Prize — National Robotics & Engineering Competitions',
    organizers: 'EMI Rabat · ENSA El Jadida · ENSA Kénitra',
    image: award3rdImg,
    badge: '3rd Prize / Bronze',
    badgeClass: 'bronze',
    description: '3rd place podium honors across dynamic arena challenges, high-speed line tracking, and multidisciplinary engineering contests, alongside active participation in national technological summits.',
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Leadership & Competitive Excellence</span>
          <h2 className="section-title-large">
            Presidency & <span className="highlight-cyan">13+ National Awards</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated executive leadership managing engineering cohorts and a competitive track record of 13+ awards and podium finishes across diverse robotics, AI, and engineering hackathons.
          </p>
        </div>

        {/* Part 1: Club RoboThings & RoboDays */}
        <div className="leadership-main-card">
          <div className="leadership-content-side">
            <div className="role-tag-badge">
              <FaUsers /> Executive Leadership · FST Mohammedia
            </div>
            <h3 className="leadership-title">
              President of <span className="highlight-cyan">RoboThings Club</span>
            </h3>
            <span className="tenure-label">2024 — 2026 · Faculty of Sciences and Techniques Mohammedia</span>

            <p className="leadership-text">
              Elected President to spearhead technical development, hardware procurement, and competitive robotics strategy 
              at FST Mohammedia. Overseeing project roadmaps, mentoring student teams in embedded programming and mechanical CAD, 
              and fostering a culture of fast, reliable prototyping.
            </p>

            <div className="impact-highlights-list">
              <div className="impact-point">
                <FaCalendarCheck className="point-icon" />
                <div>
                  <strong>Founder of RoboDays National Competition:</strong> Created and directed a premier national 
                  robotics event gathering hundreds of engineering students from universities across Morocco.
                </div>
              </div>
              <div className="impact-point">
                <FaUsers className="point-icon" />
                <div>
                  <strong>Technical Team Leadership & Mentoring:</strong> Led multidisciplinary cohorts across mechanical fabrication, 
                  circuit assembly, firmware architecture, and live field tuning.
                </div>
              </div>
            </div>
          </div>

          <div className="leadership-photos-grid">
            <div className="photo-card-wrap">
              <img
                src={robothingsStageImg}
                alt="President Mohammed HSINY presenting Club RoboThings"
                className="leadership-photo"
              />
              <div className="photo-caption">President Mohammed HSINY leading Club RoboThings</div>
            </div>
            <div className="photo-card-wrap">
              <img
                src={robodaysEventImg}
                alt="RoboDays National Robotics Event"
                className="leadership-photo"
              />
              <div className="photo-caption">RoboDays National Competition Event</div>
            </div>
          </div>
        </div>

        {/* Part 2: 13+ Competition Awards across 3 Tiers (1st, 2nd, 3rd) */}
        <div className="awards-header-block">
          <div className="awards-title-wrap">
            <FaTrophy className="awards-icon-gold" />
            <div>
              <h3 className="awards-section-title">13+ Competition Awards & Podiums</h3>
              <p className="awards-section-sub">
                Diverse competitive victories spanning 1st, 2nd, and 3rd place prizes across national and international engineering summits:
              </p>
            </div>
          </div>
        </div>

        <div className="flagship-awards-grid">
          {flagshipAwards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="award-card"
            >
              <div className="award-photo-holder">
                <img src={item.image} alt={item.title} className="award-real-photo" />
                <span className={`award-badge ${item.badgeClass}`}>
                  <FaMedal /> {item.badge}
                </span>
              </div>
              <div className="award-body">
                <h4 className="award-name">{item.title}</h4>
                <span className="award-organizers">{item.organizers}</span>
                <p className="award-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 8rem 2rem;
          background: var(--bg-deep);
          position: relative;
        }

        .leadership-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        /* Club Card */
        .leadership-main-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 5rem;
          backdrop-filter: blur(10px);
        }

        .role-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: 100px;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .leadership-title {
          font-size: 2rem;
          margin-bottom: 0.35rem;
        }

        .tenure-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .leadership-text {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .impact-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .impact-point {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .impact-point strong {
          color: var(--text-primary);
          display: inline;
        }

        .point-icon {
          font-size: 1.2rem;
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .leadership-photos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .photo-card-wrap {
          position: relative;
          height: 280px;
          border-radius: 18px;
          overflow: hidden;
          background: #080c14;
          border: 1px solid var(--glass-border);
        }

        .leadership-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .photo-card-wrap:hover .leadership-photo {
          transform: scale(1.05);
        }

        .photo-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.75rem 1rem;
          background: linear-gradient(to top, rgba(6, 8, 13, 0.95) 0%, transparent 100%);
          font-size: 0.75rem;
          color: #f1f5f9;
          font-weight: 500;
        }

        /* Awards Block */
        .awards-header-block {
          margin-bottom: 2.5rem;
        }

        .awards-title-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .awards-icon-gold {
          font-size: 2.2rem;
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .awards-section-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .awards-section-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .flagship-awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.75rem;
        }

        .award-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .award-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(245, 158, 11, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
        }

        .award-photo-holder {
          position: relative;
          height: 200px;
          background: #080c14;
          overflow: hidden;
        }

        .award-real-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .award-card:hover .award-real-photo {
          transform: scale(1.05);
        }

        .award-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.35rem 0.8rem;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          backdrop-filter: blur(8px);
        }

        .award-badge.gold {
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid #f59e0b;
          color: #fbbf24;
        }

        .award-badge.silver {
          background: rgba(148, 163, 184, 0.2);
          border: 1px solid #94a3b8;
          color: #e2e8f0;
        }

        .award-badge.bronze {
          background: rgba(217, 119, 6, 0.2);
          border: 1px solid #d97706;
          color: #fcd34d;
        }

        .award-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .award-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
          line-height: 1.4;
        }

        .award-organizers {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
          margin-bottom: 0.85rem;
          display: block;
        }

        .award-description {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .leadership-main-card {
            grid-template-columns: 1fr;
          }
          .leadership-photos-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .leadership-photos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Leadership;
