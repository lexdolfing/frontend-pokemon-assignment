import React from 'react';
import './Button.css'

export default function Button({direction, onClick, disabled}) {


    return (
        <button onClick={onClick} disabled={disabled}>
            {direction}
        </button>
    )
}