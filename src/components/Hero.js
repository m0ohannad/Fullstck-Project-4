import React from "react";
import img from "../img/hero.png";
import Button from "./Button";

const Hero = (props) => {
    return (
        <div className="container">
            <div className="hero">
                <img className="hero-img" src={img} width="50%" alt="hero-img" />
                <div className="text">
                    <div className="center">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ultrices magna mauris pellentesque dignissim ante varius diam elit.</h4>
                        <Button text="our products" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;