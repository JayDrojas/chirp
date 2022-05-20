import NavBar from '../NavBar';
import './index.css'
import Tweet from '../Tweets/Tweet';
import SideBar from '../SideBar';

const TweetsDetail = () => {
  return (
    <div className='main'>
      <div className='left-container'>
        <NavBar />
      </div>
      {/* <CreateTweetForm /> */}
      <div className='center-container'>
        <Tweet />
      </div>
      <div className='right-container'>
        <SideBar />
      </div>
    </div>

  )
}

export default TweetsDetail;
