import React from 'react';
import "./navbar.css";
import { RiPlayListAddFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
export const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b><RiPlayListAddFill />&nbsp;todo</b>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
              </li>

              {!isLoggedIn ? (
                <>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/signup">SignUp</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/signin">SignIn</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item mx-2">
                  <button className="nav-link active btn-nav" onClick={handleLogout}>Log Out</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
