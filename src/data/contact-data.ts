export type ContactDataProps = {
  contactLabel: string;
  contactHref: string;
  contactIconSrc: string;
  contactIconAlt: string;
};

export const contactData = [
  {
    contactLabel: 'Email',
    contactHref: 'mailto:hey@austinchiatto.com',
    contactIconSrc: '/icons/icon-email.svg',
    contactIconAlt: 'Envelope icon'
  },
  {
    contactLabel: 'LinkedIn',
    contactHref: 'https://www.linkedin.com/in/austin-chiatto',
    contactIconSrc: '/icons/icon-linkedin.svg',
    contactIconAlt: 'Icon of the LinkedIn logo'
  },
  {
    contactLabel: 'GitHub',
    contactHref: 'https://github.com/AustinChiatto',
    contactIconSrc: '/icons/icon-github.svg',
    contactIconAlt: 'Icon of the GitHub logo'
  },
  {
    contactLabel: 'Resume',
    contactHref: '/resume-austin-chiatto.pdf',
    contactIconSrc: '/icons/icon-document.svg',
    contactIconAlt: 'Document icon'
  }
];
