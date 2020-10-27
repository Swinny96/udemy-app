import React from 'react';
import '../App.css';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid rgba(136, 136, 136, 0.2)',
        margin: '10px',
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