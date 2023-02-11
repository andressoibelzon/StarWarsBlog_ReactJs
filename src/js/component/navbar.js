import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container ">
        <Link to="/" className="navbar-brand" href="#">
          Star Wars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* empieza el dropdown */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="btn btn-primary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>

              <ul className="dropdown-menu">
                {/* map de los elementos que tengo en favoritos */}
                {store.favs.map((item, index) => {
                  return (
                  <li key={index}
                  className="px-2"
                  >
                    {item.nombre}
                    <button
                className="btn btn-danger mx-3"
                onClick={() => actions.deleteFavs(item.nombre)}
              >
                x
              </button>
                  </li>);
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
