import React, { Component, useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";


export const CardsVehicles = (props) => {
  const [vehiclesID, setvehiclesID] = useState({});

  const params = useParams()
  console.log(params.theid);
  const [description, setDescription] = useState({})

  function vehiclesFetch() {
    fetch("https://www.swapi.tech/api/vehicles/"+ props.id )
      .then((res) => res.json())
      .then((data) => setDescription(data.result.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    vehiclesFetch();
  }, []);
  console.log(description)

  return (
    <div className="container my-5">
    <div className="card" style={{ width: "400px" }}>
      <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/vehicles/"+ props.id +".jpg"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{description.name}</h5>
        <p className="card-text">
          Model: {description.model}
        </p>
        <p className="card-text">
          Manufacturer: {description.manufacturer}
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
