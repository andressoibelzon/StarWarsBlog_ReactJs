import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardsCharacters } from "../component/cardsCharacter";
import { CardsPlanets } from "../component/cardsPlanets";
import { CardsVehicles } from "../component/cardsVehicles";
import { Context } from "../store/appContext";


export const AllCards = () => {

	const {store, actions} = useContext(Context);

  return (
    <div className="d-flex flex-column " id="allCards">
      {/* aca empieza el de los personajes */}
      <h5 className="text-danger px-2">Characters</h5>
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
      <h5 className="text-danger px-2">Planets</h5>
      <div className="d-flex flex-row ">
        {store.planetas.length > 0 
          ? store.planetas.map((item) => (
              <CardsPlanets
                key={item.uid}
                name={item.name}
                id={item.uid}
              />
            ))
          : null}
      </div>
      
      {/* aca empieza el de los vehiculos */}
      <h5 className="text-danger px-2">Vehicles</h5>
      <div className="d-flex flex-row ">
        {store.vehiculos.length > 0 
          ? store.vehiculos.map((item) => (
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
