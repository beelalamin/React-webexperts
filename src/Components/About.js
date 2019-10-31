import React from 'react'
import img from '../images/About.svg'
import btn from '../images/About-btn.svg'


export default function About() {
    return (
        < > <div className="about">
            <img src={img} alt=""/>
          

        <div className="about-text">
            <h4>Know About UiExpert</h4>
            <p>I always follow professional Workflow and provide you best service with resealable costs.</p>
            
            <h4>watch our video</h4>
            <img src={btn} alt="button" className="about-btn"/>

            {/* <svg class="about-btn">
  <path  src={btn} />
</svg> */}
        </div>
        </div>


        </ >
    )
}
