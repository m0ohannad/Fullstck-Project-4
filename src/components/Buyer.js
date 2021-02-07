import React from "react";
import Button from "./Button";

const Buyer = (props) => {
    return (
        <li className="buyer" >
            <img className="buyer-img" src={props.img} height="80px" alt={props.name} />
            <p>{props.name}</p>
            <p>{props.count}</p>            
            <p>{props.price}</p>
            <Button classes="white" text="Check out" />
        </li>
    );
}

export default Buyer;