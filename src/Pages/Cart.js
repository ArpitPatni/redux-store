import React from 'react'
import {remove} from "../store/cartSlice"
import { useSelector,useDispatch } from 'react-redux'
const Cart = () => {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.cart)
  const handleRemove=(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h2>Cart Items</h2>
      <div className='cartWrapper'>
        {
          products.map((product)=>(
            <div className='cartCard'>
              <img src={product.image}/>
              <h5>{product.title}</h5>
              <h5>Rs:{product.price}</h5>
              <button onClick={()=>handleRemove(product.id)} className='btn'>Remove</button>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Cart