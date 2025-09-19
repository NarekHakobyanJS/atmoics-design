import React, { useEffect, useState } from 'react'

import './Home.css'
import { Slider } from '../../organisms/Slider/Slider'
import type { IPorduct } from '../../../shared/types'

type HomePropsType = {
  products : IPorduct[]
}

const Home = ({products} : HomePropsType) => {
  

  return (
    <div>
      < Slider products={products}/>
    </div>
  )
}

export default Home