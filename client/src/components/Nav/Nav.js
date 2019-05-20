import React, { Component } from "react";
import Button from "../Button/Button"
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav(props){
    return (

      <nav class="navbar navbar-light" style={{backgroundColor: "white"}}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
  
          <Link
          to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/battle"
          className={window.location.pathname === "/battle" ? "nav-link active" : "nav-link"}>
          Battle
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/character"
          className={window.location.pathname === "/character" ? "nav-link active" : "nav-link"}>
          Character
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/inventory"
          className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
          Inventory
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/town"
          className={window.location.pathname === "/town" ? "nav-link active" : "nav-link"}>
          Town
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/quest"
          className={window.location.pathname === "/quest" ? "nav-link active" : "nav-link"}>
          Quest
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/shop"
          className={window.location.pathname === "/shop" ? "nav-link active" : "nav-link"}>
          Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link
          to="/stats"
          className={window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}>
          Stats
          </Link>
        </li>
      </ul>
      </nav>
    );
}

export default Nav;
