import React from "react";
import Element from "./Element";

const MenuBar = (props) => {
  return (
    <ul className="navbar-menu">
      <Element link="#" text={props.text1} />
      <Element link="#" text={props.text2} />
      <Element link="#" text={props.text3} />
    </ul>
  );
}

export default MenuBar;