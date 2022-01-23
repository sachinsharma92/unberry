import React from 'react';

export default function Traits(props) {
  return (
    <div className={`traits-style ${props.className}`}>
      <div className='active-style' style={{ background: props.bgColor, width: props.percent, color: props.textColor }}>
        <h4 className='title4'>{props.title}</h4>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}
