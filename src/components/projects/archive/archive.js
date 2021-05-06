import React from 'react';
import './archive.css';

let projects = [
   {
      name: "Cuetips",
      description: "",
      github: "https://github.com/mpchow/Cuetips_nwHacks2021"
   },
   {
      name: "Personal Website V2",
      description: "",
      github: ""
   },
   {
      name: "Ecommerce Marketplace",
      description: "",
      github: ""
   },
   {
      name: "Autonomous Bot",
      description: "",
      github: ""
   },
   {
      name: "Expense Tracker",
      description: "",
      github: ""
   },
   {
      name: "Personal Website V1",
      description: "",
      github: ""
   },
   {
      name: "Early-Bird",
      description: "",
      github: ""
   },
]


class Archive extends React.Component {
   render() {
      return (
         <div className="archive">
            <h3>Archive</h3>
            <div className="archive-content">
               {projects.map(project => {
                  return  <div className="archive-project">
                              <div className="archive-project-description">
                                 <div>
                                    <h5>{project.name}</h5>
                                    <h5>{project.description}</h5>
                                 </div>
                                 <h5><a href={project.github} className="project-link">Github</a></h5>
                              </div>
                           </div>
               })}
            </div>
         </div>
      );
   }
}

export default Archive;
