import React from "react";

const BurgerCard = (props) => {
  const { burger, price, alergens, image, children } = props;
  const ingredients = props.ingredients ? props.ingredients.split(", ") : undefined;
  return (
    <div
      className="burger-card"
      style={{ backgroundImage: `url(/images/${image})` }}
    >
      <h1>
        {burger} <span>{price}</span>
      </h1>
      <ul className="list ingredients">
        {ingredients ? ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        )) : <li key={1}>Žádné ingredience</li>}
      </ul>
      <ul className="list ">
        A:
        {alergens ? alergens.map((alergen, idx) => (
          <li key={idx}>{alergen}</li>
        )) : <li key={1}>Bez alergenů</li>}
      </ul>
      {children}
    </div>
  );
};

export default BurgerCard;
