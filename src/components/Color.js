import React, { useState } from "react";

const colors = [
    { name: "Red", color: "#D07071" },
    { name: "Blue", color: "#7074D0" },
    { name: "Black", color: "#333333" }
];

const Color = (props) => {
    const [color, setColor] = useState("Red");
    return (
        <>
            <p>{color}</p>
            {colors.map(c => (
                <label style={{ background: c.color }} htmlFor={c.name} >
                    <input type="radio" name="colors" value={c.name} checked={color === c.name} onChange={e => setColor(e.currentTarget.value)} />
                </label>
            ))}
        </>
    );
}

export default Color;