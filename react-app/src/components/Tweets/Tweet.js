import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_one_tweet } from "../../store/tweets";
import EditTweetForm from './EditTweetForm'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteTweetForm from "./DeleteTweetForm";

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
            <Popup
              trigger={<button className="button"> Edit Tweet </button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Edit Tweet </div>
                  <div className="content">
                    <EditTweetForm tweet={tweet} close={close} />
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              trigger={<button className="button"> Delete Tweet </button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Delete Tweet </div>
                  <div className="content">
                      <DeleteTweetForm tweet={tweet} close={close} />
                  </div>
                </div>
              )}
            </Popup>
          </>
        )}
      </div>
    </div>
  )
}

export default Tweet;
