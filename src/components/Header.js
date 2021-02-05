import React from "react";
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import { NavLink } from 'react-router-dom';
import MenuBar from "./MenuBar";
import Element from "./Element";

const  Header = () => {
    return (
      <header>
            <a exact to="/" className="logo"><img src={logo} width="35px" alt="logo" /></a>
            <MenuBar text1="Home" text2="Collection" text3="Contact" />
            <a exact to="/" className="right"><img src={cart} width="17px" alt="cart" /> Cart</a>
      </header>
    );
}

export default Header;