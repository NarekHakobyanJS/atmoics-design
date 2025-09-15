import React from 'react'

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