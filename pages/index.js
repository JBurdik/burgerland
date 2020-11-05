import BaseLayout from "../components/layouts/BaseLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneAlt } from "@fortawesome/pro-light-svg-icons";

const Index = () => {
  return (
    <BaseLayout className="hero">
      <span className="center">
        <h1>
          Vítejte v <span className="secondary-text">BURGERLANDU</span>
        </h1>
        <a href="tel:605589517" className="order btn">
          <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
          Objednej si burger
        </a>
        <h2>
          Happy hours 15:00 - 17:00{" "}
          <span className="secondary-text">Kofola k burgeru ZDARMA</span>
        </h2>
      </span>
    </BaseLayout>
  );
};

export default Index;
