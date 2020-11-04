import React from 'react';
import '../App.css';

const userInput = (props) => {
    const inputStyle = {
        padding: '16px',
    };

    return <input 
        className="UserInput"
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName}
        placeholder="Username" />;
};

export default userInput;