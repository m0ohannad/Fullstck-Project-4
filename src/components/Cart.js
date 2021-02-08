import React from "react";
import Button from "./Button";
import Buyer from "./Buyer";

const Cart = ({ orders, checkOut, checkOutAll }) => {
    var totalCount = 0;
    var totalPrice = 0;
    const buyers = orders.map((item) => {
        totalCount += item.count;
        totalPrice += item.price;
        return <Buyer key={item.image} order={item} checkOut={checkOut} />
    });
    return (
        <div className="container">
            <div className="cart">
                <h4>Your Cart</h4>
                <ul>
                    {buyers}
                </ul>
                <div className="total">
                    <div className="left">
                        <p>All items</p>
                    </div>
                    <div className="right">
                        <p>{totalCount}</p>
                        <p>{totalPrice}$</p>
                        <Button text="Check out All" handleClick={() => checkOutAll()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;