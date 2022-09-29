import React from 'react';
import "./Square.css"

export default function Square(props) {
  return (
    <div
    onClick={props.onClick}
     className='square'>

        <h5>{props.value}</h5>
      
    </div>
  )
}
