import React from 'react'
import "../styles/productcat.css"
import { useState } from 'react'

function Productcat({title}) {
    const [heading,setheading]=useState(title)
  return (
    <div className='productheading'> ---- {heading} ----</div>
  )
}

export default Productcat