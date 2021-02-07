import React from "react";
import { NavLink } from 'react-router-dom';

const Element = (props) => {
  return (
    <li>
      <NavLink exact to={`/${props.link}`} className="navbar-item">{props.text}</NavLink>
    </li>
  );
}

export default Element;