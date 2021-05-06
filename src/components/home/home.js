import React from 'react';
import './home.css';


class Home extends React.Component {
   render() {
      return (
         <div className="home">
            <h1>Hi, I'm <br/> <span className="name">Matthew Chow</span> 👋🏻</h1>
            <h4>Studying Computer Engineering at <a href="https://www.ubc.ca" className="UBC">UBC</a></h4>
            <h4>Software Engineer Intern at <a href="https://league.com/ca/" className="League">League</a></h4>
            <h4>Former intern at <a href="https://www.sap.com/canada/index.html" className="SAP">SAP</a>, <a href="https://www.sap.com/canada/index.html" className="Perk">Perk Labs</a></h4>
            <h4>Focused on Backend Development and exploring Machine Learning</h4>
         </div>
      );
   }
}

export default Home;
