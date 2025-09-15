import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Button from '../../atoms/Button/Button'

const Nav = () => {
  return (
    <nav>
      <ul className='nav-content'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Porducts</NavLink>
        </li>
      </ul>
      <Button style={'go-cart-btn'}>
        Cart
      </Button>
    </nav>
  )
}

export default Nav