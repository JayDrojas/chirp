
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import CreateTweetModal from './Tweets/CreateTweetModal';

const NavBar = () => {
  return (
    <nav>
      <div className='navbar-container'>
        <div>
          <div className='navbar-item-div'>
            <i  class="fa-brands fa-twitter" style={{ fontSize: "25px" }}></i>
          </div>
        </div>
        <div>
          <div className='navbar-item-div'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <i class="fa-solid fa-house-user" style={{ fontSize: "25px" }} ></i>
              Home
            </NavLink>
          </div>
        </div>
        <div>
          <div className='navbar-item-div'>
            <NavLink to='/profile' exact={true} activeClassName='active'>
              <i class="fa-solid fa-user" style={{ fontSize: "25px" }}></i>
              Profile
            </NavLink>
          </div>
        </div>
        <div>
          <div className='navbar-item-div'>
            <NavLink to='/' exact={true} activeClassName='active'>
              {/* <i class="fa-solid fa-square-info"></i> */}
              <i class="fa-solid fa-circle-info" style={{ fontSize: "25px" }}></i>
              About
            </NavLink>
          </div>
        </div>
        <div>
          <CreateTweetModal />
        </div>
      </div>
        <div>
          <LogoutButton />
        </div>
    </nav >
  );
}

export default NavBar;
