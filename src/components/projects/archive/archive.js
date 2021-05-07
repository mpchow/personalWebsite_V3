import React from 'react';
import './archive.css';
import ScrollAnimation from 'react-animate-on-scroll';

let projects = [
   {
      name: "Cuetips / nwHacks2021",
      description: "A web app that allows users to transform their typed notes into cue cards!",
      github: "https://github.com/mpchow/Cuetips_nwHacks2021",
      link: "http://www.nwhacks.unifyubc.com",
      pos: 0
   },
   {
      name: "Personal Website V2",
      description: "My unfinished V2 website before I decided to completely overhaul it and make V3 :)",
      github: "https://github.com/mpchow/personalWebsite_V2",
      link: "https://matthewchowv2.netlify.app",
      pos: 1
   },
   {
      name: "Early-Bird",
      description: "A blindingly bright VSCode theme.",
      github: "https://github.com/mpchow/early-bird_vscodeTheme",
      link: "",
      pos: 2
   },
   {
      name: "Jygsaw / DubHacks2020",
      description: "A virtual platform to host small businesses. Schedule video calls with owners for a personalized experience.",
      github: "https://github.com/mpchow/Ecommerce-Marketplace",
      link: "",
      pos: 3
   },
   {
      name: "Autonomous Bot",
      description: "Raspberry Pi powered robot that can follow a line remotely or be controlled by your Android Phone!",
      github: "https://github.com/mpchow/AutonomousRobot-AndroidApp",
      link: "",
      pos: 4
   },
   {
      name: "Expense Tracker",
      description: "Simple full stack app that helps users record their expenses.",
      github: "https://github.com/mpchow/ExpenseTracker",
      link: "",
      pos: 5
   },
   {
      name: "Personal Website V1",
      description: "My original personal website. I've come a long way since then!",
      github: "https://github.com/mpchow/personalWebsite_V1",
      link: "https://matthewchowv1.netlify.app",
      pos: 6
   },
]

let speed = 0.5
let delay = 100
let interval = 150

class Archive extends React.Component {
   render() {
      return (
         <div className="archive">
            <ScrollAnimation animateIn="fadeIn" animateOnce="True" duration="1.5">
               <h3>Archive</h3>
            </ScrollAnimation>
            <div className="archive-content">
               {projects.map(project => {
                  return  <ScrollAnimation animateIn="fadeIn" animateOnce="True" duration={speed} delay={project.pos * interval + delay}>
                              <div className="archive-project">
                                 <div className="archive-project-description">
                                    <div>
                                       <h5>{project.name}</h5>
                                       <p>{project.description}</p>
                                    </div>
                                    <p><a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">Github</a> {project.link && "|"} {project.link && <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View</a>}</p>
                                 </div>
                              </div>
                           </ScrollAnimation>
               })}
            </div>
         </div>
      );
   }
}

export default Archive;
