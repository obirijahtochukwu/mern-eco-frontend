import React from 'react'
import { useGlobalContext } from '../../context';
import Nike from './Nike'
import Modal from '../../modal/Modal'

export default function NikeAndAddidas() {
 const user = useGlobalContext();

 const { footwares, handleDetail, addToCart } = useGlobalContext();
 return (
  <>
   <div className='container-fluid'>
    <div className="row bg-white pt-2">
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba4.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba5.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba17.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba15.jpg" alt="" className="img-border w-100"/>
     </div>
    </div>
   </div>

   <div className="nike p-2 mt-2">
    <div className='text-capitalize'>
     <h5>nike & addidas</h5>
    </div>
   </div>
   <div className="container-fluid pl-md-5 pr-md-5 bg-white">
    <div className="containar">
    </div>
    <div className="row pt-4 ml-md-5 mr-md-5">
     {footwares.map((item)=>{
      return (
       <Nike key={item._id} user={user} addToCart={addToCart} handleDetail={handleDetail} {...item}/>
      )
     })}
    </div> 
   </div>
   <Modal/>
  </>
 )
}
