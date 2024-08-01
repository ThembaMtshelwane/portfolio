import React, { useEffect, useState } from "react";
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
  return (
    // <div className="logos">
    //   <div className="logos-slide">
    //     <img src="./logos/3m.svg" />
    //     <img src="./logos/barstool-store.svg" />
    //     <img src="./logos/budweiser.svg" />
    //     <img src="./logos/buzzfeed.svg" />
    //     <img src="./logos/forbes.svg" />
    //     <img src="./logos/macys.svg" />
    //     <img src="./logos/menshealth.svg" />
    //     <img src="./logos/mrbeast.svg" />
    //   </div>

    //   <div className="logos-slide">
    //     <img src="./logos/3m.svg" />
    //     <img src="./logos/barstool-store.svg" />
    //     <img src="./logos/budweiser.svg" />
    //     <img src="./logos/buzzfeed.svg" />
    //     <img src="./logos/forbes.svg" />
    //     <img src="./logos/macys.svg" />
    //     <img src="./logos/menshealth.svg" />
    //     <img src="./logos/mrbeast.svg" />
    //   </div>
    // </div>
    <div className="logos">
      <div className="logos-slide">
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
      </div>
      <div className="logos-slide">
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
      </div>
    </div>
  );
};
export default Carousel;
