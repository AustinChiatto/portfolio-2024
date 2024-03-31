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

export const projects = [
  {
    projectName: 'Apogee',
    projectDesc: 'A feed of planned missions in spaceflight from agencies around the world.',
    projectStack: ['Next.js', 'TypeScript', 'API', 'Vercel'],
    projectRole: ['Design', 'Development'],
    projectUrl: 'https://apogee-spaceflight-tracker.vercel.app/',
    projectRepoUrl: 'https://github.com/AustinChiatto/apogee-spaceflight-tracker',
    projectImageUrl: '/images/apogee-spaceflight-tracker.png',
    projectImageAlt:
      'Picture of the Apogee website, displaying a grid of rocket images for upcoming launches',
    projectImageBase64: 'string'
  },
  {
    projectName: 'string',
    projectDesc: 'string',
    projectStack: ['string', 'string', 'string'],
    projectRole: ['string', 'string'],
    projectUrl: 'string',
    projectRepoUrl: 'string',
    projectImageUrl: '/images/apogee-spaceflight-tracker.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'string',
    projectDesc: 'string',
    projectStack: ['string', 'string', 'string'],
    projectRole: ['string', 'string'],
    projectUrl: 'string',
    projectRepoUrl: 'string',
    projectImageUrl: '/images/apogee-spaceflight-tracker.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'string',
    projectDesc: 'string',
    projectStack: ['string', 'string', 'string'],
    projectRole: ['string', 'string'],
    projectUrl: 'string',
    projectRepoUrl: 'string',
    projectImageUrl: '/images/apogee-spaceflight-tracker.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  },
  {
    projectName: 'string',
    projectDesc: 'string',
    projectStack: ['string', 'string', 'string'],
    projectRole: ['string', 'string'],
    projectUrl: 'string',
    projectRepoUrl: 'string',
    projectImageUrl: '/images/apogee-spaceflight-tracker.png',
    projectImageAlt: 'string',
    projectImageBase64: 'string'
  }
];
