/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light bg-dark mb-5 '>
        <div className='container'>
          <div className='navbar-header'>
            <div className='navbar-nav ml-auto d-inline-block'>
              <Link to='/'>
                <img
                  src={logo}
                  width='50'
                  height='50'
                  className='nav-item d-inline-block mr-3 mb-1'
                  alt='logo'
                />
              </Link>
            </div>
            <Link className='navbar-brand text-white text-lg brand-text' to='/'>
              HD MOVIE
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
