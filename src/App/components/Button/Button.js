import React from 'react';
import './Button.css'
import PropTypes from 'prop-types'
function Button(props) {
    console.log(props);
    return <div style={{...props.style,backgroundColor:props.bgcolor}} className="Button" onClick={(evt)=>{props.action()}}>{props.title}</div>
}

export default Button;