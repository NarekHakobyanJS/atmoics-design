import React, { useEffect, useState } from 'react'

import './Home.css'
import { Slider } from '../../organisms/Slider/Slider'


const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  return (
    <div>
      < Slider products={products}/>
    </div>
  )
}

export default Home