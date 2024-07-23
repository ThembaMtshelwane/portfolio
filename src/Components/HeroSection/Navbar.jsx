import { useState } from "react";
import "./navbar.css";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => setToggle(!toggle);

  return (
    <nav>
      <ul className="mobile-navbar">
        <li>
          <a href="#hero">Logo</a>
        </li>
        {toggle ? (
          <li onClick={handleClick} className="menu-icon">
            <MdMenu />
          </li>
        ) : (
          <ul className="nav-links">
            <li className="close-icon" onClick={handleClick}>
              <IoClose />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        )}
        <ul className="desktop-nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#technologies">Skiils</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
