import React from 'react';
import '../App.css';

const outputStyle = {
    padding: '16px',
    display: 'block',
    margin: '10px auto',
};

const userOutput = (props) => {
    return (
        <div style={outputStyle} className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>I hope I'll be overwritten!</p>
        </div>
    );
};

export default userOutput;