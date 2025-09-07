
import React from 'react';
import Header from './modules/Header.jsx';
import Section from './modules/Section.jsx';
import DraggableProjects from './modules/DraggableProjects.jsx';
import './App.css';
import './styles/Header.css';
import {MailIcon, GithubIcon,SocialsIcon, LocationIcon, LinkedInIcon} from './modules/Icons.jsx';
import portfolioData from './modules/Data.jsx';
import profileImage from '/src/assets/images/profile.jpg';

function App() {
  const { name, title, email, facebook,instagram, github,linkedin, location, about, skills, experience, projects, education } = portfolioData;
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-200">{name}</h1>
                <h2 className="mt-3 text-lg md:text-xl font-medium tracking-tight text-slate-200">{title}</h2>
                <p className="max-w-xs leading-normal">{location}</p>
              </div>
              <div className="flex-shrink-0 mt-4 sm:mt-0">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-teal-400/20 shadow-lg shadow-teal-500/10"
                />
              </div>
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
                            <div className="pl-8 flex flex-wrap gap-4">
                               <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-300 transition-colors">
                                    <LinkedInIcon className="w-4 h-4" />
                                    LinkedIn
                               </a>
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

