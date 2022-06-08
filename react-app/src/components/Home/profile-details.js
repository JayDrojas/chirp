import NavBar from '../NavBar';
import Profile from '../Profile/Profile';
import SideBar from '../SideBar';
import './index.css';

const ProfileDetail = () => {
  return (
    <div className='main'>
      <div className='left-container'>
        <NavBar />
      </div>
      <div className='center-container'>
        <Profile />
      </div>
      <div className='right-container'>
        <SideBar />
      </div>
    </div>

  )
}

export default ProfileDetail;
