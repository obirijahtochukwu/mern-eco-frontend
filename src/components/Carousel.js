import React from 'react';
import { services } from '../data';
export default function Carousel() {


 return (
  <div className="row align-items-center bg-white p-3">
      <div className="col-12 col-md-7 mx-auto">
        <img src="./image/ba18.jpg" className='w-100' alt=""/>
      </div>
      <div className="col-12 col-md-5">
        <div className="row">
          {services.map((service, index)=>{
            const {img, title} = service;
            return (
              <div key={index} className="col-3 mx-auto">
                <div className="services mx-auto w-100">
                  <img src={img} alt="logo" className="text-center w-100 mx-auto"/>
                  <h6 className="text-center">{title}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
 )
}
