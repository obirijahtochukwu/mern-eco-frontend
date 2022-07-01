import React from 'react';
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import './modal.css';
import { useGlobalContext } from "../context";


export default function Modal() {
 const {modalContent, modal, setModal} = useGlobalContext();
 const {img, title, price} = modalContent;
 
 return (
  <article className={modal ? 'article show' : 'article'}>
   {console.log(modalContent)}
   <section className='col-7 col-md-4 col-lg-3 mx-auto pb-3'>
    <p className='text-center h5 success text-white text-capitalize py-2'><i>Item added to cart</i></p>
    <img src={img} alt={title} className='w-100'/>
    <p className="text-capitalize my-0">{title}</p>
    <p className="text-capitalize text-muted my-0">Price: ${price}</p>
    <Link to='/' onClick={()=> setModal(false)} className='text-center'>
     <button className="modal-product-btn p-1">continue shopping</button>
    </Link>
    <br/>
    <Link to='/cart' onClick={()=> setModal(false)}>
     <button className="modal-cart-btn p-1 mt-2">go to cart</button>
    </Link>
    <button onClick={()=> setModal(false)} className="modal-close-btn text-white"><FaTimes className='m-2'/></button>
   </section>
  </article>
 )
}
