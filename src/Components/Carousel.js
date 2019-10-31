import React, { Component } from 'react'
 
import B1 from '../images/brands/1.svg'
import B2 from '../images/brands/2.svg'
import B3 from '../images/brands/3.svg'
import B4 from '../images/brands/4.svg'
import B5 from '../images/brands/5.svg'

export class Carousel extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              slide:0,
//              slideIndex:0,
//         }
//     }

//     showSlide(){
//        const slides = document.querySelector('.slide');
//         for(let i=0; i <  slides.length; i++){

//             this.setState({
//                 slideIndex: this.state.slideIndex + 1
//             });

//   if (this.slideIndex > this.slides.length) {this.slideIndex = 1}
//   this.slides[this.slideIndex-1].style.display = "block";
//   setTimeout(this.showSlides, 2000);
//         }
//     }
    
    render() {
   
        return (
            < >
                  <div className="slide-container">
            <img src={B1} alt="" className="slide"/>  
              <img src={B2} alt="" className="slide"/>  
              <img src={B4} alt="" className="slide"/>  
              <img src={B3} alt="" className="slide"/>  
              <img src={B5} alt="" className="slide"/>  
              <img src={B1} alt="" className="slide"/>  
              <img src={B2} alt="" className="slide"/>  
              <img src={B4} alt="" className="slide"/>  
              <img src={B3} alt="" className="slide"/>  
              <img src={B5} alt="" className="slide"/> 
            </div>
            </ >
        )
    }
}

export default Carousel
