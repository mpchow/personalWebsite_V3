import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './home.css';

let delay = 500
let interval = 150
let speed = 0.5
class Home extends React.Component {
   render() {
      return (
         <div className="home">
            <ScrollAnimation animateIn="fadeIn" animateOnce="True" duration="1.5">
               <h1>Hi, I'm <br/> <span className="name">Matthew Chow</span> 👋🏻</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" animateOnce="True" delay={0 * interval + delay} duration={speed}>
               <h4>Studying Computer Engineering at <a href="https://www.ubc.ca" className="UBC" target="_blank" rel="noopener noreferrer">UBC</a></h4> 
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" animateOnce="True" delay={1 * interval + delay} duration={speed}>
               <h4>Software Engineer Intern at <a href="https://league.com/" className="League" target="_blank" rel="noopener noreferrer">League</a></h4>

            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" animateOnce="True" delay={2 * interval + delay} duration={speed}>
               <h4>Previously at <a href="https://www.sap.com/canada/" className="SAP" target="_blank" rel="noopener noreferrer">SAP</a>, <a href="http://perklabs.io" className="Perk" target="_blank" rel="noopener noreferrer">Perk Labs</a></h4>   
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" animateOnce="True" delay={3 * interval + delay} duration={speed}>
               <h4>Focused on Backend Development and exploring Machine Learning</h4>
            </ScrollAnimation>

         </div>
      );
   }
}

export default Home;
