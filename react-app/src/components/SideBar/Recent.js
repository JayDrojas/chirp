import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_all_tweets } from "../../store/tweets";
import { RandomTweets } from "./utils";

const Recent = () => {
  const dispatch = useDispatch()
  const tweets = useSelector(store => Object.values(store.tweets))
  const user = useSelector(store => store.session.user)
  const randomTweets = RandomTweets(tweets, user)

  useEffect(() => {
    dispatch(get_all_tweets())
  }, [dispatch])

  return (
    <div className="happening-div">
      <div className="right-div-title">
        <h3>What's happening</h3>
      </div>
      <div>
        {randomTweets && randomTweets.map(tweet => (
          <Link className="link-tags" key={tweet.id} to={`/chirps/${tweet.id}`}>
            <div className="each-tweet-right">
              <div className="right-tweet-content">
                <h4>{tweet.user.username}</h4>
                <p>{tweet.content.length > 55 ? tweet.content.slice(0, 55) + "..." : tweet.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="right-div-title">
        Thank you for visiting!
      </div>
    </div>
  )
}

export default Recent;
