import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from "../context";
import Modal from '../modal/Modal';

export default function Details() {
  
  const users = useGlobalContext();
    // eslint-disable-next-line
  const [cart, setCart] = users.carts;
  const {detailProduct,addToCart, setLoading} = useGlobalContext();
  const [inCart, setInCart] = useState(false);
  const {_id,img,info,price,title, per} = detailProduct;

  useEffect(() => {
    const id = cart.find(item => item._id === _id);
    if (id) {
      setInCart(true);
    }
  }, 
  [_id, cart]);


  const submit = (_id) =>{
		addToCart(_id);
    if (users.email) {
      setInCart(true);
    }
	}
  
  return (
   <article className="bg-white">
    <div className="container">
    <h4 className="text-capitalize text-center text-muted pt-3">product details</h4>
    <div className="row">
      <div className="col-10 col-md-6 mx-auto">
      <img src={img} alt={title} className='w-100 img-border'/>
      </div>
      <div className="col-md-6 mx-auto bg-white img-border p-4">
        <h4 className="text-capitalize">{title}</h4>
        <h2 className=" text-bold">$ {price} <sup className="sup">{per}%</sup></h2>
        <hr/>
        <div className="desc d-flex justify-content-between align-items-center fw-bold">
          <h2>Description</h2>
          <FaAngleRight/>
        </div>
        <hr/>
        <p className='font-weight-bold text-dark'>{info}</p>
        <div className="col-12 d-flex sticky bg-white py-2">
        <Link to='/' onClick={()=> setLoading(true)}>
          <button className="add-btn text-capitalize"><FaArrowLeft/></button>
        </Link>
        <button className="add-btn text-capitalize mx-1 w-100" onClick={()=> submit(_id)} disabled={inCart ? true: false}>                  {inCart? 'in cart':'add to cart'}
        </button>
        </div>
      </div>
    </div>
    </div>
    <Modal/>
   </article>
 )
}

