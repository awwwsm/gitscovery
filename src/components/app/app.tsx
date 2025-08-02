import { useRef, useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import type { Project, Projects } from '@/data/projects';
import { Projects as ProjectsComponent } from '../projects';

import styles from './app.module.css';
import { cn } from '@/helpers/styles';

interface AppProps {
  projects: Projects;
}

export function App({ projects }: AppProps) {
  const fuse: React.MutableRefObject<null | Fuse<Project>> = useRef(null);

  useEffect(() => {
    fuse.current = new Fuse(projects, {
      includeScore: true,
      keys: ['title', 'tags', 'description'],
      threshold: 0.4,
    });
  }, [projects]);

  const form = useRef<HTMLFormElement | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Projects>(projects);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() !== '' && fuse.current) {
      const fuseResults = fuse.current.search(query);

      setResults(fuseResults.map(r => r.item));
    } else {
      setResults(projects);
    }
  };

  const setExample = (query: string) => {
    if (fuse.current) {
      setQuery(query);

      const fuseResults = fuse.current.search(query);

      setResults(fuseResults.map(r => r.item));
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} ref={form} onSubmit={handleSubmit}>
        <input
          placeholder="Search for a project..."
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">
          Search
          <div className={styles.corner} />
          <div className={styles.corner} />
          <div className={styles.corner} />
          <div className={styles.corner} />
        </button>
      </form>

      <div className={styles.separator} />
      <div className={styles.examples}>
        <h3>Examples:</h3>
        <div className={styles.buttons}>
          {['AI', 'Productivity', 'Security', 'Community'].map(example => (
            <button key={example} onClick={() => setExample(example)}>
              {example}
              <div className={styles.corner} />
              <div className={styles.corner} />
              <div className={styles.corner} />
              <div className={styles.corner} />
            </button>
          ))}
        </div>
      </div>
      <div className={cn(styles.separator, styles.bottom)} />

      <ProjectsComponent projects={results} />
      <div className={cn(styles.separator)} />
    </div>
  );
}
