import React, { useState } from 'react'
import type { IPorduct } from '../../../shared/types'
import AddToCart from '../../molecules/AddToCart/AddToCart'

type ProductsCardPropsTpye = {
    product : IPorduct
    addToCart : (item : IPorduct) => void
}
const ProductsCard = ({product, addToCart} : ProductsCardPropsTpye) => {

  const addToCartOrg = () => {
    addToCart(product)
  }
  return (
    <div>
      <h3>{product.title}</h3>
      <img width={150} src={product.image} />
      <AddToCart addToCartOrg={addToCartOrg}/>
    </div>
  )
}

export default ProductsCard