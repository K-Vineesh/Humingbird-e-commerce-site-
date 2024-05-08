import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Announcement() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

    
    const  texts=[
        "FLAT 30% OFF, ON YOUR FIRST ORDER :]",
        "FLAT 50% OFF, ON SELECT COLLECTIONS :)",

        "SUBSCRIBE TO OUR NEWSLETTER FOR EXCLUSIVE DEALS :)"
      ]
  
  return (
    <Slider {...settings} style={{overflow:"hidden"}}>
      {texts.map((text, index) => (
        <div key={index}>
          <div id="offer-nav">
            <p style={{ margin: "0" }}>{text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Announcement;
