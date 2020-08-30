import React from 'react';
import './Button.css';

const button = (props)=>{
    console.log(props.btnType);
 return(
    <button 
        onClick={props.clicked}
        
        className ={'Button ' && props.btnType} >{props.children}</button>
 );
    };

export default button;