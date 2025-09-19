import React from 'react'
import './Products.css'
import ProductsCard from '../../organisms/ProductsCard/ProductsCard'
import type { IPorduct } from '../../../shared/types'

type ProductsPropsType = {
  products : IPorduct[]
}
const Products = ({products} : ProductsPropsType) => {
  return (
    <div>

      <div className="products-items">
        {
          products.map((product) => <ProductsCard key={product.id} product={product}/> )
        }
      </div>
    </div>
  )
}

export default Products