import React from "react";

const Product = (props) => {
   const image = require(`../img/${props.img.split('/')[2]}`)
   console.log(image.default)
    return (
        <li>
            <a>
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