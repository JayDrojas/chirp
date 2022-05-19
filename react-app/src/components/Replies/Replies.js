import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_all_replies } from "../../store/replies";
import DeleteReplyModal from "./DeleteReplyModal";
import EditReplyModal from "./EditReplyModal";
import ReplyBurger from "./ReplyBurger";

const Replies = () => {
  const dispatch = useDispatch()
  const { chirpId } = useParams()
  const user = useSelector(store => store.session.user)
  const replies = useSelector(store => Object.values(store.replies))

  console.log(replies)

  useEffect(() => {
    dispatch(get_all_replies(chirpId))
  }, [dispatch])

  return (
    <div className="replies-container">
      {replies && replies.map(reply => (
        <div key={reply?.id}>
          <div key={reply?.id} className='reply-container'>
            <div className="reply-div">
              <div className="reply-profile-pic"><i className="fa-solid fa-user" style={{ fontSize: "35px" }}></i>
              </div>
              <div className="reply-action-container">
                <div className="reply-action-div">
                  <div className="reply-user-info-div">
                    <p><span>{reply?.user.first_name + ' ' + reply?.user.last_name}</span> @{reply?.user.username} </p>
                  </div>
                  {user?.id === reply?.user_id && (
                    <div>
                      <ReplyBurger reply={reply} />
                    </div>
                  )}
                </div>
                <div className="reply-user-content">
                  <p>{reply?.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Replies;
