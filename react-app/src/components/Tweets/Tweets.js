// import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import { get_all_tweets } from "../../store/tweets"
import CreateTweetForm from "./CreateTweetForm"
import './tweets.css'
import TweetBurger from "./TweetBurger";

const Tweets = ({tweets, needForm}) => {
  // const dispatch = useDispatch()
  // const tweets = useSelector(store => Object.values(store.tweets))
  const user = useSelector(store => store.session.user)

  // useEffect(() => {
  //   dispatch(get_all_tweets())
  // }, [dispatch])


  return (
    <div id="tweets-container">
      {needForm && <h1>Home</h1>}
      {needForm && <CreateTweetForm />}
      {tweets && tweets.sort((tweet1, tweet2) => tweet2?.id - tweet1?.id).map(tweet => (
        <div key={tweet?.id} className="tweet-container">
          <div className="tweet-div">
            <div className="tweets-profile-pic"><i className="fa-solid fa-user" style={{ fontSize: "35px" }}></i>
            </div>
            <div className="tweet-actions-container">
              <div className="tweet-action-div">
                <Link to={`/profile/${tweet?.user_id}`}>
                  <div className="tweet-user-info-div">
                    <p><span>{tweet?.user.first_name}</span> @{tweet?.user.username}</p>
                  </div>
                </Link>
                {user?.id === tweet?.user_id && (
                  <div>
                    <TweetBurger tweet={tweet} />
                  </div>
                )}
              </div>
              <Link to={`/chirps/${tweet?.id}`}>
                <div className="tweet-user-content">
                  <p>{tweet?.content}</p>
                  {tweet?.image && (

                    <img id="tweet-image" src={tweet?.image} alt='' />
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  )
}


export default Tweets;
