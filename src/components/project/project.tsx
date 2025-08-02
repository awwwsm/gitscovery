import type { Project } from '@/data/projects';

import styles from './project.module.css';
import { formatDate } from '@/helpers/date';

interface ProjectProps {
  project: Project;
}

export function Project({ project }: ProjectProps) {
  return (
    <div className={styles.project}>
      <p className={styles.date}>{formatDate(new Date(project.date))}</p>

      <h2 className={styles.title}>
        {project.title}{' '}
        <span className={styles.license}>{project.license}</span>
      </h2>
      <p className={styles.description}>{project.description}</p>
      <p className={styles.tags}>
        {project.tags.map(tag => (
          <span key={`${project.id}-${tag}`}>#{tag}</span>
        ))}
      </p>
      <div className={styles.links}>
        {project.website && <a href={project.website}>Website</a>}
        <a href={project.repo}>Repo</a>
      </div>
    </div>
  );
}
