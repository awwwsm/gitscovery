import type { Projects } from '@/data/projects';
import { Project } from '../project';

import styles from './projects.module.css';
import { useState } from 'react';

interface ProjectsProps {
  projects: Projects;
}

const PROJECTS_PER_PAGE = 10;

export function Projects({ projects }: ProjectsProps) {
  const [shownCount, setShownCount] = useState(PROJECTS_PER_PAGE);

  return (
    <div className={styles.projects}>
      <h3>
        <span>Projects</span>
        <div />
      </h3>

      {projects.length === 0 && (
        <p className={styles.notFound}>No projects were found.</p>
      )}

      {projects.slice(0, shownCount).map(project => (
        <Project key={project.id} project={project} />
      ))}

      <div className={styles.footer}>
        <div />
        {shownCount >= projects.length && <p>The End.</p>}
        {shownCount < projects.length && (
          <button
            onClick={() => setShownCount(prev => prev + PROJECTS_PER_PAGE)}
          >
            Show More
            <div className={styles.corner} />
            <div className={styles.corner} />
            <div className={styles.corner} />
            <div className={styles.corner} />
          </button>
        )}
        <div />
      </div>
    </div>
  );
}
