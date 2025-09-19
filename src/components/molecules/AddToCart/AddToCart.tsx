import React from 'react'
import Button from '../../atoms/Button/Button'
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


type AddToCartPropsType = {
  addToCartOrg : () => void
}

const AddToCart = ({addToCartOrg} : AddToCartPropsType) => {
  return (
    <div>
        <FaPlus />
        <Button onClick={addToCartOrg} style={'a'}>
          Add Cart
        </Button>
    </div>
  )
}

export default AddToCart