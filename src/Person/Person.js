import React from 'react';
import Radium from 'radium';

const person = (props) => {
    const inputStyle = {
        border: '2px solid rgba(136, 136, 136, 0.2)',
        margin: '10px',
        padding: '16px',
    };

    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            margin: '0 auto',
        }
    };

    return (
    <div className="Person" style={style}>
    <p onClick={props.click}>My name is {props.name} and I am {props.age} years old </p>
    <p>{props.children}</p>
    <input 
    style={inputStyle}
    type="text" 
    onChange={props.changed} 
    value={props.name} 
    className="UserInput"/>
    </div>
    )
};

export default Radium (person);