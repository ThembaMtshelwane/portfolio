import React from "react";
import "./carousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiChakraui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",

    swipeToSlide: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <FaHtml5 />
      </div>
      <div>
        <IoLogoCss3 />
      </div>
      <div>
        <IoLogoJavascript />
      </div>
      <div>
        <SiTypescript />
      </div>
      <div>
        <FaReact />
      </div>
      <div>
        <RiNextjsFill />
      </div>
      <div>
        <IoLogoFirebase />
      </div>
      <div>
        <SiChakraui />
      </div>
    </Slider>
  );
};
export default Carousel;
