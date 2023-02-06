import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleCardCharacter = (props) => {

  const params = useParams()

  const {store, actions} = useContext(Context);
    // console.log(useContext(Context))

  useEffect(()=>{
    actions.obtenerPersonajesIndividuales(params.theid)
  },[]) 

  // console.log(store.informacionPersonaje.properties)

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col col-8">
          <h3>{store.informacionPersonaje.properties?.name}</h3>
          <div className="card d-flex" style={{ width: "400px" }}>
          <div className="col col-4">
          </div>
          <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/" + params.theid + ".jpg"} alt="Card image cap" />
          </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* table */}
      <table className="table container text-center">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Height</th>
      <th scope="col">Skin Color</th>
      <th scope="col">Eye Color</th>
    </tr>
  <tbody>
    <tr>
      <td>{store.informacionPersonaje.properties?.name}</td>
      <td>{store.informacionPersonaje.properties?.birth_year}</td>
      <td>{store.informacionPersonaje.properties?.gender}</td>
      <td>{store.informacionPersonaje.properties?.height}</td>
      <td>{store.informacionPersonaje.properties?.skin_color}</td>
      <td>{store.informacionPersonaje.properties?.eye_color}</td>
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
