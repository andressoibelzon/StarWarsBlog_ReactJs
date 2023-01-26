import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";





export const CardsPlanets = () => {
  return (
    <div className="container my-5">
    <h3 className="text-danger">Planets</h3>
    <div className="card" style={{ width: "400px" }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">
          Gender
        </p>
        <p className="card-text">
          Hair
        </p>
        <p className="card-text">
          Eye-Colors
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
