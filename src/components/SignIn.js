import { React, useState } from 'react'
import Axios from 'axios';
import { Navigate, Link} from "react-router-dom";
import {useGlobalContext} from "../context";
// eslint-disable-next-line
{/*import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa'
*/}

export default function SignIn() {
  // eslint-disable-next-line
  
  const user = useGlobalContext();
  // eslint-disable-next-line
  const [ cart, setCart] = user.carts
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  Axios.defaults.withCredentials= true;
  
  const login = (e) =>{
    e.preventDefault();
    Axios.post("http://localhost:4000/login",{
      email: email,
      password: password,
      }, {
      withCredentials:true
    }).then((response)=>{
      user.setEmail(response.data.email);
      setCart(response.data.cart)
      console.log(response.data.cart)
      setEmail('');
      setPassword('');
      user.setLoading(true);
    }).catch((err)=> alert(err));
  };

  if (user.email) {
    return <Navigate to={'/'}/>
  }
  

 return (   
  <section className='bg-white pt-3 pb-5'>
   <div className="signup container">
     <div className="col-12 col-md-7 col-lg-5 mx-auto">
      <form onSubmit={login} className='px-3 py-3'>
        <h5 className="text-center text-bold text-white py-4">Login</h5>
        <p className="text-capitalize text-start text-bold mt-2 mb-2 text-white">email address:</p>
        <input autoFocus required type="email" placeholder='exmaple@gmail.com' onChange={(e)=> setEmail(e.target.value)} className="w-100 mb-3 p-2"/>
        <p className="text-capitalize text-start text-bold mt-2 mb-2 text-white">password:</p>
        <input required type="password" placeholder='your password' onChange={(e)=> setPassword(e.target.value)} className="w-100 mb-3 p-2"/>
        <Link to='/createaccount' className='mt-4 text-start'>
          New here? Sign Up
        </Link>
        <button type='submit' className="w-100 my-4 p-2">login</button>
      </form>
     </div>
   </div>  
  </section>
 )
}
