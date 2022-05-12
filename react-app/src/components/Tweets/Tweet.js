import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_one_tweet } from "../../store/tweets";
import 'reactjs-popup/dist/index.css';
import EditTweetModal from "./EditTweetModal";
import DeleteTweetModal from "./DeleteTweetModal";

const Tweet = () => {
  const { chirpId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(store => store.session.user)
  const tweet = useSelector(store => store.tweets[chirpId])


  useEffect(() => {
    dispatch(get_one_tweet(chirpId))
  }, [dispatch, chirpId])

  return (
    <div>
      <p>{tweet?.content}</p>
      <p>username : {tweet?.user?.username}</p>
      <div>
        {user && user?.id === tweet?.user_id && (
          <>
            <EditTweetModal tweet={tweet} />
            <DeleteTweetModal tweet={tweet} />
          </>
        )}
      </div>
    </div>
  )
}

export default Tweet;
