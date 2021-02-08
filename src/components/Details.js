import React from "react";
import Color from "./Color";
import Button from "./Button";

const Details = ({ items, updateOrder }) => {
    const name = window.location.pathname.split('/')[2]
    const image = require(`../img/${name}.png`).default
    const item = items.find(product => product.image.includes(name))
    var count = 1;
    return (
        <div className="container">
            <div className="details">
                <div className="imgs">
                    <div className="cover">
                        <img className="small-img zoom1" src={image} alt={item.name} />
                    </div>
                    <div className="cover">
                        <img className="small-img zoom2" src={image} alt={item.name} />
                    </div>
                    <div className="cover">
                        <img className="small-img zoom3" src={image} alt={item.name} />
                    </div>
                </div>
                <img className="details-img" src={image} width="100%" alt={item.image} />
                <div className="column content">
                    <div className="text">
                        <h2>{item.price}</h2>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="choice">
                        <h5>Color: </h5>
                        <div className="colors">
                            <Color />
                        </div>
                    </div><br />
                    <div className="add">
                        <input id="number" type="number" onChange={e => count = Number(e.target.value)} placeholder="01" min="01" defaultValue="01" />
                        <Button text="Add to cart" handleClick={() => updateOrder(item, count)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;