import React from 'react'
import { useGlobalContext } from '../../context';
import Access from './Access';
import Modal from '../../modal/Modal'


export default function Accessories() {

  const user = useGlobalContext();
  const { accessories, handleDetail, addToCart } = useGlobalContext();

  return (
    <>
    <div className='container-fluid'>
      <div className="row bg-white pt-2">
      <div className="col-6 mx-auto">
        <img src="../image/ba19.jpg" alt="" className="img-border w-100"/>
      </div>
      <div className="col-6 mx-auto">
        <img src="../image/ba13.jpg" alt="" className="img-border w-100"/>
      </div>
      </div>
    </div>

    <div className="defacto p-2 mt-1">
      <div className='text-capitalize'>
      <h5>accessories you need</h5>
      </div>
    </div>
    <div className="container-fluid pl-md-5 pr-md-5 bg-white">
      <div className="containar">
      </div>
      <div className="row pt-4 pb-4 ml-md-5 mr-md-5">
      {accessories.map((item)=>{
        return (
          <Access key={item._id} user={user} addToCart={addToCart} handleDetail={handleDetail} {...item}/>
        )
      })}
      </div> 
    </div>
    <Modal/>
    </>
  )
}
