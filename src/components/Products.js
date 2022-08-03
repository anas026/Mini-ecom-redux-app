import React, { useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import Loading from './Loading';
const Products = () => {
    let dispatch = useDispatch()
    const [products,setProducts] = useState([])
    const [loading,setloading] = useState(false)
    useEffect(() => {
       const fetchProducts = async() =>{
        setloading(true)
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        
        console.log(data)
       setProducts(data)
       setloading(false)
       }
       fetchProducts()
    }, []);
    const handleadd = (product) =>{
     dispatch(add(product))
    }
    return (

       <> 
        {loading ? <Loading/>:
        <div className='productsWrapper'>
              
            {
               
                products.map((product)=>{
                return <div className='card' key={product.id}>
                   <img src={product.image} alt="Image is not available"/>
                   <h4>{product.title}</h4>
                   <h5>${product.price}</h5>
                   <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
                </div>
                })
            
            }
        </div>
}
        </>
    );
    
}

export default Products;
