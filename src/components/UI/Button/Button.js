import React from 'react'
import './Button.css'

export const Button = (props) => {
    return (
        <div>
            <button className='Button, props.btnType'
            onClick={props.clicked}>
            {props.children}
            </button>
        </div>
    )
}

export default Button;
