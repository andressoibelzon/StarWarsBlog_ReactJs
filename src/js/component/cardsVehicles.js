import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext.js";


export const CardsVehicles = (props) => {

  const {store, actions} = useContext(Context);


  return (
    <div className="container my-5">
    <div className="card" style={{ width: "400px" }}>
      <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/vehicles/"+ props.id +".jpg"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* la parte de abajo de los dos botones */}
        <div className="d-flex justify-content-between">
        <Link to={ "/singlecard/vehicle/" + props.id } className="btn btn-outline-primary">
          Learn More!
        </Link>
        {/* buton onClick agrega a favourites, osea que hago un useState aca  */}
        <button onClick={()=>actions.agregarFavs(props.name)} className="btn btn-outline-warning">
          ♡
        </button>
        </div>
        {/* ..... */}
      </div>
    </div>
    </div>
  );
};
