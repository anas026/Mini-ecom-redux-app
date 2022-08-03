import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Cart = () => {
    const products = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const handleremove =(productid) =>{
     dispatch(remove(productid))
    }
    return (
     <div>
        <div className='cartWrapper ' style={{marginTop:'20px'}}>
            {
                products.map(product=>{
                    return (
                    <div className='cartCard'>
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={()=>handleremove(product.id)}>Remove</button>
                    </div>
                )})
            }
        </div>
     </div>
               
    )
}  
               


export default Cart;
