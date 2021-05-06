import React from 'react';
import { Link } from 'react-scroll';
import './sidebar.css';


class Sidebar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <Link activeClass="active" to="About" spy={true} smooth={true} duration={1200}><h5 className="navigation">About</h5></Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={1200}><h5 className="navigation">Projects</h5></Link>
            <Link activeClass="active" to="Footer" spy={true} smooth={true} duration={1200}><h5 className="navigation">Contact</h5></Link>
            {/* <a href=""><h5>Resume</h5></a> */}
         </div>
      );
   }
}

export default Sidebar;
