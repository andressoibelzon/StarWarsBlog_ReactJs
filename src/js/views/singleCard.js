import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleCard = () => {
  const params = useParams()
  console.log(params.theid);
  const [description, setDescription] = useState({})

  function characterFetch() {
    fetch("https://www.swapi.tech/api/people/"+ params.theid )
      .then((res) => res.json())
      .then((data) => setDescription(data.result.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    characterFetch();
  }, []);

  return (
    <>
      <div>{description.gender}</div>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </>
  );
};
