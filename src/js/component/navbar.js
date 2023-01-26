import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container ">
    <Link to="/" class="navbar-brand" href="#">Star Wars</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* empieza el dropdown */}
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="btn btn-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favourites
          </a>
          
          <ul class="dropdown-menu">
            {/* map de los elementos que tengo en favoritos */}
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  	);
};
