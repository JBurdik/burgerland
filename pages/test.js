import BaseLayout from "../components/layouts/BaseLayout";
import BurgerCard from "../components/layouts/BurgerCard";

const Card = () => {
  return (
    <BaseLayout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="burgers-wrapper">
        <BurgerCard
          burger="Cheeseburger"
          price="139,-"
          image="cheeseburger.jpg"
          ingredients="Vyzrálé Hovězí maso, slanina, extra cheddar, karamelizovaná cibulka, domací dresink, čerstvá zelenina"
          alergens={["1", "3", "7", "10", "11"]}
        />
      </div>
    </BaseLayout>
  );
};

export default Card;
