import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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
];

const services: TService[] = [
  {
    title: "Frontend Developer (React.js)",
    icon: web,
  },
  {
    title: "Backend Developer (Node.js, Express)",
    icon: backend,

  },
  {
    title: "Database Developer (MongoDB)",
    icon: mobile,
  },
  {
    title: "Full Stack MERN Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "MERN Stack Developer",
    companyName: "Personal Projects",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Built full-stack applications using MongoDB, Express.js, React, and Node.js",
      "Developed REST APIs and connected frontend with backend",
      "Implemented authentication using JWT",
      "Created responsive UI using Tailwind CSS",
    ],
  },
  {
    title: "Task Manager App",
    companyName: "Project",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Created CRUD-based task manager using HTML, CSS, JavaScript",
      "Added task creation, deletion, and update features",
      "Deployed project using GitHub Pages",
    ],
  },
  {
    title: "React Todo App",
    companyName: "Project",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built dynamic Todo app using React.js",
      "Managed state using hooks",
      "Designed responsive UI with CSS",
    ],
  },
  {
    title: "Birthday Wish App",
    companyName: "Personal Project",
    icon: javascript,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built interactive birthday wish app using HTML, CSS, JavaScript",
      "Added animations and user-friendly UI",
      "Created personalized birthday messages",
      "Deployed project online",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Built a Task Manager App with full CRUD functionality and responsive UI.",
    name: "Task Manager App",
    designation: "Project",
    company: "Personal",
    image: "https://via.placeholder.com/150",
  },
  {
    testimonial:
      "Developed a React Todo App using hooks and component-based architecture.",
    name: "React Todo App",
    designation: "Project",
    company: "Personal",
    image: "https://via.placeholder.com/150",
  },
  {
    testimonial:
      "Created a Birthday Wish App with animations and interactive UI.",
    name: "Birthday Wish App",
    designation: "Project",
    company: "Personal",
    image: "https://via.placeholder.com/150",
  },
];

const projects: TProject[] = [
  {
    name: "Task Manager App",
    description:
      "A full-stack task manager application with CRUD functionality, allowing users to create, update, and delete tasks. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient"
      },
      {
        name: "css",
        color: "green-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient"
      },
    ],
    image: carrent,
    sourceCodeLink: "https://mohit823.github.io/Todo-App/",
  },

  {
    name: "React Todo App",
    description:
      "A simple and responsive Todo List application built using React.js that allows users to add, delete, and manage daily tasks efficiently with real-time updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // make sure you change this to your actual todo image and import it from ../assets
    sourceCodeLink: "https://react-task-manager-mk.netlify.app/", // apna repo link daalna
  },
  {
    name: "Birthday Wish App",
    description:
      "A simple and interactive birthday wish web app built using HTML, CSS, and JavaScript, featuring animations and personalized messages for users.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // (optional: baad me change kar sakte ho)
    sourceCodeLink: "https://69c25ce15f3f7824446e6f9a--willowy-basbousa-ee7b38.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
