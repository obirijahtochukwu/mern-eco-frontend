import React from 'react';
import { useGlobalContext } from '../../context';
import Ank from './Ank';
import Modal from '../../modal/Modal'

export default function Anker() {
  const user = useGlobalContext();
  const { anker, handleDetail, addToCart } = useGlobalContext();
 return (
  <>
   <div className='container-fluid'>
    <div className="row bg-white pt-2">
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba20.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba24.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-12 col-md-6 mx-auto">
      <img src="../image/CBM-(5).jpg" alt="" className="img-border w-100"/>
     </div>
    </div>
   </div>

   <div className="anker p-2 mt-2">
    <div className='text-capitalize'>
     <h5>anker festivals top deals</h5>
    </div>
   </div>
   <div className="container-fluid pl-md-5 pr-md-5 bg-white">
    <div className="containar">
    </div>
    <div className="row pt-4 pb-4 ml-md-5 mr-md-5">
     {anker.map((item)=>{
      return (
        <Ank key={item._id} user={user} addToCart={addToCart} handleDetail={handleDetail} {...item}/>
      )
     })}
    </div> 
   </div>
   <Modal/>
  </>
 )
}
