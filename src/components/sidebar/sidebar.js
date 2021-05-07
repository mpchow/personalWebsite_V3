import React from 'react';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import './sidebar.css';

let interval = 150
let delay = 1200
let speed = 0.5

class Sidebar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <ScrollAnimation animateIn="fadeInRight" animateOnce="True" delay={0 * interval + delay} duration={speed}>
               <Link activeClass="active" to="About" spy={true} smooth={true} duration={1200}>
                  <h5 className="navigation">About</h5>
               </Link>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={1 * interval + delay} animateOnce="True" duration={speed}>
               <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={1200}><h5 className="navigation">Projects</h5></Link>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={2 * interval + delay} animateOnce="True" duration={speed}> 
               <Link activeClass="active" to="Footer" spy={true} smooth={true} duration={1200}><h5 className="navigation">Contact</h5></Link>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={3 * interval + delay} animateOnce="True" duration={speed}>
               <a href="/resume" target="_blank" rel="noopener noreferrer"><h5 className="navigation">Resume</h5></a>
            </ScrollAnimation>
         </div>
      );
   }
}

export default Sidebar;
