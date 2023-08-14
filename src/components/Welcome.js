import React from 'react'
import Carouselreact from './Carousel'
import Productcat from './Productcat'
import Cardreact from './Card'
import { clothes } from '../data/data'
import { electronics } from '../data/data'

function Welcome() {
  return (
    <div>
      
      <Carouselreact />
      <Productcat title="CLOTHES" />
      <Cardreact prod={clothes} />
      <Productcat title="ELECTRONICS" />
      <Cardreact prod={electronics} />
    </div>
  )
}

export default Welcome