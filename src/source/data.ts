import profilePicture from '../assets/profile.png';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const colors = {
  first: '#232122',
  second: '#b3c100',
  third: '#4cb5f5',
  fourth: '#dddede',
};

export const headData = {
  title: 'Name | Marcos Ferreira',
  description: 'Welcome to my website',
};

export const mainData = {
  title: 'Hi, my name is ',
  name: 'Marcos Ferreira',
  subtitle: 'I am a web developer',
  cta: 'Know more',
};

export const aboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `I am an enthusiastic and dedicated developer. My focus and dedication have allowed me to learn quickly and adapt to new technologies, always seeking creative and innovative solutions.
I have developed a strong sense of responsibility, creativity, and punctuality throughout my education. I am accustomed to working in multidisciplinary teams, collaborating to achieve shared goals and overcome complex challenges.
  `,
  p2: `In addition, I have English communication skills, acquired during my training in the ACCESS program of the United States embassy, and my time in Montage as a Office Coordinator. This experience not only perfected my mastery of the language but also endowed me with essential competencies in teamwork, leadership, and volunteering.
  `,
  p3: `I am always looking for opportunities to grow and provide value, through the application and expansion of my technical skills. I am convinced that the future of technology is bright and I want to be part of it, contributing with my dedication and enthusiasm. I am open to new opportunities that allow me to apply and further develop my skills.`,
};

export const projectSectionTitle = 'Projects';

export const projectData = [
  {
    title: 'Tataapp',
    description1: `Forest Flame is a web application that uses information from NASA's FIRMS satellites to detect fires. This information is then presented to
    firefighters through an intuitive interface, making it easy for them to quickly identify and respond to fires.`,
    description2: `This Project was developed during the NASA Space Apps Challenge 2023, seeking to provide a solution to the challenge "Forest Fire Community Based Solutions".`,
    liveUrl: 'https://github.com/marcosferr/Forest-Flame-App',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/marcosferr/Forest-Flame-App',
    sourceText: 'Source Code',
    img: { src: project1 },
  },
  {
    title: 'Startup Weekend Encarnación',
    description1: `Developed a user-friendly website using WordPress, focusing on event information, registration, and community interaction.
    Integrated WooCommerce and Metrepay for seamless online and local payment options, enabling convenient registration and participation.`,
    description2: `This project was created to collaborate with my community and help the Startup Weekend Encarnación event.`,
    liveUrl: 'https://startupweekendencarnacion.com/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://www.instagram.com/switapua/',
    sourceText: 'See the event',
    img: { src: project2 },
  },
  {
    title: 'SocialPlace - (under development)    ',
    description1: `SocialPlace is a social network where users can generate posts and share their ideas.
    I implemented a full-stack social network system using the MERN stack.`,
    description2: `I managed the login system and connected the backend to AWS S3 storage.
    I deployed the application using an AWS EC2 instance.
    This is a practice project, I am still working on it. I wanted to learn about authentication and more complex relations with databases`,
    liveUrl: 'https://github.com/marcosferr/Socialplace',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/marcosferr/Socialplace',
    sourceText: 'Source Code',
    img: { src: project3 },
  },
];

export const contactData = {
  title: 'Contact',
  description: 'Send me an e-mail!',
  mailTo: 'mailto:ferreiramarcosadrian@gmail.com',
};

export const FooterData = {
  githubUrl: 'https://github.com/marcosferr',
  linkedinUrl: 'https://www.linkedin.com/in/marcos-adrian-ferreira/',
};
