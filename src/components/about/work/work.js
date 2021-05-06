import React from 'react';
import './work.css';

let experience = [
   {title: "Software Engineer Intern / League", date: "May 2021 - Present"},
   {title: "Software Developer Intern / SAP", date: "Sept 2020 - April 2021"},
   {title: "QA Engineer Intern / Perk Labs", date: "July 2020 - August 2020"},
   {title: "Software Developer / UBC Solar", date: "Sept 2019 - April 2020"},
]

class Work extends React.Component {
   render() {
      return (
         <div className="work">
            <div className="work-title"><h3>Work</h3></div>
            {experience.map(job => {return <div className="job"><h4>{job.title}</h4><h5>{job.date}</h5></div> })} 
         </div>
      );
   }
}

export default Work;
