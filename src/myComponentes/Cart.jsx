import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {

    const items = useSelector(state=>state)
    console.log("cart",items)
  return (
    <div>items: 2  Total Price:420</div>
  )
}
