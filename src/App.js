import React, { useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import './App.css';
import Navigation from './NavBar';
import Cart from './components/Cart';
import Details from './components/Details';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Default from './components/Default';
import CreateAccount from './components/CreateAccount';
import SearchItems from './components/SearchItems';
import Accessories from './components/categories/Accessories';
import Anker from './components/categories/Anker';
import Brand from './components/categories/Brand';
import Defacto from './components/categories/Defacto';
import NikeAndAddidas from './components/categories/NikeAndAddidas';
import SmartPhones from './components/categories/SmartPhones';
import Footer from './components/Footer';
import { useGlobalContext } from './context';
import Loading from './modal/Loading';

export default function App() {

  const user = useGlobalContext();
  // eslint-disable-next-line
  const [cart, setCart] = user.carts

  const {items, setItems, loading, setLoading } = useGlobalContext();
  
  useEffect(() => {
      axios.get('http://localhost:4000/user', {withCredentials:true})
        .then(res => {
          user.setEmail(res.data.email);
      });
  }, [user]);

  useEffect(() => {
    axios.get('http://localhost:4000/products', {withCredentials:true}
    ).then((res)=>{ 
      setItems(res.data);
      setLoading(false)
    });
  }, [items, setItems, setLoading]);

  useEffect(() => {
    axios.get('http://localhost:4000/cart', {withCredentials:true}
    ).then((res)=>{
      setCart(res.data)
      setLoading(false)
    });
  }, [setCart, setLoading]);


  return (
    <React.Fragment>
      <Navigation/>
      {loading && <Loading/>}
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/createaccount' element={<CreateAccount/>} />
        <Route path='/searchItems' element={<SearchItems/>} />
        <Route path='/accessories' element={<Accessories/>} />
        <Route path='/anker' element={<Anker/>} />
        <Route path='/brand' element={<Brand/>} />
        <Route path='/defacto' element={<Defacto/>} />
        <Route path='/nikeandaddidas' element={<NikeAndAddidas/>} />
        <Route path='/smartPhones' element={<SmartPhones/>} />
        <Route element={<Default/>} />
      </Routes>
      <Footer className='mb-0'/>
    </React.Fragment>
  )
}