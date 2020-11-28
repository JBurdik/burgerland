import React from "react";
// import Link from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faInfo,
  faHamburger,
  faCommentsAlt,
} from "@fortawesome/pro-light-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <li className="logo">
          <Link to="hero" smooth={true} offset={-100}>
            <img
              src="/images/logo-white-outline-sezam.svg"
              alt="BurgerLand.cz"
            />
          </Link>
        </li>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
            >
              <a className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faInfo} />
                <span className="link-text">O nás</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="burgers"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              <a className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faHamburger} />
                <span className="link-text">Burgery</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="footer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              <a className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faCommentsAlt} />
                <span className="link-text">Kontakt</span>
              </a>
            </Link>
          </li>
          <li className="social nav-item">
            <Link href="#">
              <a className="nav-link">
                <FontAwesomeIcon className="socials" icon={faFacebook} />
              </a>
            </Link>
          </li>
          <li className="social nav-item">
            <Link href="#">
              <a className="nav-link">
                <FontAwesomeIcon className="socials" icon={faInstagram} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
