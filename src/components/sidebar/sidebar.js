import React from 'react';
import './sidebar.css';


class Sidebar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <a href=""><h5>About</h5></a>
            <a href=""><h5>Projects</h5></a>
            <a href=""><h5>Contact</h5></a>
            <a href=""><h5>Resume</h5></a>
         </div>
      );
   }
}

export default Sidebar;
