import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/Comingsoon.jpg';
import Work2 from './assets/Comingsoon.jpg';
import Work3 from './assets/Comingsoon.jpg';
import Work4 from './assets/Comingsoon.jpg';
import Work5 from './assets/Comingsoon.jpg';
import Work6 from './assets/Comingsoon.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ludwing',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Bravo',
  },

  /*{
    id: 3,
    title: 'Age : ',
    description: '35 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Venezolano',
  },
  
  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },
  
  {
    id: 7,
    title: 'Phone : ',
    description: '+1170201922',
  },
  
  {
    id: 8,
    title: 'Email : ',
    description: 'ludwingbravo4@gmail.com',
  },
  
  {
    id: 9,
    title: 'Github : ',
    description: 'https://github.com/ludwinner',
  },
  */
  {
    id: 6,
    title: 'Address : ',
    description: 'Argentina',
  },
  
  {
    id: 10,
    title: 'Langages : ',
    description: 'Español',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '6+',
    title: 'Completed <br /> Courses',
  },

  {
    id: 4,
    no: '5+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Analista Desarrollador Jr <span> Las Margaritas </span>',
    desc: 'Programar aplicaciones desarrolladas en la organización. Atención de Incidentes y Requerimientos Técnicos y Mantenimiento evolutivo de las aplicaciones internas, utilizando C# como lenguaje y .NET como framework principal, implementando las tecnologías de Blazor, Telerik y HTLM5, así como la asignación de estilos en CSS, trabajar en el workflow de GIT y el manejo de bases de datos en SQL Server.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Full Stack Developer <span> Wixxer APP </span>',
    desc: 'Creación de un E-commerce, cuyo enfoque es la oferta de servicios por parte de profesionales y especialistas. Este proyecto fue realizado en colaboración con otros siete compañeros de Henry. Desarrollando una base de Datos en MongoDB, trabajado en Backend  con Node, Express, JWT y Frontend con React, Redux, Styled Components, SweetAlert2.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Full Stack Developer <span> spoonacular API </span>',
    desc: 'Crear una aplicación en la cual se puedan ver distintas recetas de comida junto con información de las mismas utilizando la API spoonacular https://spoonacular.com/food-ap  y a partir de ella poder: Buscar,  Filtrar/ Ordenar y Crear recetas. Utilizando las tecnologías ReactJS, Redux, Node, Express, Sequelize y HTLM5 y estilos en CSS, trabajar en el workflow de GIT y la  creación de una base de datos con PSQL.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Desarrollador Web Full Stack <span> Academia Henry </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-Actualidad',
    title: 'Analista Programador <span> Universidad Abierta Interamericana </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2005',
    title: 'Bachiller en Ciencias <span> Colegio San Agustin </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '50',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '25',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '50',
  },

  {
    id: 4,
    title: 'NodeJs',
    percentage: '25',
  },

  {
    id: 5,
    title: '.Net',
    percentage: '25',
  },

  {
    id: 6,
    title: 'C#',
    percentage: '25',
  },

  {
    id: 7,
    title: 'React Native',
    percentage: '25',
  },

  {
    id: 8,
    title: 'React',
    percentage: '25',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Proximamente',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Proximamente',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Proximamente',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Proximamente',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Proximamente',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Proximamente',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
