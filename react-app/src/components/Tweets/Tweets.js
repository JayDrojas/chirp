import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { get_all_tweets } from "../../store/tweets"

const Tweets = () => {
  const dispatch = useDispatch()
  const tweets = useSelector(store => Object.values(store.tweets))

  const editTweet = (e) => {
    e.preventDefault()
    console.log("clicked edit tweet")
  }

  useEffect(() => {
    dispatch(get_all_tweets())
  }, [dispatch])

  return (
    <div>
      {tweets && tweets.map(tweet => (
        <Link to={`/chirps/${tweet.id}`}>
          <div className="tweet-container">
            <p>{tweet.content}</p>
            <p>username : {tweet.user.username}</p>
            <div>
              <span onClick={editTweet}>...</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}


export default Tweets;
