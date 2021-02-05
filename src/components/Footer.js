import React from "react";
import MenuBar from "./MenuBar";
import Element from "./Element";


const Footer = () => {
  return (
    <footer>
      <MenuBar text1="About" text2="Customer Care" text3="Instagram" />
      <Element className="right" link="#" text="© Pretend Store" />
    </footer>
  );
}

export default Footer;