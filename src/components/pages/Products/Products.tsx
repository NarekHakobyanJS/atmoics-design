import React from 'react'
import './Products.css'
import ProductsCard from '../../organisms/ProductsCard/ProductsCard'
import type { IPorduct } from '../../../shared/types'
import Modal from '../../organisms/Modal/Modal'
import { createPortal } from 'react-dom'

const portal: any = document.getElementById('portal')


type ProductsPropsType = {
  products : IPorduct[]
  addToCart : (item : IPorduct) => void
  open : boolean
}
const Products = ({products, addToCart, open} : ProductsPropsType) => {

  createPortal(<Modal />, portal)

  return (
  <>
        {

          open
          ?
          createPortal(<Modal />, portal)
          :
         ""
        }
        { products.map((product) => <ProductsCard addToCart={addToCart} key={product.id} product={product}/> )}
  </>
  )
}

export default Products