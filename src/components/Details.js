import React from "react";
import Color from "./Color";
import Button from "./Button";

const Details = (props) => {
    return (
        <div className="container">
            <div className="details">
                <div className="column">
                    <img className="small-img" src={props.img} width="100%" alt={props.name} />
                    <img className="small-img" src={props.img} width="100%" alt={props.name} />
                    <img className="small-img" src={props.img} width="100%" alt={props.name} />
                </div>
                <img className="details-img" src={props.img} width="100%" alt={props.name} />
                <div className="column content">
                    <div className="text">
                        <h2>{props.price}</h2>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="choice">
                        <h5>Color: </h5><p>{props.selected}</p>
                        <div className="colors">
                            <Color color="#D07071" name="red" />
                            <Color color="#7074D0" name="blue" />
                            <Color color="#333333" name="black" />
                        </div>
                    </div><br/>
                    <div className="add">
                        <input id="number" type="number" />
                        <Button text="Add to cart" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;