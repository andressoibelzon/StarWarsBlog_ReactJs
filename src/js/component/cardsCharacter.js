import React, { Component, useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";

export const CardsCharacters = (props) => {
const [charactersID, setCharactersID] = useState();

const params = useParams()
  console.log(params.theid);



  return (
    <div className="container my-5">
      <div>Soy un personaje</div>
    {/* <div className="card d-flex" style={{ width: "400px" }}>
      <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
        Gender: {description.gender}
        </p>
        <p className="card-text">
          Hair-Color: {description.hair_color}
        </p>
        <p className="card-text">
          Eye-Colors: {description.eye_color}
        </p> */}
        {/* la parte de abajo de los dos botones */}
        {/* <div className="d-flex justify-content-between">
        <Link to={"/singlecard/" + props.id} className="btn btn-outline-primary">
          Learn More!
        </Link> */}
        {/* buton onClick agrega a favourites, osea que hago un useState aca  */}
        {/* <button className="btn btn-outline-warning">
          ♡
        </button>
        </div> */}
        {/* ..... */}
      {/* </div>
    </div> */}
    </div>
  );
};
