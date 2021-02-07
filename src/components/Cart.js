import React from "react";
import Button from "./Button";
import Buyer from "./Buyer";
import image from "../img/item-4.png"

const Cart = (props) => {
    return (
        <div className="container">
            <div className="cart">
                <h4>Your Cart</h4>
                <ul>
                    <Buyer img={image} name="Pastel Pink T-shirt" count="01" price="$68" />
                    <Buyer img={image} name="Pastel Pink T-shirt" count="01" price="$68" />
                    <Buyer img={image} name="Pastel Pink T-shirt" count="01" price="$68" />
                </ul>
                <div className="total">
                    <div className="left">
                        <p>All items</p>
                    </div>
                    <div className="right">
                        <p>{props.counts}</p>
                        <p>{props.prices}</p>
                        <Button text="Check out All" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;