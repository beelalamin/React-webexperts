import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import B1 from '../images/brands/1.svg'
import B2 from '../images/brands/2.svg'
import B3 from '../images/brands/3.svg'
import B4 from '../images/brands/4.svg'
import B5 from '../images/brands/5.svg'
 
export default class Brands extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };
    return (
        <div className="slide-container">
        <h2>Our Clients</h2>
      <Slider {...settings}>
                 
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
          
      </Slider>
      </div>
    );
  }
}