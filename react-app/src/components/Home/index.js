// import CreateTweetForm from '../Tweets/CreateTweetForm';
import Tweets from '../Tweets/Tweets'
import NavBar from '../NavBar';
import './index.css'

const Home = () => {
  return (
    <div className='main'>
      <NavBar />
      {/* <CreateTweetForm /> */}
      <Tweets />
    </div>

  )
}

export default Home;
