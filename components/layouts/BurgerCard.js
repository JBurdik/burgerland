import React from "react";

const BurgerCard = (props) => {
  const { burger, price, alergens, image, children } = props;
  if(props.ingredients) {
    const ingredients = props.ingredients.split(", ");
  }
  return (
    <div className="burger-card" style={{backgroundImage: `url(/images/${image})`}}>
      <h1>{burger} <span>{price}</span></h1>
      <ul className="list ingredients">
        {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
      </ul>
      <ul className="list ">
        A:
        {alergens.map((alergen, idx) => (
          <li key={idx}>{alergen}</li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default BurgerCard;
