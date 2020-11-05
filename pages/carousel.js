import BaseLayout from "../components/layouts/BaseLayout";


import Carousel from "react-elastic-carousel";
import Item from "../components/layouts/Item";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/pro-light-svg-icons";

// slick carousel

const CarouselPage = () => {
  return (
    <BaseLayout>
    <Carousel>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Carousel>

    </BaseLayout>
  );
};

export default CarouselPage;
