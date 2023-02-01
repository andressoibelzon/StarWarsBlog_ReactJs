import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleCard = (props) => {
  const params = useParams();
  // console.log(params.theid);
  const [characters, setCharacters] = useState({});
  const [description, setDescription] = useState({});


  function characterFetch() {
    fetch("https://www.swapi.tech/api/people/" + params.theid)
      .then((res) => res.json())
      .then((data) => setCharacters(data.result.properties))
      .catch((err) => console.error(err));
  }


  function descriptionFetch() {
    fetch("https://www.swapi.tech/api/people/" + params.theid)
      .then((res) => res.json())
      .then((data) => setDescription(data.result))
      .catch((err) => console.error(err));
  }


  useEffect(() => {
    characterFetch();
    descriptionFetch();
  }, []);

  console.log(characters)

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col col-8">
          <div className="card d-flex" style={{ width: "400px" }}>
          <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} alt="Card image cap" />
          </div>
          </div>
          <div className="col col-4">
            <h3>{characters.name}</h3>
            <p>{description.description}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* table */}
      <table class="table container">
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
      <td>{characters.name}</td>
      <td>{characters.birth_year}</td>
      <td>{characters.gender}</td>
      <td>{characters.height}</td>
      <td>{characters.skin_color}</td>
      <td>{characters.eye_color}</td>
    </tr>
  </tbody>
</table>
<div className=" container">
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
</div>
    </>
  );
};
