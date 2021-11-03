import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import "./style.css";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards")
      .then((Response) => Response.json())
      .then((body) => {
        console.log(body.data);
        setCards(body.data);
      });
  }, []);

  return (
    <div className="cards">
      {cards.length ? (
        <ul>
          {cards.map((cardd, i) => (
            <div key={i}>
              <li>{cardd.name}</li>
              <img src={cardd.images.large} alt="Pokemon Cards is here .."/>
            </div>
          ))}
        </ul>
      ) : (
        <h1>Loading ... </h1> 
      )}
    </div>
  );
};
export default Cards;
