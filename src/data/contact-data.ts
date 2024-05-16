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
    contactIconAlt: 'Envelope icon',
    contactTags: ['Send Me An Email', 'hey@austinchiatto.com']
  },
  {
    contactLabel: 'LinkedIn',
    contactHref: 'https://www.linkedin.com/in/austin-chiatto',
    contactIconSrc: '/icons/icon-linkedin.svg',
    contactIconAlt: 'Icon of the LinkedIn logo',
    contactTags: ['Visit LinkedIn Profile', 'linkedin.com/austin-chiatto']
  },
  {
    contactLabel: 'GitHub',
    contactHref: 'https://github.com/AustinChiatto',
    contactIconSrc: '/icons/icon-github.svg',
    contactIconAlt: 'Icon of the GitHub logo',
    contactTags: ['Visit GitHub Profile', 'github.com/AustinChiatto']
  },
  {
    contactLabel: 'Resume',
    contactHref: '/resume-austin-chiatto.pdf',
    contactIconSrc: '/icons/icon-document.svg',
    contactIconAlt: 'Document icon',
    contactTags: ['View Resume', 'austin-chiatto.pdf']
  }
];
