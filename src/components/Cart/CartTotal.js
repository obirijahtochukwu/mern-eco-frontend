import React from 'react';

export default function CartTotal({cartTotalCount, cartTotalPrice}) {
 return (
  <div className="container-fluid sticky">
   <div className=' row'>
    <div className="col-12 d-flex sticky bg-white py-2">
     <button className="add-btn text-capitalize mx-1 w-100">                  
      checkout ($ {cartTotalPrice})
     </button>
     </div>
   </div>
  </div>
 )
}
