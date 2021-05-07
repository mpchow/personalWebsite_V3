import React from 'react';
import './education.css';
import ScrollAnimation from 'react-animate-on-scroll';

let speed = 0.5
let delay = 700
let interval = 150

class Education extends React.Component {
   render() {
      return (
         <div className="education">
            <ScrollAnimation animateIn="fadeIn" animateOnce="True" duration="1.5" delay="500">
               <h3>Education</h3>
            </ScrollAnimation>

            <div className="education-content">

               <ScrollAnimation animateIn="fadeInUp" animateOnce="True" duration={speed} delay={0 * interval + delay}>
                  <div className="education">
                     <div className="education-header">
                        <h4>University of British Columbia</h4>
                        <h5>Expected May 2023</h5>
                     </div>
                     <h5 className="education-content">Computer Engineering 3.61/4.00</h5>

                  </div>

               </ScrollAnimation>

               <ScrollAnimation animateIn="fadeInUp" animateOnce="True" duration={speed} delay={1 * interval + delay}>
                  <div className="education">
                     <div className="education-header">
                        <h4>Coursera</h4>
                        <h5>May 2021</h5>
                     </div>
                     <h5 className="education-content">Deep Learning Specialization (<a href="https://www.coursera.org/account/accomplishments/certificate/A63PN9283EZK" className="certificate">See Certificate</a>) </h5>
                  </div>
               </ScrollAnimation>

            </div>
         </div>
      );
   }
}

export default Education;
