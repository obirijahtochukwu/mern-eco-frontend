import React from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';


const CartList = ({cart,decrement,increment,removeItem, cartTotalCount, setLoading}) =>{

  const submit = (_id) =>{
    removeItem(_id);
    setLoading(true);
  }

  return (
    <main className='container-fluid bg-white p-3'>
      <div className="anker p-2 m-2">
        <div className='text-capitalize text-muted'>
          <h5>my cart ({cartTotalCount} items)</h5>
        </div>
      </div>
      <div className="row align-item-center">
      {cart.map((item)=>{
        const {_id,title,img,price,count} = item;
        return (
          <article key={item._id}  className='col-11 col-sm-5 col-md-4 col-lg-3 mx-auto mb-2'>
              <div  className="p-2 mx-auto bg-white img-border car d-flex flex-column h-100">
                <div className="row align-items-center mb-0">
                  <div className="col-5">
                    <img src={img} alt="" className="w-100 img-border"/>
                  </div>
                  <div className="col-7">
                    <h6 className="text-capitalize font-weight-bold">{title}</h6>
                    <em>jumia🚀global</em>
                    <p className="orange mt-2">$ {price}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top px-2 py-2 mt-auto">
                  <span onClick={()=> submit(_id)} className='mx-2' style={{cursor: 'pointer', color: 'orange', fontSize: '1.5rem'}}><FaTrash /></span>
                  <span className="d-flex align-items-center ">
                    <div className="search-btn px-2">
                      <FaMinus onClick={()=> decrement(_id)} className='text-white ' style={{cursor: 'pointer'}}/>
                    </div>
                    <span className="fw-bold p-2 mx-3" style={{border: 'transparent', borderBottom: '0.1rem solid rgb(0, 0, 0, 0.3)'}}>{count}</span>
                    <div className="search-btn px-2">
                      <FaPlus onClick={()=> increment(_id)} className='text-white' style={{cursor: 'pointer'}}/>
                    </div>
                  </span>
                </div>
              </div>
          </article>
      )
    })}
    </div>
    </main>
  )
}

export default CartList;
