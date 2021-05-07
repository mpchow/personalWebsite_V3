import React from 'react';
import './archive.css';
import ScrollAnimation from 'react-animate-on-scroll';

let projects = [
   {
      name: "Cuetips",
      description: "",
      github: "https://github.com/mpchow/Cuetips_nwHacks2021",
      pos: 0
   },
   {
      name: "Personal Website V2",
      description: "",
      github: "",
      pos: 1
   },
   {
      name: "Ecommerce Marketplace",
      description: "",
      github: "",
      pos: 2
   },
   {
      name: "Autonomous Bot",
      description: "",
      github: "",
      pos: 3
   },
   {
      name: "Expense Tracker",
      description: "",
      github: "",
      pos: 4
   },
   {
      name: "Personal Website V1",
      description: "",
      github: "",
      pos: 5
   },
   {
      name: "Early-Bird",
      description: "",
      github: "",
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
                                    <p><a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">Github</a></p>
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
