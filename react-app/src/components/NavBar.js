
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import LogoutBurger from './LogoutBurger';
import './NavBar.css'
import CreateTweetModal from './Tweets/CreateTweetModal';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav>
      <div className='navbar-container'>
        <div>
          <div className='navbar-item-div'>
            <Link to='/home'>
              <i className="fa-brands fa-twitter" style={{ fontSize: "25px" }}></i>
            </Link>
          </div>
        </div>
        <div>
          <div className='navbar-item-div'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <i className="fa-solid fa-house-user" style={{ fontSize: "25px" }} ></i>
              Home
            </NavLink>
          </div>
        </div>
        <div>
          <div className='navbar-item-div'>
            <NavLink to={`/profile/${user?.id}`} exact={true} activeClassName='active'>
              <i className="fa-solid fa-user" style={{ fontSize: "25px" }}></i>
              Profile
            </NavLink>
          </div>
        </div>
        <div className='bottom-navbar'>
          <div>
            <CreateTweetModal />
          </div>
          <div className='user-logout-div'>
            {/* <LogoutButton /> */}
            <div className='logout-user-pic'>
              <i className="fa-solid fa-user" style={{ fontSize: "25px" }}></i>
            </div>
            <div className='logout-user'>
              <div className='logout-user-tags'>
                <p>{user?.first_name + ' ' + user?.last_name}</p>
              </div>
              <span>@{user?.username}</span>
            </div>
            <div className='three-dots'><LogoutBurger user={user} /></div>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;
