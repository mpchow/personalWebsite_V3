import React from 'react';
import './work.css';
import ScrollAnimation from 'react-animate-on-scroll';

let experience = [
   {title: "Software Engineer Intern / League", date: "May 2021 - Present", pos: 0},
   {title: "Software Developer Intern / SAP", date: "Sept 2020 - April 2021", pos: 1},
   {title: "Software & QA Engineer Intern / Perk Labs", date: "July 2020 - August 2020", pos: 2},
   {title: "Software Developer / UBC Solar", date: "Sept 2019 - April 2020", pos: 3},
]

let speed = 0.5
let delay = 700
let interval = 150

class Work extends React.Component {
   render() {
      return (
         <div className="work">
            <ScrollAnimation animateIn="fadeIn" animateOnce="True" duration="1.5" delay="500">
               <div className="work-title"><h3>Work</h3></div>
            </ScrollAnimation>
            {experience.map(job => {
               return <ScrollAnimation animateIn="fadeInUp" animateOnce="True" duration={speed} delay={job.pos * interval + delay}>
                        <div className="job">
                           <h4>{job.title}</h4>
                           <h5>{job.date}</h5>
                        </div>
                     </ScrollAnimation> })} 
         </div>
      );
   }
}

export default Work;
