import React from "react";

const Color = (props) => {
    return (
        <label style={{background: props.color}} for={props.name} ><input type="radio" name="color" value={props.name}/></label>
    );
}

export default Color;