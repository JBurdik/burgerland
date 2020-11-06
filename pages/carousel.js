import BaseLayout from "../components/layouts/BaseLayout";


import Carousel from "react-elastic-carousel";
import Item from "../components/layouts/Item";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/pro-light-svg-icons";

const BurgerMenu = () => {
  return (
    <Carousel itemsToScroll={3} itemsToShow={3} >
      <Item className="carousel-card">
        <img src="/images/baconburger.jpg" alt="Bacon Burger"/>
        <h5>Bacon Burger</h5>
      </Item>
      <Item className="carousel-card">
        <img src="/images/cheeseburger.jpg" alt="Cheese Burger"/>
        <h5>Cheese Burger</h5>
      </Item>
      <Item className="carousel-card">
        <img src="/images/bbqburger.jpg" alt="BBQ Burger"/>
        <h5>BBQ Burger</h5>
      </Item>
      <Item className="carousel-card">
        <img src="/images/vegeburger.jpg" alt="Vege Burger"/>
        <h5>Vege Burger</h5>
      </Item>
      <Item className="carousel-card">
        <img src="/images/butterland.jpg" alt="Butterland Burger"/>
        <h5>Butterland Burger</h5>
      </Item>
    </Carousel>
  );
};

export default BurgerMenu;
