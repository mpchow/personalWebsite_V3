import React from 'react';
import './featured.css';


import Pilldex from '../../../images/Pilldex.svg'
import ImageStash from '../../../images/ImageStash.svg'
import Foex from '../../../images/Foex.svg'
import Currensee from '../../../images/Currensee.svg'


let projects = [
   {  
      name: "ImageStash", 
      image: ImageStash, 
      description: "An image repository to allow users to store their images. Login with your Google account and easily manage your images.", 
      tools: "AWS Express React MongoDB",
      github: "https://github.com/mpchow/Image-Stash", 
      link: ""
   },
   {
      name: "Pilldex",
      image: Pilldex, 
      description: "A centralized pill management app with that dynamically adapts reminders based on your habits. Be in the loop with what pills you take today.", 
      tools: "",
      github: "https://github.com/mpchow/pilldex", 
      link: ""
   },
   {
      name: "Currensee", 
      image: Currensee, 
      description: "A currency visualizer that allows users to analyze historical conversion rates. You can also quickly calculate the current amount from one currency to another.", 
      tools: "",
      github: "https://github.com/mpchow/CurrenSee", 
      link: "https://currensee.netlify.app/"
   },
   {
      name: "Foex", 
      image: Foex, 
      description: "A expiry date tracker that aims to mitigate food waste. You take a picture with the app and it will automatically recognize the food object and give an estimated expiry date.", 
      tools: "",
      github: "https://github.com/mpchow/FOEX_nwHacks2020", 
      link: ""
   }
]

class Featured extends React.Component {
   render() {
      return (
         <div className="featured">
            <h3>Featured</h3>
            {projects.map(project =>  {
               return   <div className="project">
                           <img src={project.image} alt=""/>
                           <div className= "project-description">
                              <div>
                                 <h4>{project.name}</h4>
                                 <p>{project.description}</p>
                              </div>
                              <p>{project.tools}</p>

                              <p className="project-links">
                                 <a href={project.github} className="project-link">Github</a> {project.link && "|"}  {project.link && <a href={project.link} className="project-link">View</a>}
                              </p> 
                           </div> 
                        </div>  })}
         </div>
      );
   }
}

export default Featured;
