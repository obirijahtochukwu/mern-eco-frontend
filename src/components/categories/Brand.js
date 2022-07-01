import React from 'react'
import { useGlobalContext } from '../../context';
import Bran from './Bran'
import Modal from '../../modal/Modal'


export default function Brand() {
 const user = useGlobalContext();
 const { brand, handleDetail, addToCart } = useGlobalContext();
 return (
  <>
   <div className='container-fluid'>
    <div className="row bg-white pt-2">
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba10.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba9.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba7.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba11.gif" alt="" className="img-border w-100"/>
     </div>
    </div>
   </div>

   <div className="brand p-2 mt-2">
    <div className='text-capitalize'>
     <h5>brand festivals top deals</h5>
    </div>
   </div>
   <div className="container-fluid pl-md-5 pr-md-5 bg-white">
    <div className="containar">
    </div>
    <div className="row pt-4 pb-4 ml-md-5 mr-md-5">
     {brand.map((item)=>{
      return (
       <Bran key={item._id} user={user} addToCart={addToCart} handleDetail={handleDetail} {...item}/>
      )
     })}
    </div> 
   </div>
   <Modal/>
  </>
 )
}
