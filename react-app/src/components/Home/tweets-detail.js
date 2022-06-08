import NavBar from '../NavBar';
import './index.css'
import Tweet from '../Tweets/Tweet';
import SideBar from '../SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_all_tweets } from '../../store/tweets';

const TweetsDetail = () => {

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
