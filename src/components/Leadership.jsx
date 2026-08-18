import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaLightbulb, FaCheck, FaMedal } from 'react-icons/fa';

// Real Images uploaded by Mohammed
import robothingsStageImg from '../assets/images/robothings_stage.jpg';
import robodaysEventImg from '../assets/images/robodays_event.jpg';
import awardEnsakhImg from '../assets/images/award_ensakh.jpg';
import awardEnsajImg from '../assets/images/award_ensaj.jpg';
import profileSummerImg from '../assets/images/profile_mohammed.jpg';
import challengeRobotImg from '../assets/images/challenge_robot.jpg';

const distinctions = [
  {
    place: '1st Prize',
    emoji: '🥇',
    title: 'International Summer School on Innovation & AI',
    orgs: 'ENSEM | ENSAO | FSTM | FSBM Casablanca',
    theme: 'AI & Technological Innovation',
    highlight: 'Awarded 1st place following a live technological innovation defense and startup pitch before an international academic and industrial jury.',
    image: profileSummerImg,
    color: 'gold',
  },
  {
    place: '2nd Prize',
    emoji: '🥈',
    title: 'National Robotics Hackathons & Autonomous Challenges',
    orgs: 'ENSA Khouribga | ENIM Rabat',
    theme: 'Autonomous Mobile Robotics & Arena Challenges',
    highlight: '2nd place award across competitive autonomous mobile robotics trials, fast-response obstacle navigation, and closed-loop PID control performance.',
    image: awardEnsakhImg,
    color: 'silver',
  },
  {
    place: '3rd Prize',
    emoji: '🥉',
    title: 'National Robotics & Engineering Competitions',
    orgs: 'EMI Rabat | ENSA El Jadida',
    theme: 'Speed Tracking & Embedded Signal Processing',
    highlight: 'Podium finish in multi-university robotics challenges: high-speed optical line-tracking, real-time sensor filtering, and embedded control agility.',
    image: awardEnsajImg,
    color: 'bronze',
  },
  {
    place: 'Podiums & Finalist',
    emoji: '🏆',
    title: 'Multi-University Robotics & Hackathon Challenges',
    orgs: 'Moroccan Engineering Universities & Hackathons',
    theme: 'Multi-Thematic Engineering Competitions',
    highlight: 'Repeated top-tier rankings in diverse national engineering events spanning autonomous drones, mobile robotics fleets, and multidisciplinary innovation sprints.',
    image: challengeRobotImg,
    color: 'cyan',
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-tag">Engagement & Distinctions</span>
          <h2 className="section-title-large">
            Leadership, Community & <span className="highlight-gold">Competition Awards</span>
          </h2>
          <p className="section-subtitle">
            Leading multidisciplinary engineering teams, democratizing robotics education, and winning podium finishes across multiple national robotics hackathons, innovation challenges, and engineering summits.
          </p>
        </div>

        {/* Leadership Cards: RoboThings + RoboDays */}
        <div className="leadership-grid">
          {/* Club RoboThings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="leadership-card"
          >
            <div className="card-photo-wrapper">
              <img
                src={robothingsStageImg}
                alt="Mohammed HSINY presenting RoboThings Club"
                className="leadership-photo"
              />
              <div className="photo-badge">2024 — 2026</div>
            </div>

            <div className="card-content-body">
              <div className="lead-header">
                <FaUsers className="lead-icon cyan" />
                <div>
                  <h3 className="lead-role">President — RoboThings Club</h3>
                  <span className="lead-sub">FST Mohammedia</span>
                </div>
              </div>

              <ul className="lead-list">
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Strategic Leadership:</strong> Managing club operations, coordinating technical divisions, and driving collaborative robotics initiatives.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Technical Mentorship:</strong> Training students on STM32 microcontrollers, Arduino, KiCad PCB layout, and SolidWorks CAD modeling.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Workshops & Build Nights:</strong> Organizing hands-on hackathons, robotics build sprints, and collaborative hardware initiatives.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RoboDays National Competition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="leadership-card"
          >
            <div className="card-photo-wrapper">
              <img
                src={robodaysEventImg}
                alt="RoboDays National Robotics Competition"
                className="leadership-photo"
              />
              <div className="photo-badge gold">National Event</div>
            </div>

            <div className="card-content-body">
              <div className="lead-header">
                <FaLightbulb className="lead-icon gold" />
                <div>
                  <h3 className="lead-role">Founder & Lead Coordinator</h3>
                  <span className="lead-sub">RoboDays National Robotics Competition</span>
                </div>
              </div>

              <ul className="lead-list">
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Technical Specifications:</strong> Authored competition rulebooks and track challenges for autonomous drones, line-followers, and maze navigation.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Logistics & Partnerships:</strong> Secured industrial sponsors, handled venue logistics, and coordinated participating engineering teams.</span>
                </li>
                <li>
                  <FaCheck className="check-bullet" />
                  <span><strong>Jury & Evaluation:</strong> Defined engineering evaluation rubrics and hosted technical defense panels.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Awards & Distinctions Block */}
        <div className="distinctions-block">
          <div className="distinctions-header">
            <FaTrophy className="trophy-header-icon" />
            <div>
              <h3>Awards & Podiums in National & International Competitions</h3>
              <p>Multiple victories across diverse themes: Autonomous Robotics, Hackathons, Innovation Pitching, and Speed Challenges.</p>
            </div>
          </div>

          <div className="awards-grid">
            {distinctions.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`award-card ${award.color}`}
              >
                <div className="award-photo-thumb">
                  <img src={award.image} alt={award.title} className="award-img" />
                  <div className="award-rank-pill">{award.place}</div>
                </div>

                <div className="award-body">
                  <div className="award-top-row">
                    <span className="award-emoji">{award.emoji}</span>
                    <h4 className="award-event">{award.title}</h4>
                  </div>
                  <h5 className="award-orgs">{award.orgs}</h5>
                  <div className="award-theme-badge">{award.theme}</div>
                  <p className="award-highlight">{award.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          position: relative;
        }

        .leadership-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .leadership-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
        }

        .leadership-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(245, 158, 11, 0.35);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
        }

        .card-photo-wrapper {
          position: relative;
          height: 250px;
          background: #080c14;
        }

        .leadership-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .photo-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          padding: 0.35rem 0.9rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .photo-badge.gold {
          color: var(--accent-gold);
          border-color: rgba(245, 158, 11, 0.4);
        }

        .card-content-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .lead-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .lead-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }
        .lead-icon.cyan { color: var(--accent-cyan); }
        .lead-icon.gold { color: var(--accent-gold); }

        .lead-role {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .lead-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .lead-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .lead-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .lead-list strong {
          color: var(--text-primary);
        }

        /* Distinctions Block */
        .distinctions-block {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .distinctions-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .trophy-header-icon {
          font-size: 2.4rem;
          color: var(--accent-gold);
        }

        .distinctions-header h3 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
        }

        .distinctions-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
        }

        .award-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition-fast);
          position: relative;
        }

        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .award-photo-thumb {
          position: relative;
          height: 190px;
          background: #080c14;
        }

        .award-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .award-rank-pill {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          padding: 0.25rem 0.75rem;
          background: rgba(6, 8, 13, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
        }

        .award-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .award-card.gold { border-color: rgba(245, 158, 11, 0.4); }
        .award-card.gold .award-rank-pill { color: var(--accent-gold); border-color: rgba(245, 158, 11, 0.5); }

        .award-card.silver { border-color: rgba(148, 163, 184, 0.4); }
        .award-card.silver .award-rank-pill { color: #e2e8f0; border-color: rgba(148, 163, 184, 0.5); }

        .award-card.bronze { border-color: rgba(217, 119, 6, 0.4); }
        .award-card.bronze .award-rank-pill { color: #fb923c; border-color: rgba(217, 119, 6, 0.5); }

        .award-card.cyan { border-color: rgba(0, 229, 255, 0.4); }
        .award-card.cyan .award-rank-pill { color: var(--accent-cyan); border-color: rgba(0, 229, 255, 0.5); }

        .award-top-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .award-emoji {
          font-size: 1.4rem;
        }

        .award-event {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .award-orgs {
          font-size: 0.82rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .award-theme-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          margin-bottom: 0.6rem;
          width: fit-content;
        }

        .award-highlight {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Leadership;
