import React from 'react';
import './education.css';

// let education = [
//    {name: "University of British Columbia", date: "Expected May 2023", content: "Computer Engineering 3.61/4.00"},
//    {name: "Coursera", date: "May 2021", content: "Computer Engineering 3.61/4.00"},

// ]

class Education extends React.Component {
   render() {
      return (
         <div className="education">
            <h3>Education</h3>
            <div className="education-content">
               <div className="education">
                  <div className="education-header">
                     <h4>University of British Columbia</h4>
                     <h5>Expected May 2023</h5>
                  </div>
                  <h5 className="education-content">Computer Engineering 3.61/4.00</h5>

               </div>
               <div className="education">
                  <div className="education-header">
                     <h4>Coursera</h4>
                     <h5>May 2021</h5>
                  </div>
                  <h5 className="education-content">Deep Learning Specialization (<a href="https://www.coursera.org/account/accomplishments/certificate/A63PN9283EZK">See Certificate</a>) </h5>
               </div>

            </div>
         </div>
      );
   }
}

export default Education;
