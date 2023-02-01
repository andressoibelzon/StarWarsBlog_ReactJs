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
    <div className="d-flex flex-column " id="allCards">
      {/* aca empieza el de los personajes */}
      <h5 className="text-danger">Characters</h5>
      <div className="d-flex flex-row ">
        {characters.length > 0 
          ? characters.map((item) => (
              <CardsCharacters
                key={item.uid}
                name={item.name}
                id={item.uid}
              />
            ))
          : null}
      </div>
      {/* aca empieza el de los planetas */}
      <h5 className="text-danger">Planets</h5>
      <div className="d-flex flex-row ">
        {characters.length > 0 
          ? characters.map((item) => (
              <CardsPlanets
                key={item.uid}
                name={item.name}
                id={item.uid}
              />
            ))
          : null}
      </div>
      
      {/* aca empieza el de los vehiculos */}
      <h5 className="text-danger">Vehicles</h5>
      <div className="d-flex flex-row ">
        {characters.length > 0 
          ? characters.map((item) => (
              <CardsVehicles
                key={item.uid}
                name={item.name}
                id={item.uid}
              />
            ))
          : null}
      </div>
    </div>
  );
};
