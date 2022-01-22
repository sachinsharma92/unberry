import React from 'react';

export default function Traits(props) {
  return (
    <div className='traits-style'>
      <div className='active-style' style={{background: props.bgColor, width: props.percent, color: props.textColor}}>{props.content}</div>
    </div>
  )
}
