import React from 'react'
import { useGlobalContext } from '../../context';
import Smart from './Smart'
import Modal from '../../modal/Modal'

export default function SmartPhones() {
 const user = useGlobalContext();
 const { mobile, handleDetail, addToCart } = useGlobalContext();
 return (
  <>
   <div className='container-fluid'>
    <div className="row bg-white pt-2">
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba22.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba23.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/samsung-a22_2_375x300.png" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/smartphones-Artboard-1-copy-2.jpg" alt="" className="img-border w-100"/>
     </div>
    </div>
   </div>

   <div className="anker p-2 mt-2">
    <div className='text-capitalize'>
     <h5>smartphones deals</h5>
    </div>
   </div>
   <div className="container-fluid pl-md-5 pr-md-5 bg-white">
    <div className="containar">
    </div>
    <div className="row pt-4 pb-4 ml-md-5 mr-md-5">
     {mobile.map((item)=>{
      return (
       <Smart key={item._id} user={user} addToCart={addToCart} handleDetail={handleDetail} {...item}/>
      )
     })}
    </div> 
   </div>
   <Modal/>
  </>
 )
}
