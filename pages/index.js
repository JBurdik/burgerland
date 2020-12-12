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
import BurgerCard from "../components/layouts/BurgerCard";
import Link from "next/link";

// slick carousel

const Index = () => {
  return (
    <BaseLayout>
      <section className="hero" id="hero">
        <video
          className="herovid"
          src="/hero.mp4"
          loop
          autoPlay
          muted={true}
        ></video>
        <div className="center">
          <h1>
            Vítejte v <span className="secondary-text">BURGERLANDU</span>
          </h1>
          <h3>Svět Burgerů</h3>
          <h2>
            Happy hours 15:00 - 17:00
            <span className="secondary-text"> Kofola k burgeru ZDARMA</span>
          </h2>
          <Link href="tel:735019936">
            <a className="order btn">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              Objednej si burger
            </a>
          </Link>
        </div>
      </section>
      <section id="about">
        <h1>O nás</h1>
        <div className="wrapper">
          <div className="about-image">
            <img src="/images/about.jpg" alt="Burgerland.cz" />
          </div>
          <p>
            Naším cílem je stát se nejlepší „burgrárnou“ v okolí, kam se lidé
            vždy rádi vrátí. Jak toho chceme dosáhnout? Klademe důraz jak na
            kvalitu domácích surovin, příjemné prostředí, tak i na obsluhu a
            dobré pití. Chceme našim zákazníkům poskytnout gurmánský zážitek při
            každé návštěvě naší restaurace. S nadšením a poctivým přístupem Vám
            tyto zážitky dokážeme poskytnout, přijeďte a posuďte sami. Těšíme se
            na Vaši návštěvu.
          </p>
        </div>
      </section>
      <section id="burgers">
        <h1>Burgery</h1>
        <h4>
          Burger (150g) | XXL Burger (300g) 199,- | Menu (Burger + Hranolky)
          155,- | XXL Menu 209,- | Obal 10,-
        </h4>
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
        <section className="jine">
          <h1>Ostatní</h1>
          <div className="card">
            <div className="header">
              <h3>Salát</h3>
              <price>55,-</price>
            </div>
            <span className="ingredients">
              Salátový mix, kuřecí prsa, krutony, domácí zálivka, parmezán
            </span>
            <br />
            <span className="alergens">1,3,5,6,7,8,10,11</span>
          </div>
          <div className="card">
            <div className="header">
              <h3>Hranolky</h3>
              <price>55,-</price>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h3>Batátové hranolky</h3>
              <price>55,-</price>
            </div>
          </div>
          <h3>Suroviny navíc</h3>
          <h5 className="primary">(10,-)</h5>
          <div className="additions">
            <div className="card">
              <div className="header">
                <h3>Slanina</h3>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Chedar</h3>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Karamelizovaná cibulka</h3>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Jalapeňos</h3>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Tatarka</h3>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Kečup</h3>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h3>Domací česnekový dresink</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="drinks">
          <h1>Nápoje</h1>
          <div className="card">
            <div className="header">
              <h3>Kofola plech 0,25l</h3>
              <price>25,-</price>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h3>Coca-Cola ZERO plech 0,25l</h3>
              <price>29,-</price>
            </div>
          </div>
          <h3>Káva a čaj</h3>
          <div className="card">
            <div className="header">
              <h3>Ristretto</h3>
              <price>39,-</price>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h3>Lungo</h3>
              <price>39,-</price>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h3>Caffé latte</h3>
              <price>55,-</price>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h3>Čaj</h3>
              <price>30,-</price>
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h3>Turecká káva</h3>
              <price>30,-</price>
            </div>
          </div>
        </section>
      </section>
      <section id="footer">
        <h1>Kontaktujte nás</h1>
        <div className="grid">
          <div className="center address">
            <FontAwesomeIcon size="3x" icon={faMapMarked}></FontAwesomeIcon>
            <h5>Vladislavova 28, Vysoké Mýto, 566 01</h5>
          </div>
          <div className="center phone">
            <FontAwesomeIcon size="3x" icon={faMobile}></FontAwesomeIcon>
            <h5>+420 735 019 936</h5>
          </div>
          <div className="center mail">
            <FontAwesomeIcon size="3x" icon={faEnvelope}></FontAwesomeIcon>
            <h5>burgerland@demo.com</h5>
          </div>
        </div>

        <div className="grid">
          <div className="center work-hours">
            <FontAwesomeIcon
              className="align-start"
              size="3x"
              icon={faClock}
            ></FontAwesomeIcon>
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
          <div className="center map">
            <FontAwesomeIcon
              className="align-start"
              size="3x"
              icon={faMap}
            ></FontAwesomeIcon>
            <img src="/images/map.png"></img>
          </div>
          <div className="center delivery">
            <FontAwesomeIcon
              className="align-start"
              size="3x"
              icon={faTruck}
            ></FontAwesomeIcon>
            <div className="delivery-zones">
              <span className="zone">
                <h3>Pásmo 1</h3>
                <ul>
                  <li>Vysoké Mýto - město</li>
                </ul>
              </span>
              <span className="zone">
                <h3>Pásmo 2</h3>
                <ul>
                  <li>Vanice, </li>
                  <li>Knířov, </li>
                  <li>Na Vinicích, </li>
                  <li>Sárovec, </li>
                  <li>Jangelec, </li>
                  <li>Slanina, </li>
                  <li>Šnakov</li>
                </ul>
              </span>
              <span className="zone">
                <h3>Pásmo 3</h3>
                <ul>
                  <li>Hrušová, </li>
                  <li>Zámrsk, </li>
                  <li>Vraclav, </li>
                  <li>Sedlec, </li>
                  <li>Domoradice, </li>
                  <li>Svařeň, </li>
                  <li>Brteč, </li>
                  <li>Lhůta, </li>
                  <li>Džbánov, </li>
                  <li>Tisová, </li>
                  <li>Zaháj, </li>
                  <li>Dvořisko </li>
                </ul>
              </span>
              <span className="zone">
                <h3>Pásmo 4</h3>
                <ul>
                  <li>Choceň, </li>
                  <li>Sruby, </li>
                  <li>Dobříkov, </li>
                  <li>Janovičky, </li>
                  <li>Zádolí, </li>
                  <li>Střihanov, </li>
                  <li>Cerekvice nad Loučnou, </li>
                  <li>Záliší,</li>
                  <li>Vračovice,</li>
                  <li>Nořín</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Index;
