import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";





export const Cards = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/singlecard" className="btn btn-primary">
          Learn More!
        </Link>
        <a href="#" className="btn btn-primary">
          ♡
        </a>
      </div>
    </div>
  );
};
