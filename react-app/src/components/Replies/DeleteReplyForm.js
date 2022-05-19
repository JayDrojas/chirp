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
    <div>
      <button onClick={handleDeleteTweet}>Delete</button>
      <button onClick={() => close()}>Cancel</button>
    </div>
  )
}

export default DeleteReplyForm;
