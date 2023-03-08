import { useSelector } from "react-redux";
import React from 'react'
import { Showcheck } from "./Showcheck";
export const Test = () => {

    const items = useSelector((state)=>state)
    // console.log(items.car.length)
  return (
    <div>
      {
        items.car.map(item=>{
            return item.name
        })
      } 
    </div>
  )
}
