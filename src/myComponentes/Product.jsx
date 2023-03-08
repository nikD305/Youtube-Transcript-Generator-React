import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem,filter } from '../redux/slices/cartSlices'
export const Product = (props) => {
    const dispatch = useDispatch()
      return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
    <img className="card-img-top" src={props.product.image} alt={props.productName} />
    <div className="card-body">
      <h5 class="card-title">{props.product.productName}</h5>
      <p class="card-text">Rs. {props.product.price}/-</p>
      <button


onClick={(e)=>dispatch(addItem({name: props.product.productName, price:props.product.price }))}
        className="btn btn-primary"
      >
        Add to cart
      </button>

      
      <button 
        onClick={(e)=>{
          dispatch(filter({index:props.index}))
        }}
      >Delete</button>
    </div>
  </div>

  )
}
