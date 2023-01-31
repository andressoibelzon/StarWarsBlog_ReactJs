import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CardsCharacters } from "../component/cardsCharacter";
import { CardsPlanets } from "../component/cardsPlanets";
import { CardsVehicles } from "../component/cardsVehicles";

export const AllCards = () => {
  const [characters, setCharacters] = useState({});

  function bringCharacters() {
    // const params = useParams()
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    bringCharacters();
  }, []);
  // console.log(characters);

  return (
    <div className="container">
      <div className="cotainer">
        <h5>Characters</h5>
        {characters.length > 0
          ? characters.map((item) => (
              <CardsCharacters
                key={item.uid}
                name={item.name}
                id={item.uid}
                url={item.url}
              />
            ))
          : null}
      </div>
      <CardsPlanets />
      <CardsVehicles />
    </div>
  );
};
