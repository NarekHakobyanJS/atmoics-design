import React from 'react'
import './Button.css'

type ButtonPropsType = {
    children : React.ReactNode
    style : string,
    onClick? : () => void
}

const Button = ({children, style, onClick} : ButtonPropsType) => {
  return (
    <button onClick={onClick} className={style}>{children}</button>
  )
}

export default Button