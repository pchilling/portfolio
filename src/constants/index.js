import {
  resume,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  csharp,
  canva,
  tailwind,
  nodejs,
  python,
  netcore,
  git,
  rstudio,
  neweraoil,
  taiwan,
  uvu,
  canada,
  carrent,
  jobit,
  tripguide,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"resume",
    title:"Resume",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Rstudio",
    icon: rstudio,
  },
  {
    name: ".NET Core",
    icon: netcore,
  },
 
];

const experiences = [
  {
    title: "Before College",
    company_name: "Taiwan",
    icon: taiwan,
    iconBg: "#383E56",
    date: "before 2017",
    points: [
      "Grew up embracing Taiwan's rich culture and traditions.",
      "Acquired fluency in Mandarin, deepening connections with local communities.",
      "Built a foundation of values that influenced future academic choices.",
      "Explored diverse interests from arts to local history.",
    ],
  },
  {
    title: "Community Service & Leadership Experience",
    company_name: "Canada Montreal",
    icon: canada,
    iconBg: "#383E56",
    date: "Oct 2017 - early 2019",
    points: [
      "Actively built and maintained relationships with individuals from diverse backgrounds, enhancing my interpersonal and communication skills.",
      "Immersed myself in a French-speaking environment, rapidly acquiring proficiency in the French language through daily interactions and conversations.",
      "Took on responsibilities to organize and lead group activities, cultivating leadership and teamwork abilities.",
      "Worked in dynamic environments, adapting to and addressing various unexpected situations.",
    ],
  },
  {
    title: "Digital Content & Product Promotion",
    company_name: "New Era Oil",
    icon: neweraoil,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Present",
    points: [
      "Managed and curated content for the company's Instagram account, ensuring consistent branding and engagement across platforms.",
      "Crafted and promoted product information, effectively appealing to potential customers and driving brand awareness.",
      "Collaborated closely with business team partners to develop and execute strategic proposals, enhancing the company's market presence.",
      "Led a dedicated team responsible for service provision and event organization, ensuring smooth operations and successful outcomes.",
    ],
  },
  {
    title: "Information System: Data Analytics",
    company_name: "Utah Valley University",
    icon: uvu,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Dec 2023",
    points: [
      "Pursued a rigorous curriculum in Information Systems, specializing in Business Intelligence systems, with a keen focus on data analytics.",
      "Developed proficiency in programming languages such as Python, SQL, C#, and ASP.NET, applying them in various coursework and projects.",
      "Actively participated in group discussions, seminars, and workshops, providing and receiving constructive feedback to enhance analytical and technical skills.",
      "Collaborated on group projects that simulated real-world business scenarios, enhancing my problem-solving skills and understanding of data-driven decision-making.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };