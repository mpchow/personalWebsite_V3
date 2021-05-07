import React from 'react';
import './projects.css';
import ScrollAnimation from 'react-animate-on-scroll';

import Featured from './featured/featured'
import Archive from './archive/archive'


class Projects extends React.Component {
   render() {
      return (
         <div className="projects" id="Projects">
            <div className="projects-title-section">
               <ScrollAnimation animateIn="slideInUp" animateOnce="True" duration="0.5">
                  <h2 className="projects-title">Projects</h2>
               </ScrollAnimation>
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
