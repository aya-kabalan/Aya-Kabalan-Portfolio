import styles from './ProjectCard.module.css';

interface ProjectProps {
    title: string;
    image1: string;
    image2: string;
    badge: string;
    description: string;
    tech: string[];
    github: string;
}

const ProjectCard = ({ title, image1, image2, badge, description, tech, github }: ProjectProps) => {
    return (
        <div className={styles.card}>
        <div className={styles.imagesGrid}>
            <img src={image1} alt={`${title} 1`} className={styles.projectImg} />
            <img src={image2} alt={`${title} 2`} className={styles.projectImg} />
        </div>
        <div className={styles.cardContent}>
            <h3>{title} <span className={styles.badge}>{badge}</span></h3>
            <p>{description}</p>
            <div className={styles.techTags}>
            {tech.map((t, i) => <span key={i} className={styles.tag}>{t}</span>)}
            </div>
            <a href={github} target="_blank" rel="noreferrer" className={styles.gitBtn}>View Project</a>
        </div>
        </div>
    );
};

export default ProjectCard;