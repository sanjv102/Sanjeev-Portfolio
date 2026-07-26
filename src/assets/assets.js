import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
 //import projectImg1 from '../assets/project1.avif';
 //import projectImg2 from '../assets/project2.avif';
 //import projectImg3 from '../assets/project3.avif';
 //import projectImg4 from '../assets/project4.avif';
 //import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';

import projectImg1 from '../assets/HP1.jpg';
import projectImg2 from '../assets/Auto2.jpg';
import projectImg3 from '../assets/stock.jpg';
import projectImg4 from '../assets/kyc.jpg';
import projectImg5 from '../assets/salesforce.jpg';

import profileImg4 from '../assets/profile4.jpg';
import profileImg5 from '../assets/profile5.png';



export const assets = {
    profileImg5,
}


export const aboutInfo = [
	{
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    },
	
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    
	{
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    }
  ];



export const skills = [
{
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Java', 'SpringBoot', 'Micro-Services', 'JPA/Hibernate']
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'OracleDB']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'IntelliJ', 'Eclipse', 'Kafka', 'RabbitMQ']
  }
];



export const projects = [
  {
    title: "Warranty Application",
    description: "A full-featured online warranty application, with user authentication, for HP.",
    image: projectImg1,
    tech: ["Java", "SpringBoot", "PostgreSQL", "Micro Services", "React"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Automotive Test Application",
    description: "An automotive test application with full-featured test records and various real time details.",
    image: projectImg2,
    tech: ["Java", "SpringBoot", "SpringData JPA", "React"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  //{
  //  title: "Fitness Tracker",
  //  description: "A mobile app for tracking workouts, nutrition, and health metrics.",
  //  image: projectImg6,
  //  tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  //  icons: [FaReact, FaDatabase],
   // demo: "#",
   // code: "#",
  //},
  {
    title: "Account Opening Application",
    description: "Developed a secure, end-to-end digital onboarding application for Trading accounts. Features integrated PAN verification, Aadhaar-based e-Sign OTP, biometric selfie matching, and an In-Person Verification (IPV) video system.",
    image: projectImg3,
    tech: ["Java", "SpringMVC", "MySQL", "Hibernate", "HTML & CSS", "JavaScript"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "KYC Application",
    description: "Developed a secure, end-to-end digital KYC application featuring automated document parsing, biometric photo matching, and secure Video OTP feature.",
    image: projectImg4,
    tech: ["Java", "SpringMVC", "MySQL", "Hibernate", "HTML & CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "Custom Solution Application",
    description: "Designed and Developed scalable, secure app via Apex Classes, Triggers, and Lightning Web Components(LWC) tailored to individual client workflows.",
    image: projectImg5,
    tech: ["Java", "Apex", "SQL", "Lightning Web Components"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Software Engineer",
    company: "Accenture",
    duration: "June2026 - Present",
    description:
      "Leading backend & frontend development for financial client, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Consultant",
    company: "Capgemini",
    duration: "Mar2025 - Mar2026",
    description:
      "Developed and maintained web applications for HP clients, focusing on bug free API design and performance optimization.",
    color: "pink"
  },
  {
    role: "Software Engineer",
    company: "VolksWagen Group Technology",
    duration: "Aug2022 - Aug2024",
    description:
	  "Developed and maintained web applications for HP clients, focusing on bug free API design and performance optimization.",
    color: "blue"
  },
  {
    role: "Software Engineer",
    company: "Ericsson",
    duration: "Mar2022 - Apr2024",
    description:
      "Developed and maintained web applications for HP clients, focusing on bug free API design and performance optimization.",
    color: "blue"
  },
  {
    role: "Software Engineer",
    company: "Synergy Softwares Limited",
    duration: "Aug2020 - Mar2022",
    description:
      "Developed and maintained web applications for various financial clients, focusing on bug free API design and performance optimization.",
    color: "blue"
  },
  {
    role: "Software Engineer",
    company: "360 Degree Cloud Technology",
    duration: "Mar2020 - Jul2020",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
  
];
