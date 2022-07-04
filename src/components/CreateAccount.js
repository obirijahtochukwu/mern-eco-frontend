import { React, useState } from 'react'
import Axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';


export default function CreateAccount() {

  const user = useGlobalContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  Axios.defaults.withCredentials= true;
  
  const register = (e) =>{
    e.preventDefault();
      Axios.post("http://localhost:4000/signup",{
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
      }).then((response)=>{
        user.setEmail(response.data.email);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        user.setLoading(true);
      }).catch((err)=>{
        alert(err)
      })
  };
  
  if (user.email) {
    return <Navigate to={'/'}/>
  }

 return (
  <>
    <div className="signup container-fluid bg-white pt-3 pb-5">
      <div className="col-12 col-md-7 col-lg-5 mx-auto">
        <form onSubmit={register} className='px-3 py-3'>
          <h5 className="text-center text-bold text-white py-4 text-capitalize">sign up</h5>
          <p className="text-capitalize text-bold mt-2 mb-2 text-white">first name:</p>
          <input autoFocus required type="text" placeholder='First name' onChange={(e)=> setFirstName(e.target.value)} className="w-100 mb-3 p-2"/>
          <p className="text-capitalize text-bold mt-2 mb-2 text-white">last name:</p>
          <input required type="text" placeholder='Last name' onChange={(e)=> setLastName(e.target.value)} className="w-100 mb-3 p-2"/>
          <p className="text-capitalize text-bold mt-2 mb-2 text-white">email address:</p>
          <input required type="email" placeholder='example@gmail.com' onChange={(e)=> setEmail(e.target.value)} className="w-100 mb-3 p-2"/>
          <p className="text-capitalize text-bold mt-2 mb-2 text-white">password:</p>
          <input required type="password" placeholder='your password' onChange={(e)=> setPassword(e.target.value)} className="w-100 mb-3 p-2"/>
          <Link to='/signin' className='mt-4 text-center'>
            Have an account? Login
          </Link>
          <button type='submit' className="w-100 my-4 p-2">submit</button>
        </form>
      </div>
    </div>  
  </>
 )
}
