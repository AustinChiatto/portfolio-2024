export type projectProps = {
  projectName: string;
  projectDesc: string;
  projectClient?: string;
  projectClientUrl?: string;
  projectStack: Array<string>;
  projectRole: string;
  projectUrl: string;
  projectRepoUrl?: string;
  projectImageUrl: string;
  projectImageAlt: string;
  projectImageBase64: string;
  projectCommit: CommitDataProps | undefined | null;
  repoIdentifier?: string;
};

export type CommitDataProps = {
  repo: string;
  sha: string;
  date: string;
};

// todo: add alt's and base64

export const projects = [
  {
    projectName: 'Apogee',
    projectDesc: 'A feed of planned missions in spaceflight from agencies around the world.',
    projectStack: ['Next.js', 'TypeScript', 'API', 'Vercel'],
    projectRole: 'Design & Development',
    projectUrl: 'https://apogee-spaceflight-tracker.vercel.app/',
    projectRepoUrl: 'https://github.com/AustinChiatto/apogee-spaceflight-tracker',
    projectImageUrl: '/images/project-image-apogee.png',
    projectImageAlt:
      'Picture of the Apogee website, displaying a grid of rocket images for upcoming launches',
    projectImageBase64: 'string',
    repoIdentifier: 'apogee'
  },
  {
    projectName: 'Market Maestro',
    projectDesc: 'Built from the provided Figma design during my internship at Dovetail Digital.',
    projectClient: 'Dovetail Digital',
    projectClientUrl: 'https://www.dovetaildigital.ca/',
    projectStack: ['Next.js', 'TypeScript', 'Material-UI', 'Vercel'],
    projectRole: 'Front-End Developer',
    projectUrl: 'https://www.marketmaestro.ca',
    projectImageUrl: '/images/project-image-market-maestro.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'Code2Image',
    projectDesc: 'A better way to share screenshots of code snippets.',
    projectStack: ['React', 'JavaScript', 'Sass'],
    projectRole: 'Design & Development',
    projectUrl: 'https://crumb.so/code-to-img',
    projectRepoUrl: 'https://github.com/AustinChiatto/crumb',
    projectImageUrl: '/images/project-image-code2image.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string',
    repoIdentifier: 'crumb'
  },
  {
    projectName: 'CSS Grid Tool',
    projectDesc: 'An easier way to visualize your ideal grid layout.',
    projectStack: ['React', 'JavaScript', 'Sass'],
    projectRole: 'Design & Development',
    projectUrl: 'https://crumb.so/grid-tool',
    projectRepoUrl: 'https://github.com/AustinChiatto/crumb',
    projectImageUrl: '/images/project-image-grid-tool.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string',
    repoIdentifier: 'crumb'
  },
  {
    projectName: 'Asteroid Run',
    projectDesc: 'Browser game built with a vanilla front-end stack.',
    projectStack: ['JavaScript', 'HTML Canvas', 'CSS'],
    projectRole: 'Design & Development',
    projectUrl: 'https://asteroidrun.crumb.so/',
    projectRepoUrl: 'https://github.com/AustinChiatto/asteroid-run-2.0.0',
    projectImageUrl: '/images/project-image-asteroid-run.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string',
    repoIdentifier: 'asteroid'
  }
];
