import React from 'react'
import type { IPorduct } from '../../../shared/types'
import AddToCart from '../../molecules/AddToCart/AddToCart'

type ProductsCardPropsTpye = {
    product : IPorduct
}
const ProductsCard = ({product} : ProductsCardPropsTpye) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <img width={150} src={product.image} />
      <AddToCart />
    </div>
  )
}

export default ProductsCard