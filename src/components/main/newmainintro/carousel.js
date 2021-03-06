import React from 'react';
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";


 export default function Carousel(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
          <div style={{ backgroundColor: '#ccf2f4', height: '100vh', }}>

        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
      );
}
