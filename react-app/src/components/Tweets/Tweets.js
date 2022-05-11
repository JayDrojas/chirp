import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_all_tweets } from "../../store/tweets"
import Tweet from "./Tweet"

const Tweets = () => {
  const dispatch = useDispatch()
  const tweets = useSelector(store => Object.values(store.tweets))

  // console.log(tweets)

  useEffect(() => {
    dispatch(get_all_tweets())
  }, [dispatch])

  // <h1>These should be tweets</h1>
  return (
    <div>
      {tweets && tweets.map(tweet => (
        <Tweet tweet={tweet} />
      ))}
    </div>
  )
}


export default Tweets;
