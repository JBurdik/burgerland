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

// slick carousel

const Index = () => {
  return (
    <BaseLayout>
      <section className="hero">
        <span className="center">
          <h1>
            Vítejte v <span className="secondary-text">BURGERLANDU</span>
          </h1>
          <a href="tel:605589517" className="order btn">
            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            Objednej si burger
          </a>
          <h2>
            Happy hours 15:00 - 17:00
            <span className="secondary-text">Kofola k burgeru ZDARMA</span>
          </h2>
        </span>
      </section>
      <section id="photos">
        <h1>Naše Burgery</h1>
        <BurgerMenu />
      </section>
      <section id="burgers">
        <h1>Burgery</h1>
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
