import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";



export const CardsPlanets = (props) => {
  const [planetsID, setPlanetsID] = useState({});

  const params = useParams()
  console.log(params.theid);
  const [description, setDescription] = useState({})

  function planetsFetch() {
    fetch("https://www.swapi.tech/api/planets/"+ props.id )
      .then((res) => res.json())
      .then((data) => setDescription(data.result.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    planetsFetch();
  }, []);
  // console.log(description)

  return (
    <div className="container my-5">
    <div className="card" style={{ width: "400px" }}>
      <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/planets/"+ props.id +".jpg"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{description.name}</h5>
        <p className="card-text">
          Population: {description.population}
        </p>
        <p className="card-text">
          Terrain: {description.terrain}
        </p>
        {/* la parte de abajo de los dos botones */}
        <div className="d-flex justify-content-between">
        <Link to="/singlecard" className="btn btn-outline-primary">
          Learn More!
        </Link>
        {/* buton onClick agrega a favourites, osea que hago un useState aca  */}
        <button className="btn btn-outline-warning">
          ♡
        </button>
        </div>
        {/* ..... */}
      </div>
    </div>
    </div>
  );
};
