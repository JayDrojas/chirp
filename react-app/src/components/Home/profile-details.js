import NavBar from '../NavBar';
import Profile from '../Profile/Profile';
import './index.css';

const ProfileDetail = () => {
  return (
    <div className='main'>
      <div className='left-container'>
        <NavBar />
      </div>
      {/* <CreateTweetForm /> */}
      <div className='center-container'>
        <Profile />
      </div>
      <div className='right-container'>
        placeholder
      </div>
    </div>

  )
}

export default ProfileDetail;
