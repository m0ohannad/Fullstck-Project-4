import React from "react";

const Product = (props) => {
    const name = props.img.split('/')[2]
    const image = require(`../img/${name}`)
    return (
        <li>
            <a href={`/details/${name.split('.')[0]}`}>
                <div className="item">
                    <img className="item-img" src={image.default} width="100%" alt={props.name} />
                    <div className="information">
                        <p>{props.name}</p>
                        <p>{props.price}</p>
                    </div>
                </div>
            </a>
        </li>
    );
}

export default Product;