import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { get_all_tweets } from "../../store/tweets"
import EditTweetModal from "./EditTweetModal";
import DeleteTweetModal from "./DeleteTweetModal";

const Tweets = () => {
  const dispatch = useDispatch()
  const tweets = useSelector(store => Object.values(store.tweets))
  const user = useSelector(store => store.session.user)

  useEffect(() => {
    dispatch(get_all_tweets())
  }, [dispatch])

  return (
    <div>
      {tweets && tweets.map(tweet => (
        <div className="tweet-container">
          <Link to={`/chirps/${tweet.id}`}>
            <div>
              <p>{tweet.content}</p>
              <p>username : {tweet.user.username}</p>
            </div>
          </Link>
          {user?.id === tweet?.user_id && (<div>
            <EditTweetModal tweet={tweet} />
            <DeleteTweetModal tweet={tweet} />
          </div>)}
        </div>
      ))}
    </div>
  )
}


export default Tweets;
