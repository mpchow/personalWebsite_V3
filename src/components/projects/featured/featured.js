import React from 'react';
import './featured.css';
import ScrollAnimation from 'react-animate-on-scroll';


import Pilldex from '../../../images/Pilldex.svg'
import ImageStash from '../../../images/ImageStash.svg'
import Foex from '../../../images/Foex.svg'
import Currensee from '../../../images/Currensee.svg'


let projects = [
   {  
      name: "ImageStash", 
      image: ImageStash, 
      description: "An image repository to allow users to store their images. Login with your Google account and easily manage your images.", 
      tools: "S3 | Express | React | MongoDB | OAuth2.0",
      github: "https://github.com/mpchow/Image-Stash", 
      link: "",
      pos: 1
   },
   {
      name: "Pilldex / 4th Place in SWE Year" ,
      image: Pilldex, 
      description: "A centralized pill management app with that dynamically adapts reminders to user's habits. Be in the loop with what pills to take today.", 
      tools: "React Native | Express | MongoDB | Jest | EC2",
      github: "https://github.com/mpchow/pilldex", 
      link: "",
      pos: 0
   },
   {
      name: "Currensee", 
      image: Currensee, 
      description: "A currency visualizer that allows users to analyze historical conversion rates. You can also quickly calculate the current amount from one currency to another.", 
      tools: "React | Exchange Rates API",
      github: "https://github.com/mpchow/CurrenSee", 
      link: "https://currensee.netlify.app/",
      pos: 0
   },
   {
      name: "Foex / nwHacks2020 Top 35/145", 
      image: Foex, 
      description: "A expiry date tracker that aims to mitigate food waste. You take a picture with the app and it will automatically recognize the food object and give an estimated expiry date.", 
      tools: "Java | Azure Computer Vision API",
      github: "https://github.com/mpchow/FOEX_nwHacks2020", 
      link: "",
      pos: 0
   }
]

let speed = 0.5
let delay = 200
let interval = 150

class Featured extends React.Component {
   render() {
      return (
         <div className="featured">
            <ScrollAnimation animateIn="fadeIn" animateOnce="True" duration="1.5" delay="500">
               <h3>Featured</h3>
            </ScrollAnimation>
            {projects.map(project =>  {
               return   <ScrollAnimation animateIn="fadeInUp" animateOnce="True" duration={speed} delay={project.pos * interval + delay}>
                           <div className="project">
                              <img src={project.image} alt=""/>
                              <div className= "project-description">
                                 <div>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                 </div>
                                 <p>{project.tools}</p>

                                 <p className="project-links">
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">Github</a> {project.link && "|"}  {project.link && <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View</a>}
                                 </p> 
                              </div> 
                           </div>

                        </ScrollAnimation>  })}
         </div>
      );
   }
}

export default Featured;
