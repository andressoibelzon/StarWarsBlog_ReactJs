import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleCard = () => {
  return (
    <>
      <div>SingleCard</div>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </>
  );
};
