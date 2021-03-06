import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
    };

    return (
        <div className="Char" style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;