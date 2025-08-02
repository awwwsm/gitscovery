import { reverseArray } from '@/helpers/array';

export interface Project {
  date: string;
  description: string;
  id: string;
  license: string;
  repo: string;
  tags: Array<string>;
  title: string;
  website?: string;
}

export type Projects = Array<Project>;

const _projects: Projects = [
  {
    date: '2025-08-02',
    description: 'A dead-simple online workspace',
    id: 'hello',
    license: 'MIT',
    repo: 'https://github.com/usehaus/haus',
    tags: ['productivity'],
    title: 'Haus',
    website: 'https://use.haus',
  },
  {
    date: '2025-08-02',
    description: 'Your open-source bio page.',
    id: 'hello-world',
    license: 'MIT',
    repo: 'https://github.com/opnbio/opn',
    tags: ['bio', 'website'],
    title: 'OPN',
    website: 'https://opn.bio',
  },
  {
    date: '2025-08-02',
    description:
      'Web extension for saving a faithful copy of a complete web page in a single HTML file.',
    id: 'hello-world-2',
    license: 'MIT',
    repo: 'https://github.com/opnbio/opn',
    tags: ['extension'],
    title: 'SingleFile',
  },
];

export const projects = reverseArray(_projects);
