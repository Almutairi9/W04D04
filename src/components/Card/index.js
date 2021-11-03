import React,{  useEffect, useState } from "react";
import { useParams } from "react-router";
// import "./style.css";

const Card = () => {

 const id = useParams().id;
  
  const [cards , setCards] = useState([]);
  useEffect(()=> {
      fetch("https://api.pokemontcg.io/v2/cards").then((Response)=>
      Response.json()).then((body)=>{
          console.log(body.data);
          setCards(body.data);
      });

  }, []); 

  const cardd = cards.find((element) => { 
    return Number(id) === element.id;
  })

  return (
    <div className="cards">
             <div>
              <li>{cardd.name}</li>
              <img src={cardd.images.large} alt="Pokemon Cards is here .."/>
            </div>
    </div>
  )

};

export default Card;
