import React from 'react';
import { FaDove, FaSistrix} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { sublinks } from '../data';
import './Navbar.css';

const Navbar = () => {
  const { handleChange, filteredItems, searchShow, name, edit, mapFilteredItems, logout } = useGlobalContext();
  const user = useGlobalContext();

  function searchItems() {
    if (searchShow) {
      return (
        <div>
          {filteredItems.map((oppo)=>{
          const {id, title} = oppo;
            return (
              <div key={id} className='d-flex align-items-center suggestions'>
              <Link to='/searchitems'>
                <FaSistrix className='m-2'/>
                <span key={id} onClick={()=> edit(id)}>{title}</span>
              </Link>
              </div>
            )
          })}
        </div>
      )
    }
  }


  return (
    <article className="navbarr container-fluid mt-0">
      <Link to='/'>
        <span className="logo m-2">jumia <FaDove/> </span>
      </Link>
      <span className="search col-md- col-lg-6">
        <input type="search" value={name} onChange={handleChange} placeholder='Search products...'  className="search-input w-100"/> 
        {name && <div className="search-list">
          {searchItems()}
        </div>}
        <Link to='/searchitems'>
          <button className="search-btn" onClick={mapFilteredItems}>search</button>
        </Link>
      </span> 
      <div className="navbar-left col-md-5 mx-auto col-lg-4 justify-content-around">
        <div className="navbar-left">
          {sublinks.map((link, index)=>{
            const {page, links} = link;
            if (user.email && index === 0) {
              return (
                <div key={index} className="category">
                  <button>{page}</button>
                  <span className="drop">
                    {links.map((link, index)=>{
                      const {label, to} = link;
                      return (
                        <div key={index} onClick={()=> window.location.assign(`${to}`)} className='sublink-text py-2 px-4'>{label}</div>
                      )
                    })}
                  </span>
                </div>
              );
            } else if(!user.email) {
              return (
                <div key={index} className="category">
                  <button>{page}</button>
                  <span className="drop">
                    {links.map((link, index)=>{
                      const {label, to} = link;
                      return (
                        <div key={index} onClick={()=> window.location.assign(`${to}`)} className='sublink-text py-2 px-4'>{label}</div>
                      )
                    })}
                  </span>
                </div>
              );
            }
            return null;
          })}
        </div>
        {user.email && <button onClick={logout} className="search-btn">logout</button> }
        <Link to='/cart'>
          <button className="cart">my cart</button> 
        </Link>
      </div>
    </article>
  )
};

export default Navbar;
