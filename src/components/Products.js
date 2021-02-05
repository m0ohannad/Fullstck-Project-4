import React from "react";
import Items from "../data/store-items.json";
import Product from "./Product";
import Button from "./Button";

const Products = (props) => {
    const items = Items.slice(0, props.limit).map((item) => {

        return <Product key={item.image} name={item.name} img={item.image} price={item.price} />
    });

    return (
        <>
            <div className="shop">
                <h3>{props.title}</h3>
                <ul className="container products">
                    {items}
                </ul>
                <Button classes="white" text="More products" />
            </div>
        </>
    );
}

export default Products;