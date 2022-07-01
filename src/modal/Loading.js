import React from 'react';
import { FaStar } from 'react-icons/fa';
import './loading.css'

export default function Loading() {
 return (
  <div className='loading'>
   <div className="loading-icon">
    <FaStar style={{color: 'orange'}} className="mx-3 my-3"/>
   </div>
  </div>
 )
}
