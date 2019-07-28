import React from "react";

import Modal from "./Modal/Modal";
import useModal from "./Modal/useModal";

const Header = () => {
  const { isShowing, toggle } = useModal()

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Postly©
          </a>
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
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Write<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Themes
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="nav-link btn btn-primary my-2 my-sm-0"
              onClick={toggle}
            >
              Download
            </button>
          </div>
        </div>
        <Modal isShowing={isShowing} hide={toggle} />
      </nav>
    </header>
  );
};

export default Header;
