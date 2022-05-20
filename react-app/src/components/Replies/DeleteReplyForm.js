import { useDispatch } from "react-redux"
// import { useHistory } from "react-router-dom"
import { delete_one_reply } from "../../store/replies"

const DeleteReplyForm = ({ reply, close }) => {
  const dispatch = useDispatch()
  // const history = useHistory()

  const handleDeleteTweet = (e) => {
    e.preventDefault()
    dispatch(delete_one_reply(reply))
    close()
  }

  return (
    <div className="delete-tweet-div">
      <div className="delete-tweet-info">
        <h2>Delete Chirp Reply?</h2>
        <p>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Chirp search results. </p>
        <button className="delete-chirp-bttn" onClick={handleDeleteTweet}>Delete</button>
        <button className="delete-cancel-bttn" onClick={() => close()}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteReplyForm;
