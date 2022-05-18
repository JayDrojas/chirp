import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_one_tweet } from "../../store/tweets";
import 'reactjs-popup/dist/index.css';
import EditTweetModal from "./EditTweetModal";
import DeleteTweetModal from "./DeleteTweetModal";
import CreateReplyForm from "../Replies/CreateReplyForm";
import Replies from "../Replies/Replies"
import './Tweet.css'
import TweetBurger from "./TweetBurger";

const Tweet = () => {
  const { chirpId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(store => store.session.user)
  const tweet = useSelector(store => store.tweets[chirpId])


  useEffect(() => {
    dispatch(get_one_tweet(chirpId))
  }, [dispatch, chirpId])

  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div id="tweet-wrapper-detail">
      <div id="tweet-header-div">
        <div>{'<==='}</div>
        <h1>Tweet</h1>
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
        <p>{tweet?.content}</p>
        <p>{new Date(tweet?.created_at).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
      </div>
      <CreateReplyForm tweet={tweet} />
      <div>
        <Replies />
      </div>
    </div>
  )
}

export default Tweet;
