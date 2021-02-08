import React from "react";
// import Items from "../data/store-items.json";
import Product from "./Product";
import Button from "./Button";

const Products = (props) => {
    const { products: items } = props
    const itemsLimit = items.slice(0, props.limit).map((item) => {
        return <Product key={item.image} name={item.name} img={item.image} price={item.price} />
    });

    return (
        <>
            <div className="shop">
                <h3>{props.title}</h3>
                <ul className="container products">
                    {itemsLimit}
                </ul>
                <Button classes="white" text="More products" />
            </div>
        </>
    );
}

export default Products;