import React from "react";
import { NavLink } from 'react-router-dom';

const Element = (props) => {
  return (
    <li>
      <a exact to={`/${props.link}`} className="navbar-item">{props.text}</a>
    </li>
  );
}

export default Element;