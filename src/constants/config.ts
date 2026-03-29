type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mohit Kumar | MERN Stack Developer",
    fullName: "Mohit Kumar",
 email: "mohit82352@gmail.com",
  },
 hero: {
  name: "Mohit Kumar",
  p: [
    "MERN Stack Developer",
    "Building full-stack web apps with React, Node.js & MongoDB",
  ],
},

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
  p: "Introduction",
  h2: "Overview.",
  content: `I'm a passionate MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js.
I build responsive web applications and REST APIs, and I am continuously learning and improving my development skills.`,
},
    experience: {
  p: "My journey",
  h2: "Learning & Projects",
},
    feedbacks: {
    p: "What people say",
    h2: "Testimonials",
  },

   works: {
    p: "My projects",
    h2: "Projects",
    content: `These projects showcase my skills as a MERN Stack Developer through real-world applications.

I have developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js, including features like authentication, CRUD operations, and API integration.

Each project reflects my ability to solve problems, build scalable solutions, and create responsive, user-friendly interfaces.`,
  },
},
};
