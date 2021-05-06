import React from 'react';
import './resume.css';
import resume from './MatthewChow_Resume.pdf'

class Resume extends React.Component {
   render() {
      return (
         <div className="resume">
            <embed src={resume} type="application/pdf" class="resume"/>
         </div>
      );
   }
}

export default Resume;
