import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

export default function Access({_id, img, title, price, user, handleDetail, addToCart}) {

  const users = useGlobalContext();
  const [cart] = users.carts
  const [inCart, setInCart] = useState(false);

  const submit = (_id) =>{
		addToCart(_id);
    if (user.email) {
      setInCart(true);
    }
	}

  useEffect(() => {
    const id = cart.find(item => item._id === _id);
    if (id) {
      setInCart(true);
    }
  }, 
  [_id, cart]);

  return (
    <article key={_id} className="col-6 col-md-3 col-lg-2 mx-auto my-2">
      <div className="product-card d-flex flex-column h-100 pb-2">
        <Link to='/details'>
          <img src={img} onClick={()=> handleDetail(_id)} alt={title} className="img-border w-100" style={{height: '200px'}}/>
        </Link>
        <div className="product-text px-2">
          <p className="text-muted mb-0 text-uppercase">{title}</p>
        </div>
        <div className="px-1 mt-auto">
          <h5 className="font-weight-bold px-1">$ {price}</h5>
          <div className="d-flex align-items-center mb-2 px-1">
            <FaStar className='orange'/>
            <FaStar className='orange'/>
            <FaStar className='orange'/>
            <FaStar className='orange'/>
            <FaStar className='text-muted'/>
          </div>
          <button onClick={()=> submit(_id)}  disabled={inCart ? true : false} className="product-btn w-100 py-1 text-center text-white font-weight-bold">
            {inCart? 'in cart':'add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
