import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './loading.css';
import Lottie from 'react-lottie';
import animationData from '../../lottie/loading.json';


function Sidebar () {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
   };

   return (
      <div className="loading">
         <ScrollAnimation initiallyVisible="True" animateIn="fadeOut" delay="2000" duration="0.5">
            <Lottie 
               options={defaultOptions}
               height={400}
               width={400}
            />
         </ScrollAnimation>
      </div>
   );
}

export default Sidebar;
