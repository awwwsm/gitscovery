import { useRef, useState } from 'react';
import { motion } from 'motion/react';

import type { Projects } from '@/data/projects';

import styles from './app.module.css';
import { pick } from '@/helpers/random';

interface AppProps {
  projects: Projects;
}

export function App({ projects }: AppProps) {
  return (
    <div className={styles.app}>
      <div className={styles.pattern} />
      <Button projects={projects} />
    </div>
  );
}

function Button({ projects }: AppProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, left, top, width } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const handleTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];

    if (!ref.current || !touch) return;

    const { clientX, clientY } = touch;
    const { height, left, top, width } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const handleClick = () => {
    const randomProject = pick(projects);

    window.location.href = randomProject.repo;
  };

  return (
    <motion.button
      animate={{ x, y }}
      className={styles.button}
      ref={ref}
      style={{ position: 'relative' }}
      transition={{ damping: 15, mass: 0.1, stiffness: 150, type: 'spring' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      onMouseLeave={reset}
      onMouseMove={handleMouse}
      onTouchEnd={reset}
      onTouchMove={handleTouch}
    >
      <motion.div
        animate={{ x: x * 0.3, y: y * 0.3 }}
        className={styles.one}
        transition={{ damping: 15, mass: 0.1, stiffness: 150, type: 'spring' }}
      />

      <motion.div
        animate={{ x: x * 0.2, y: y * 0.2 }}
        className={styles.two}
        transition={{
          damping: 15,
          mass: 0.1,
          stiffness: 150,
          type: 'spring',
        }}
      />

      <motion.span
        animate={{ x: x * 0.3, y: y * 0.3 }}
        transition={{
          damping: 15,
          mass: 0.1,
          stiffness: 150,
          type: 'spring',
        }}
      >
        [New Project]
      </motion.span>
    </motion.button>
  );
}
