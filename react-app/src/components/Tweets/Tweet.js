import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { get_one_tweet } from "../../store/tweets";
import 'reactjs-popup/dist/index.css';
import CreateReplyForm from "../Replies/CreateReplyForm";
import Replies from "../Replies/Replies"
import TweetBurger from "./TweetBurger";
import './Tweet.css'

const Tweet = () => {
  const { chirpId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(store => store.session.user)
  const tweet = useSelector(store => store.tweets[chirpId])
  const history = useHistory();

  useEffect(() => {
    dispatch(get_one_tweet(chirpId))
  }, [dispatch, chirpId])

  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div id="tweet-wrapper-detail">
      <div id="tweet-header-div">
        <div onClick={e => history.goBack()} id="arrow-div"><i style={{fontSize: '15px'}} className="fa-solid fa-arrow-left"></i></div>
        <h1>Chirp</h1>
      </div>
      <div id="tweet-div-detail">
        <i className="fa-solid fa-user" style={{ fontSize: "35px" }}></i>
        <div id="tweet-detail-usernames">
          <p>{tweet?.user.first_name}</p>
          <p>@{tweet?.user.username}</p>
        </div>
        <div>
          {user && user?.id === tweet?.user_id && (
            <>
              <TweetBurger tweet={tweet} />
            </>
          )}
        </div>
      </div>
      <div id="tweet-div-detail-content">
        <div className="tweet-user-content">
          <div className="reply-tweet-content">{tweet?.content}</div>
          <div className="tweet-image-container">
            <img id="tweet-image-reply" src={tweet?.image} alt='' />
          </div>
        </div>
        <div id="tweet-date-div">{new Date(tweet?.created_at).toLocaleDateString('en-US', DATE_OPTIONS)}</div>
      </div>
      <CreateReplyForm tweet={tweet} />
      <div>
        <Replies />
      </div>
    </div>
  )
}

export default Tweet;
