import React from "react";
import Cart from '../components/Cart'

const CartPage = (props) => {
    const { orders, checkOut, checkOutAll } = props
    return (
        <Cart orders={orders} checkOut={checkOut} checkOutAll={checkOutAll} counts="03" prices="$320" />
    );
}

export default CartPage;