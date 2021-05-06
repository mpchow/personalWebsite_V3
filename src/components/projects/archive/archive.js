import React from 'react';
import './archive.css';

let projects = [
   {
      name: "Cuetips",
      description: "",
      github: "https://github.com/mpchow/Cuetips_nwHacks2021"
   },
   {
      name: "",
      description: "",
      github: ""
   },
   {
      name: "",
      description: "",
      github: ""
   },
   {
      name: "",
      description: "",
      github: ""
   },
   {
      name: "",
      description: "",
      github: ""
   },
   {
      name: "",
      description: "",
      github: ""
   },
   {
      name: "",
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
                                 <h4>{project.name}</h4>
                                 <h5>{project.description}</h5>
                              </div>
                              <h5><a href={project.github}>Github</a></h5>
                           </div>
               })}
            </div>
         </div>
      );
   }
}

export default Archive;
