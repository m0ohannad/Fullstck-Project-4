import React from "react";
import Button from "./Button";

const Buyer = (props) => {
    const order = props.order;
    const name = order.image.split('/')[2]
    const image = require(`../img/${name}`)
    return (
        <li className="buyer" >
            <img className="buyer-img" src={image.default} height="80px" alt={order.name} />
            <p>{order.name}</p>
            <p>{order.count}</p>            
            <p>{order.price.toFixed(2)}$</p>
            <Button classes="white" text="Check out" handleClick={() => props.checkOut(order)}/>
        </li>
    );
}

export default Buyer;