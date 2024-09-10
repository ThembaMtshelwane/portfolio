import React, { useEffect, useState } from "react";
import "./carousel.css";

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
