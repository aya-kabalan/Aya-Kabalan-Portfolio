import styles from './ProjectCard.module.css';

interface ProjectProps {
  title: string;
  badge: string;
  description: string;
  tech: string[];
  github: string;
}

const ProjectCard = ({ title, badge, description, tech, github }: ProjectProps) => {
    return (
        <div className={styles.card}>
        <div>
            <span className={styles.badge}>{badge}</span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.techList}>
            {tech.map((t) => (
                <li key={t} className={styles.techItem}>{t}</li>
            ))}
            </ul>
        </div>
        <a href={github} className={styles.githubBtn} target="_blank">
            معاينة الكود على GitHub
        </a>
        </div>
    );
    };

export default ProjectCard;