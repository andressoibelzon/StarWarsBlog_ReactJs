import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleCardPlanet = (props) => {

  const params = useParams()

  const {store, actions} = useContext(Context);
    // console.log(useContext(Context))

  useEffect(()=>{
    actions.obtenerPlanetasIndividuales(params.theid)
  },[]) 

  // console.log(store.informacionPlaneta.properties)

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col col-8">
          <h3>{store.informacionPlaneta.properties?.name}</h3>
          <div className="card d-flex" style={{ width: "400px" }}>
          <div className="col col-4">
          </div>
          <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} alt="Card image cap" />
          </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* table */}
      <table className="table container text-center">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Diameter</th>
      <th scope="col">Rotation Period</th>
      <th scope="col">Gravity</th>
      <th scope="col">Population</th>
      <th scope="col">Climate</th>
    </tr>
  <tbody>
    <tr>
      <td>{store.informacionPlaneta.properties?.name}</td>
      <td>{store.informacionPlaneta.properties?.diameter}</td>
      <td>{store.informacionPlaneta.properties?.rotation_period}</td>
      <td>{store.informacionPlaneta.properties?.gravity}</td>
      <td>{store.informacionPlaneta.properties?.population}</td>
      <td>{store.informacionPlaneta.properties?.climate}</td>
    </tr>
  </tbody>
</table> 
<div className=" container">
      <Link to="/" className="btn btn-outline-primary">
        Go Back
      </Link>
</div>
    </>
  );
};
