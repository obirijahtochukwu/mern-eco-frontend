import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

export default function Bra({_id, img, title, price, user, handleDetail, addToCart}) {

  const users = useGlobalContext();
  const [cart] = users.carts
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const id = cart.find(item => item._id === _id);
    if (id) {
      setInCart(true);
    }
  }, 
  [inCart, cart]);

  return (
    <article key={_id} className="col-6 col-md-3 mx-auto">
      <div className="product-card">
        <Link to='/details'>
          <img src={img} onClick={()=> handleDetail(_id)} alt="" className="img-border w-100"/>
        </Link>
        <div className="product-text p-2">
          <p className="text-muted text-uppercase">{title}</p>
          <h5 className="font-weight-bold">$ {price}</h5>
          <div className="d-flex align-items-center">
            <FaStar className='orange'/>
            <FaStar className='orange'/>
            <FaStar className='orange'/>
            <FaStar className='orange'/>
            <FaStar className='orange'/>
          </div>
          <button onClick={()=>{ addToCart(_id); {user.email && setInCart(true)}}}  disabled={inCart ? true : false} className="product-btn w-100 mt-2 text-center text-white font-weight-bold">
            {inCart? 'in cart':'add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
