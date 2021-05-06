import React from 'react';
import './home.css';


class Home extends React.Component {
   render() {
      return (
         <div className="home">
            <h1>Hi, I'm <br/> <span className="name">Matthew Chow</span> 👋🏻</h1>
            <h4>Studying Computer Engineering at <a href="https://www.ubc.ca" className="UBC" target="_blank" rel="noopener noreferrer">UBC</a></h4>
            <h4>Software Engineer Intern at <a href="https://league.com/" className="League" target="_blank" rel="noopener noreferrer">League</a></h4>
            <h4>Previously at <a href="https://www.sap.com/canada/" className="SAP" target="_blank" rel="noopener noreferrer">SAP</a>, <a href="http://perklabs.io" className="Perk" target="_blank" rel="noopener noreferrer">Perk Labs</a></h4>
            <h4>Focused on Backend Development and exploring Machine Learning</h4>
         </div>
      );
   }
}

export default Home;
