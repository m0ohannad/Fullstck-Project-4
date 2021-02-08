import React from "react";
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import { NavLink } from 'react-router-dom';
import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/" className="logo"><img src={logo} width="35px" alt="logo" /></NavLink>
      <MenuBar text1="Home" text2="Collection" text3="Contact" />
      <NavLink exact to="/cart" className="right"><img src={cart} width="17px" alt="cart" /> Cart</NavLink>
    </header>
  );
}

export default Header;