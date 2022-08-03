import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCart } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const items = useSelector((state)=>state.cart);
    return (
        <div style={{display:'flex',alignItems:'center',}}>
          <span>Digitli</span>
          <Link to='/' className='navLink'>Home</Link>
          <Link to='/cart' className='navLink'>Cart</Link>
          <span className='cartCount'> <i className="fa-solid fa-cart-shopping" style={{color:'#764abc'}}></i><span style={{color:'#764abc',position: 'relative',top:'-9px'}}>{items.length}</span></span>
          
         
        </div>
    );
}

export default Navbar;
