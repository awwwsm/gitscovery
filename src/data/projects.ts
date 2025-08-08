export interface Project {
  date: string;
  repo: string;
  repoLabel: string;
  title: string;
}

export type Projects = Array<Project>;

export const projects: Projects = [
  {
    date: '2025-08-08',
    repo: 'https://github.com/HeyPuter/puter',
    repoLabel: 'HeyPuter/puter',
    title: 'Puter',
  },
  {
    date: '2025-08-08',
    repo: 'https://github.com/twentyhq/twenty',
    repoLabel: 'twentyhq/twenty',
    title: 'Twenty',
  },
  {
    date: '2025-08-08',
    repo: 'https://github.com/mermaid-js/mermaid',
    repoLabel: 'mermaid-js/mermaid',
    title: 'Mermaid',
  },
];
