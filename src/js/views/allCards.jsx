import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardsCharacters } from "../component/cardsCharacter";
import { CardsPlanets } from "../component/cardsPlanets";
import { CardsVehicles } from "../component/cardsVehicles";
import { Context } from "../store/appContext";


export const AllCards = () => {

	const {store, actions} = useContext(Context);
  // console.log(useContext(Context))
  // console.log(store.personajes)

  return (
    <div className="d-flex flex-column " id="allCards">
      {/* aca empieza el de los personajes */}
      <h5 className="text-danger">Characters</h5>
      <div className="d-flex flex-row ">
        {store.personajes.length > 0 
          ? store.personajes.map((item) => (
              <CardsCharacters
                key={item.uid}
                id={item.uid}
                name={item.name}
                
              />
            ))
          : null}
      </div>
      {/* aca empieza el de los planetas */}
      {/* <h5 className="text-danger">Planets</h5>
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
      </div> */}
      
      {/* aca empieza el de los vehiculos */}
      {/* <h5 className="text-danger">Vehicles</h5>
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
      </div> */}
    </div>
  );
};
