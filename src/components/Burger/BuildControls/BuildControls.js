import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
  
];

const buildControls= (props)=>(

    <div className='BuildControls'>
        <p>Current Price: <strong>$ {props.price.toFixed(2)} </strong> </p>
        {controls.map(
            ctrl=> (<BuildControl key={ctrl.label} 
                                  label={ctrl.label}
                                  
                                  added={()=>props.ingredientAdded(ctrl.type)}
                                  removed={()=>props.ingredientRemove(ctrl.type)} 
                                  disabled={props.disabled[ctrl.type]}/> ))}
        
        {console.log(!props.purchasable)}
        <button className='OrderButton'
                onClick={props.ordered}
                disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;