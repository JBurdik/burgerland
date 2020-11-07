import BaseLayout from "../components/layouts/BaseLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarked,
  faMobile,
  faEnvelope,
  faClock,
  faTruck,
  faMap,
} from "@fortawesome/pro-light-svg-icons";
import BurgerMenu from "./carousel";
import BurgerCard from "../components/layouts/BurgerCard";

// slick carousel

const Index = () => {
  return (
    <BaseLayout>
      <section className="hero">
        <div className="center">
          <h1>
            Vítejte v <span className="secondary-text">BURGERLANDU</span>
          </h1>
          <h3>Svět Burgerů</h3>
          <h2>
            Happy hours 15:00 - 17:00
            <span className="secondary-text"> Kofola k burgeru ZDARMA</span>
          </h2>
          <a href="tel:605589517" className="order btn">
            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            Objednej si burger
          </a>
        </div>
      </section>
      <section id="about">
        <h1>O nás</h1>
        <p>
          Naším cílem je stát se nejlepší „burgrárnou“ v okolí, kam se lidé vždy
          rádi vrátí. Jak toho chceme dosáhnout? Klademe důraz jak na kvalitu
          domácích surovin, příjemné prostředí, tak i na obsluhu a dobré pití.
          Chceme našim zákazníkům poskytnout gurmánský zážitek při každé
          návštěvě naší restaurace. S nadšením a poctivým přístupem Vám tyto
          zážitky dokážeme poskytnout, přijeďte a posuďte sami. Těšíme se na
          Vaši návštěvu.
        </p>
      </section>
      <section id="photos">
        <h1>Naše Burgery</h1>
        <BurgerMenu />
      </section>
      <section id="burgers">
        <h1>Burgery</h1>
        <div className="burgers-wrapper">
          <BurgerCard
            burger="Cheeseburger"
            price="139,-"
            image="cheeseburger.jpg"
            ingredients="Vyzrálé Hovězí maso, slanina, extra cheddar, karamelizovaná cibulka, domací dresink, čerstvá zelenina"
            alergens={["1", "3", "7", "10", "11"]}
          />
          <BurgerCard
            burger="Bacon Burger"
            price="139,-"
            image="baconburger.jpg"
            ingredients="Vyzrálé hovězí maso, extra slanina, cheddar, karamelizovaná cibulka, domácí dresink, čerstvá zelenina"
            alergens={["1", "3", "7", "10", "11"]}
          />
          <BurgerCard
            burger="BBQ Burger"
            price="139,-"
            image="bbqburger.jpg"
            ingredients="Vyzrálé hovězí maso, slanina, cheddar, karamelizovaná cibulka, BBQ omáčka, čerstvá zelenina"
            alergens={["1", "3", "7", "10", "11"]}
          />
          <BurgerCard
            burger="Vege Burger"
            price="139,-"
            image="vegeburger.jpg"
            ingredients="Vyzálý sýr, karamelizovaná cibulka, brusinky, domácí dresink s vlašskými ořechy, čerstvá zelenina"
            alergens={["1", "3", "7", "8", "10", "11"]}
          />
          <BurgerCard
            burger="Butterland Burger"
            price="149,-"
            image="butterland.jpg"
            ingredients="Vyzrálé hovězí maso, slanina, cheddar, karamelizovaná cibulka, arašídový dresink, čerstvá zelenina"
            alergens={["1", "3", "5", "7", "10", "11"]}
          />
        </div>
      </section>
      <section id="footer">
        <h1>Kontaktujte nás</h1>
        <div className="grid">
          <div className="center address">
            <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>
            <h5>Vladislavova 28, Vysoké Mýto, 566 01</h5>
          </div>
          <div className="center phone">
            <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
            <h5>+420 735 019 936</h5>
          </div>
          <div className="center mail">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <h5>burgerland@demo.com</h5>
          </div>
          <div className="center work-hours">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            <div className="schedule">
              <span>Pondelí</span>
              <span>Zavřeno</span>
              <span>Úterý</span>
              <span>11:00 - 20:00</span>
              <span>Středa</span>
              <span>11:00 - 20:00</span>
              <span>Čtvrtek</span>
              <span>11:00 - 20:00</span>
              <span>Pátek</span>
              <span>11:00 - 20:00</span>
              <span>Sobota</span>
              <span>11:00 - 20:00</span>
              <span>Neděle</span>
              <span>11:00 - 20:00</span>
            </div>
          </div>
          <div className="center map"></div>
          <div className="center delivery">
            <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Index;
