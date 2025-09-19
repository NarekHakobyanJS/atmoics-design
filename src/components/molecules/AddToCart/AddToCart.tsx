import React from 'react'
import Button from '../../atoms/Button/Button'
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const AddToCart = () => {
  return (
    <div>
        <FaPlus />
        <Button style={'a'}>
          <NavLink to={''}>
          Add To Cart
          </NavLink>
        </Button>
    </div>
  )
}

export default AddToCart