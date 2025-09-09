const portfolioData = {
    name: "Zsombor Zsolt Dér",
    title: "Software Developer",
    email: "zsomborder.dev@gmail.com",
    github: "https://github.com/zsonbi",
    linkedin: "https://www.linkedin.com/in/zsomborder",
    location: "Budapest, Hungary",
    about: "Recent Computer Science BSc graduate from ELTE with a passion for solving complex, large-scale problems. I see challenges as opportunities for growth and actively apply new technologies in my personal and professional projects. My home lab, where I experiment with networking and servers, is a testament to my hands-on approach to learning and development.",
    skills: {
      "Programming Languages": ["C++", "C#", "C", "PHP", "Java", "JavaScript", "Python"],
      "Frameworks & Technologies": ["ASP.NET","Yii", "CodeIgniter", "Avalonia", "Unity", "HTML/CSS", "React"],
      "DevOps & Infrastructure": ["Docker", "CI/CD", "Jenkins", "Linux", "Virtualization", "Networking (Cisco, Mikrotik)", "Nginx"],
      "Databases": ["SQL", "PostgreSQL", "MariaDB"],
      "Testing": ["Unit Tests", "Integration Tests", "Load Tests"],
    },
    experience: [
      {
        role: "DevOps Engineer",
        company: "MPTR Kft.",
        period: "Jul 2024 - Aug 2025",
        descriptionPoints: [
          "Designed, developed, and maintained ASP.NET web applications.",
          "Improved system stability and development process efficiency by implementing Docker, Nginx, and Graylog systems.",
          "Ensured software quality by writing unit, integration, and load tests, successfully identifying and fixing performance issues.",
          "Managed software deployment and operation by writing and managing Docker Compose configurations for multi-service integrations.",
          "Planned and engineered an Avalonia application for displaying images based on a Kübler F5888 encoder position, which will be used in elevators.",
          "Developed an internal ASP.NET MVC portal to manage a custom Android app store, integrating it with a Jenkins pipeline to fully automate the application build and release process.",
          "I independently designed and implemented the backend of a restaurant software using CRUD principles in the ASP.NET framework.",
          "On several occasions, there were need to manage physical hardware, such as setting up a new server, troubleshooting network issues or setting up a complete camera system in a restaurant.",
        ]
      },
      {
        role: "Freelance Project",
        company: "I.V.V. 2000 Kft.",
        period: "Aug 2024 - Sep 2024",
        descriptionPoints: [
            "Independently designed and executed the end-to-end installation of a low-voltage network system."
        ]
      },
      {
        role: "IT Intern",
        company: "Debrecen International Airport",
        period: "Jun 2022 - Jul 2022",
        descriptionPoints: [
            "Contributed to server management and enhanced IT security by installing and configuring Nagios monitoring servers."
        ]
      }
    ],
    projects: [
      {
        name: "Habit Tracker With Car Game (Thesis)",
        description: "A multi-platform application combining daily tasks with gamification (Smashy road inspired car game), built with a client-server architecture.",
        tags: ["Unity", "C#", "API", "Client-Server", "ASP.NET", "Docker", "Unity"],
        link: "https://zsonbi.github.io/Thesis/game/",
        code: "https://github.com/zsonbi/Thesis"
      },
      {
        name: "Bomberman Remake",
        description: "A reimplementation of the classic Bomberman game in Unity, featuring custom gameplay mechanics. It was written as a group project with my university classmates as an assignment.",
        tags: ["Unity", "C#", "Team Project"],
        link: "https://zsonbi.github.io/BomberMan/game/",
        code: "https://github.com/zsonbi/BomberMan"
      },
      {
        name: "Virus Spread Simulation",
        description: "A simulation modeling the spread of diseases in an urban environment for the Szeged Innovation Competition. It has a configurable on startup for city size, inhabitants behaviour, virus properties and can be interacted during runtime as well.",
        tags: ["Simulation", "C#", "Data Modeling", "Unity"],
        code: "https://github.com/zsonbi/Virus-Simulation"
      },
      {
        name: "Docker image for graylog-sidecar",
        description: "A Docker image for Graylog Sidecar, a lightweight configuration management system for log collectors. It simplifies the deployment and management of log collectors in a Dockerized environment, so it is easily deployed in servers or next to services.",
        tags: [ "Docker", "Monitoring", "Agents", "Graylog"],
        code: "https://github.com/zsonbi/graylog-sidecar"
      },
      {
        name: "Docker image for jenkins agents",
        description: "A Docker image for Jenkins agents, designed to streamline the setup of build agents in a Jenkins CI/CD environment. This image comes pre-configured with essential tools and dependencies, making it easy to deploy and scale Jenkins agents as needed.",
        tags: [ "Docker", "Monitoring", "Agents", "Graylog"],
        code: "https://github.com/zsonbi/graylog-sidecar"
      }
    ],
    education: [
       {
        institution: "University of Helsinki",
        degree: "Computer Science BSc (Erasmus)",
        period: "2025"
      },
      {
        institution: "ELTE Faculty of Informatics",
        degree: "Computer Science BSc",
        period: "2022 - 2025"
      },
    ],
};

export default portfolioData;