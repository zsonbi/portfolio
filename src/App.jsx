
import React from 'react';
import Header from './modules/Header.jsx';
import Section from './modules/Section.jsx';
import DraggableProjects from './modules/DraggableProjects.jsx';

// --- SVG Icons (as React Components) ---
const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const PhoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.9c0 4.7 2.7 5.8 5.5 6.1-.6.5-1 1.4-1 2.8V21"></path></svg>
);
const ExternalLinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const ChevronLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const LocationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const SocialsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


// --- Data ---
const portfolioData = {
    name: "Zsombor Zsolt Dér",
    title: "Software Developer",
    email: "zsomborder@gmail.com",
    phone: "+36 30 307 8390",
    github: "https://github.com/zsonbi",
    location: "Budapest, Hungary",
    about: "Recent Computer Science BSc graduate from ELTE with a passion for solving complex, large-scale problems. I see challenges as opportunities for growth and actively apply new technologies in my personal and professional projects. My home lab, where I experiment with networking and servers, is a testament to my hands-on approach to learning and development.",
    skills: {
      "Programming Languages": ["C++", "C#", "C", "PHP", "Java", "JavaScript", "Python"],
      "Frameworks & Technologies": ["ASP.NET", "Unity", "HTML/CSS", "React"],
      "DevOps & Infrastructure": ["Docker", "CI/CD", "Linux", "Virtualization", "Networking (Cisco)", "Nginx"],
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
          "Integrated a Kübler F5888 encoder into a C# application with dynamic image switching based on position data."
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
        name: "Habit Builder Game (Thesis)",
        description: "A multi-platform application combining daily tasks with gamification, built with a client-server architecture.",
        tags: ["Unity", "C#", "API", "Client-Server"],
        link: "https://zsonbi.github.io/Thesis/game/"
      },
      {
        name: "Bomberman Remake",
        description: "A team-based reimplementation of the classic Bomberman game in Unity, featuring custom gameplay mechanics.",
        tags: ["Unity", "C#", "Team Project", "GameDev"]
      },
      {
        name: "Virus Spread Simulation",
        description: "A simulation modeling the spread of diseases in an urban environment for the Szeged Innovation Competition.",
        tags: ["Simulation", "C++", "Data Modeling"]
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


function App() {
  const { name, title, email, phone, github, location, about, skills, experience, projects, education } = portfolioData;
  const [copyText, setCopyText] = React.useState('Copy');

  const handleCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
          document.execCommand('copy');
          setCopyText('Copied!');
          setTimeout(() => setCopyText('Copy'), 2000);
      } catch (err) {
          console.error('Failed to copy: ', err);
      }
      document.body.removeChild(textArea);
  };

  return (
    <>
      <Header />

      <div className="bg-slate-900 text-slate-400 min-h-screen font-sans leading-relaxed">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-12">
          
          {/* --- Intro Section --- */}
          <section id="home" className="mb-16 md:mb-20 scroll-mt-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-200">{name}</h1>
            <h2 className="mt-3 text-lg md:text-xl font-medium tracking-tight text-slate-200">{title}</h2>
            <p className="mt-4 max-w-xs leading-normal">{location}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                <MailIcon className="w-5 h-5"/>
                {email}
              </a>
              <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                <PhoneIcon className="w-5 h-5"/>
                {phone}
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                <GithubIcon className="w-5 h-5"/>
                GitHub
              </a>
            </div>
          </section>

          <main>
            {/* --- About Section --- */}
            <Section title="About" id="about">
              <p className="text-slate-300 max-w-3xl mx-auto text-left sm:text-center">{about}</p>
            </Section>

            {/* --- Skills Section --- */}
            <Section title="Skills" id="skills">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-slate-800/50 p-6 rounded-lg shadow-lg hover:shadow-teal-500/10 transition-shadow">
                    <h3 className="font-medium text-slate-200 mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map(skill => (
                        <div key={skill} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            
            {/* --- Experience Section --- */}
            <Section title="Experience" id="experience">
              <div className="space-y-12">
                {experience.map(job => (
                  <div key={job.company}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="text-lg font-medium text-slate-200">{job.role} · {job.company}</h3>
                      <p className="text-sm font-mono text-slate-500 mt-1 sm:mt-0">{job.period}</p>
                    </div>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-slate-300">
                        {job.descriptionPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* --- Projects Section --- */}
            <Section title="Projects" id="projects">
              <DraggableProjects projects={projects} />
            </Section>

            {/* --- Education Section --- */}
            <Section title="Education" id="education">
               <div className="space-y-4">
                 {education.map(edu => (
                    <div key={edu.institution} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="font-medium text-slate-200">{edu.degree} · {edu.institution}</h3>
                        <p className="text-sm font-mono text-slate-500 mt-1 sm:mt-0">{edu.period}</p>
                    </div>
                 ))}
               </div>
            </Section>

            {/* --- Contact Section --- */}
            <Section title="Contact" id="contact">
                <div className="max-w-3xl mx-auto">
                    <p className="text-center text-slate-300 mb-8">
                       Got a stellar project idea or have a question? I'd love to hear from you. I'm currently open to new opportunities and collaborations. Let's build something great together!
                    </p>
                    <div className="space-y-4">
                        {/* Email Card */}
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <MailIcon className="w-5 h-5 text-teal-300 mr-3"/>
                                <h3 className="text-md font-bold text-slate-200">E-mail</h3>
                            </div>
                            <div className="flex justify-between items-center pl-8">
                                <span className="font-mono text-sm text-slate-300">{email}</span>
                                <button onClick={handleCopy} className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1 rounded-md transition-colors w-16 text-center">
                                    {copyText}
                                </button>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <LocationIcon className="w-5 h-5 text-teal-300 mr-3"/>
                                <h3 className="text-md font-bold text-slate-200">Location</h3>
                            </div>
                            <div className="pl-8">
                                <span className="font-mono text-sm text-slate-300">{location}</span>
                                <p className="text-xs text-slate-500 mt-1">Available for remote work worldwide</p>
                            </div>
                        </div>

                        {/* Social Media Card */}
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <SocialsIcon className="w-5 h-5 text-teal-300 mr-3"/>
                                <h3 className="text-md font-bold text-slate-200">Social Media</h3>
                            </div>
                            <div className="pl-8 flex space-x-4">
                               <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-300 transition-colors">
                                    <GithubIcon className="w-4 h-4" />
                                    GitHub
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

          </main>
        </div>
      </div>
    </>
  );
}

export default App;

