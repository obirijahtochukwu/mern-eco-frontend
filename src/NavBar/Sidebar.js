import React, { useState } from 'react';
import { FaDove, FaTimes, FaBars, FaCartPlus, FaSearch, FaUserPlus, FaUserTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { sublinks } from '../data';
import SearchModal from '../components/search-modal/SearchModal';
import '../components/search-modal/SearchModal.css'


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useGlobalContext();
  const {cartTotalCount, searchModal, setSearchModal, logout, setLoading} = useGlobalContext();

  const submit = () =>{
    setIsSidebarOpen(false);
    setLoading(true);
  }
  return (
    <>
      {/* SIDEBAR HEADER*/}
      <div className="container-fluid d-md-none bar">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <FaBars onClick={()=> setIsSidebarOpen(true)} className=' font-weight-bold bar-icon m-1'/>
            <Link to='/' onClick={()=> setLoading(true)}>
              <span className="mb-logo ">jumia<FaDove/> </span>
            </Link>

          </div>
          <div className="d-flex align-items-center navbar-icon">
            <span>
              <FaSearch onClick={()=> setSearchModal(!searchModal)} className='search-btn m-2'/>
            </span>
            <span>
              {user.email ? 
                <FaUserTimes onClick={logout} className='bar-icon m-3'/> :
                <Link to={'/signin'} onClick={submit} className='mb-logo'>
                  <FaUserPlus className='bar-icon m-3'/>    
                </Link> 
              }
            </span>
            <span>
              <Link to='/cart' onClick={()=> setLoading(true)}>
              <span className="total-count">
                <FaCartPlus className='m-2'/>
                <span className={cartTotalCount === 0 ? "d-none count" : 'count'}>{cartTotalCount === 0 ? null : cartTotalCount}</span>
              </span>
            </Link>
            </span>
          </div>
        </div>
      </div>


      {/* SEARCH MODAL */}
      <div >
        <SearchModal/>
      </div>


      {/* SIDEBAR CONTENT */}
      <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar side-animation'>
        <button className='close-btn' onClick={()=> setIsSidebarOpen(false)}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            if (user.email && index === 0) {
              return (
                <article key={index}>
                  <h5 className='text-capitalize text-muted'>{page}</h5>
                  <hr/>
                  <div className='sidebar-sublinks'>
                    {links.map((link, index) => {
                      const { to, icon, label } = link;
                      return (
                        <Link key={index} to={to} onClick={()=> submit()}>
                          {icon}
                          <span className='sublinks'>{label}</span>
                          <hr/>
                          <hr/>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              );
            }
            else if(!user.email) {
              return (
                <article key={index}>
                  <h5 className='text-capitalize text-muted'>{page}</h5>
                  <hr/>
                  <div className='sidebar-sublinks'>
                    {links.map((link, index) => {
                      const { to, icon, label } = link;
                      return (
                        <Link key={index} to={to} onClick={()=> submit()}>
                          {icon}
                          <span className='sublinks'>{label}</span>
                          <hr/>
                          <hr/>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              );
            }
            return null;
          })}
        </div>
      </aside>
    </div>
    </>
  );
};

export default Sidebar;
