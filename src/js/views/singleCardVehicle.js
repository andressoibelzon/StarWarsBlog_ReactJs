import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleCardVehicle = (props) => {

  const params = useParams()

  const {store, actions} = useContext(Context);
    // console.log(useContext(Context))

  useEffect(()=>{
    actions.obtenerVehiculosIndividuales(params.theid)
  },[]) 

  // console.log(store.informacionPersonaje.properties)

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col col-8">
          <h3>{store.informacionVehiculo.properties?.name}</h3>
          <div className="card d-flex" style={{ width: "400px" }}>
          <div className="col col-4">
          </div>
          <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/vehicles/" + params.theid + ".jpg"} alt="Card image cap" />
          </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* table */}
      <table className="table container text-center">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope="col">Crew</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Cost in Credits</th>
      <th scope="col">Length</th>
    </tr>
  <tbody>
    <tr>
      <td>{store.informacionVehiculo.properties?.name}</td>
      <td>{store.informacionVehiculo.properties?.model}</td>
      <td>{store.informacionVehiculo.properties?.crew}</td>
      <td>{store.informacionVehiculo.properties?.manufacturer}</td>
      <td>{store.informacionVehiculo.properties?.cost_in_credits}</td>
      <td>{store.informacionVehiculo.properties?.length}</td>
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
