import React from 'react'
import "./index.css"

function Card({img,text}) {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <span>{text}</span>
    </div>
  )
}

export default Card