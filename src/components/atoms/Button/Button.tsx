import React from 'react'
import './Button.css'

type ButtonPropsType = {
    children : React.ReactNode
    style : string
}

const Button = ({children, style} : ButtonPropsType) => {
  return (
    <button className={style}>{children}</button>
  )
}

export default Button