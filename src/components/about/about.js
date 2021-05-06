import React from 'react';
import './about.css';

import Work from './work/work'
import Education from './education/education'

class About extends React.Component {
   render() {
      return (
         <div className="about" id="About">
            <div className="about-title-section">
               <h2 className="about-title">About</h2>
            </div>
            <div className="work-content">
               <Work />
               <Education />
            </div>

         </div>
      );
   }
}

export default About;
