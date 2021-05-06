import React from 'react';
import './projects.css';

import Featured from './featured/featured'
import Archive from './archive/archive'


class Projects extends React.Component {
   render() {
      return (
         <div className="projects" id="Projects">
            <div className="projects-title-section">
               <h2 className="projects-title">Projects</h2>
            </div>
            <div className="projects-content">
               <Featured />
               <Archive />
            </div>
         </div>
      );
   }
}

export default Projects;
