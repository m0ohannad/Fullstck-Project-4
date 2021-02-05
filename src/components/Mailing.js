import React from "react";
import img from "../img/mailing-list-img.png";

const Mailing = () => {
    return (
        <div className="container">
            <div className="Mailing">
                <img className="mailing-list-img" src={img} width="31%" alt="mailing-list-img" />
                <div className="form-group">
                    <div className="center">
                        <h3>Sign up for our newsletter and get 10% off your next order.</h3>
                        <input id="mail" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mailing;