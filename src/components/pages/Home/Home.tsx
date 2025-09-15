import React, { useEffect, useState } from 'react'

import './Home.css'
const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home