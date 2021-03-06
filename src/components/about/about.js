import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './about.css';

import Work from './work/work'
import Education from './education/education'

class About extends React.Component {
   render() {
      return (
         <div className="about" id="About">
            <ScrollAnimation animateIn="slideInUp" animateOnce="True" duration="0.5">
               <div className="about-title-section">
                  <h2 className="about-title">About</h2>
               </div>
            </ScrollAnimation>
            <div className="work-content">
               <Work />
               <Education />
            </div>

         </div>
      );
   }
}

export default About;
