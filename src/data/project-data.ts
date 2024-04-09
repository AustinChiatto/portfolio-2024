export type projectProps = {
  projectName: string;
  projectDesc: string;
  projectStack: Array<string>;
  projectRole: Array<string>;
  projectUrl: string;
  projectRepoUrl: string;
  projectImageUrl: string;
  projectImageAlt: string;
  projectImageBase64: string;
};

// todo: add alt's and base64

export const projects = [
  {
    projectName: 'Apogee',
    projectCompany: 'Self-Directed',
    projectDesc: 'A feed of planned missions in spaceflight from agencies around the world.',
    projectStack: ['Next.js', 'TypeScript', 'API', 'Vercel'],
    projectRole: ['Design', 'Development'],
    projectUrl: 'https://apogee-spaceflight-tracker.vercel.app/',
    projectRepoUrl: 'https://github.com/AustinChiatto/apogee-spaceflight-tracker',
    projectImageUrl: '/images/project-image-apogee.png',
    projectImageAlt:
      'Picture of the Apogee website, displaying a grid of rocket images for upcoming launches',
    projectImageBase64: 'string'
  },
  {
    projectName: 'Market Maestro',
    projectCompany: 'Dovetail Digital',
    projectDesc:
      'Built as part of my internship, I transformed design documents into a functional and responsive site.',
    projectStack: ['Next.js', 'TypeScript', 'Material-UI', 'Vercel'],
    projectRole: ['Developer'],
    projectUrl: 'https://www.marketmaestro.ca',
    projectRepoUrl: 'n/a',
    projectImageUrl: '/images/project-image-market-maestro.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'Code2Image',
    projectCompany: 'Self Directed',
    projectDesc: 'A better way to share screenshots of code snippets.',
    projectStack: ['React', 'JavaScript', 'Sass'],
    projectRole: ['Design', 'Development'],
    projectUrl: 'https://crumb.so/code-to-img',
    projectRepoUrl: 'https://github.com/AustinChiatto/crumb',
    projectImageUrl: '/images/project-image-code2image.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'CSS Grid Tool',
    projectCompany: 'Self Directed',
    projectDesc: 'An easier way to visualize your ideal grid layout.',
    projectStack: ['React', 'JavaScript', 'Sass'],
    projectRole: ['Design', 'Development'],
    projectUrl: 'https://crumb.so/grid-tool',
    projectRepoUrl: 'https://github.com/AustinChiatto/crumb',
    projectImageUrl: '/images/project-image-grid-tool.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'Asteroid Run',
    projectCompany: 'Self Directed',
    projectDesc: 'Browser game built with a vanilla front-end stack.',
    projectStack: ['JavaScript', 'HTML Canvas', 'CSS'],
    projectRole: ['Design', 'Development'],
    projectUrl: 'https://asteroidrun.crumb.so/',
    projectRepoUrl: 'https://github.com/AustinChiatto/asteroid-run-2.0.0',
    projectImageUrl: '/images/project-image-asteroid-run.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  }
];
