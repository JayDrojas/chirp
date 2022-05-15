// import CreateTweetForm from '../Tweets/CreateTweetForm';
import Tweets from '../Tweets/Tweets'
import NavBar from '../NavBar';
import './index.css'

const Home = () => {
  return (
    <div className='main'>
      <div className='left-container'>
        <NavBar />
      </div>
      {/* <CreateTweetForm /> */}
      <div className='center-container'>
        <h1>Home</h1>
        <Tweets />
      </div>
      <div className='right-container'>
        placeholder
      </div>
    </div>

  )
}

export default Home;
