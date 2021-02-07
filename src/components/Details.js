import React from "react";
import Color from "./Color";
import Button from "./Button";

class Details extends React.Component {
    render() {
        const name = window.location.pathname.split('/')[2]
        const image = require(`../img/${name}.png`).default
        // console.log(name);
        // console.log(this.props);
        const item = this.props.items.find(product => product.image.includes(name))
        // console.log(item)
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
                            <input id="number" type="number" placeholder="01" />
                            <Button text="Add to cart" onClick={this.props.updateOrder(item)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;