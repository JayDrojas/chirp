import NavBar from '../NavBar';
import './index.css'
import Tweet from '../Tweets/Tweet';

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
        placeholder
      </div>
    </div>

  )
}

export default TweetsDetail;
