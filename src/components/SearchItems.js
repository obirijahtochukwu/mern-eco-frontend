import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { FaStar, FaSistrix } from "react-icons/fa";

export default function SearchItems() {
  const { filteredList, addToCart, handleDetail } = useGlobalContext();

  if (filteredList.length > 0) {  
    return (
      <>
        <div className="nike p-2 mt-2">
          <div className='text-capitalize container'>
            <h5>searched items</h5>
          </div>
        </div>
        <div className="container-fluid  bg-white">
          <div className="container">
            <div className="row pt-4 ">
            {filteredList.map((item)=>{
            const {_id, img, title, price, inCart} = item;
              return (
              <article key={_id} className="col-6 col-md-3 col-lg-2 mx-auto my-2">
                <div className="product-card d-flex flex-column h-100 pb-2">
                  <Link to='/details'>
                    <img src={img} onClick={()=> handleDetail(_id)} alt="" className="img-border w-100"/>
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
                    <button onClick={()=> addToCart(_id)}  disabled={inCart ? true : false} className="product-btn w-100 py-1 text-center text-white font-weight-bold">
                      {inCart? 'in cart':'add to cart'}
                    </button>
                  </div>
                </div>
              </article>
              )
            })}
            </div> 
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <div className="container-fluid not-found mx-auto">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <div className="bg-white div">
              <div className="text-muted text-center mb-2">
                <FaSistrix/>
              </div>
              <p className="text-center text-muted">Sorry, we didn't find any results matching this search.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
