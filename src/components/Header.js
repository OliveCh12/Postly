import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "./Builder/UserContext";

import Modal from "./Modal/Modal";
import useModal from "./Modal/useModal";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const { isShowing, toggle } = useModal();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Postly©
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/builder"
                  className="nav-link"
                  activeClassName="active"
                >
                  Builder
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/princing"
                  className="nav-link"
                  activeClassName="active"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/themes"
                  className="nav-link"
                  activeClassName="active"
                >
                  Themes
                </NavLink>
              </li>
            </ul>
            {user.firstname ? (
              <button
                type="button"
                className="nav-link btn btn-primary my-2 my-sm-0"
                onClick={toggle}
              >
                {user.firstname}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <Modal isShowing={isShowing} hide={toggle} />
      </nav>
    </header>
  );
};

export default Header;
