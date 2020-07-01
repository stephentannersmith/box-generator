import React, { useState } from 'react';

const ColorForm = (props) => {
    // hold state of color 
    const [color, setColor] = useState("")
    
    const handleSubmit = (e) => {
        // preventing page load 
        e.preventDefault();
        props.onNewBox( color )
        console.log("box color chosen")
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Color: </label>
                <input type="text" onChange={ (e) => setColor( e.target.value )} value={ color }></input>
                <input type="submit" value="Pick a Color"></input>
            </div>
        </form>
    )

}

export default ColorForm;