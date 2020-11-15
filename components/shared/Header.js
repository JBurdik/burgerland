import React from "react";
// import Link from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHomeAlt } from "@fortawesome/pro-light-svg-icons";
import { faHamburger } from "@fortawesome/pro-light-svg-icons";
import { faCommentsAlt } from "@fortawesome/pro-light-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <li className="logo">
          <img src="/images/logo-white-outline-sezam.svg" alt="BurgerLand.cz" />
        </li>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="hero" activeClass="active" smooth={true} offset={-100}>
              <a className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faHomeAlt} />
                <span className="link-text">Domů</span>
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
