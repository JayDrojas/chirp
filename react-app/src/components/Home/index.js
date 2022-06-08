// import CreateTweetForm from '../Tweets/CreateTweetForm';
import Tweets from '../Tweets/Tweets'
import NavBar from '../NavBar';
import './index.css'
import SideBar from '../SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_all_tweets } from '../../store/tweets';

const Home = () => {

  const dispatch = useDispatch();
  const tweets = useSelector(store => Object.values(store.tweets))

  useEffect(() => {
    dispatch(get_all_tweets())
  }, [dispatch])


  return (
    <div className='main'>
      <div className='left-container'>
        <NavBar />
      </div>
      <div className='center-container'>
        <Tweets tweets={tweets} needForm={true} />
      </div>
      <div className='right-container'>
        <SideBar />
      </div>
    </div>

  )
}

export default Home;
