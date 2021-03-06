import React from 'react'
import './Backdrop.css'

 const Backdrop = (props) => {
    return (
        <div>
            {props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null}
        </div>
    )
}

export default Backdrop
