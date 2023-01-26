import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardsCharacters } from "./cardsCharacter";
import { CardsPlanets } from "./cardsPlanets";
import { CardsVehicles } from "./cardsVehicles";





export const AllCards = () => {
  return (
    <div className="container">
      <CardsCharacters />
      <CardsPlanets />
      <CardsVehicles />
    </div>
  );
};
