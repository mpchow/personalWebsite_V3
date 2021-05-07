import React from 'react';
import './footer.css';


class Footer extends React.Component {
   render() {
      return (
         <div className="footer" id="Footer">
               <h3>Contact</h3>
               <div className="contacts">
                  <a href="https://www.linkedin.com/in/matthewpchow/" target="_blank" rel="noopener noreferrer"><h6>LinkedIn</h6></a>
                  <a href="https://github.com/mpchow" target="_blank" rel="noopener noreferrer"><h6>Github</h6></a>
                  <a href="mailto:mattchow918@gmail.com" target="_blank" rel="noopener noreferrer"><h6>Email</h6></a>
                  <a href="https://www.instagram.com/m_7cp/" target="_blank" rel="noopener noreferrer"><h6>Instagram</h6></a>
               </div>
               <h6>Designed & Built with 💙 by Matthew Chow | ©2020</h6>
         </div>
      );
   }
}

export default Footer;
