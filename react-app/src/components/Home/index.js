// import CreateTweetForm from '../Tweets/CreateTweetForm';
import Tweets from '../Tweets/Tweets'
import NavBar from '../NavBar';
import './index.css'
import SideBar from '../SideBar';

const Home = () => {
  return (
    <div className='main'>
      <div className='left-container'>
        <NavBar />
      </div>
      {/* <CreateTweetForm /> */}
      <div className='center-container'>
        <Tweets />
      </div>
      <div className='right-container'>
        <SideBar />
      </div>
    </div>

  )
}

export default Home;
