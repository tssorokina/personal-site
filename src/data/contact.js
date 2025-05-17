import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/tssorokina',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/soroktani/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/tssorokina',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:tssorokina@edu.hse.ru',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
