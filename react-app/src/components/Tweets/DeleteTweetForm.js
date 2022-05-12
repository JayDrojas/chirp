import { useDispatch } from "react-redux"

import { delete_one_tweet } from '../../store/tweets'
import { useHistory } from "react-router-dom"

const DeleteTweetForm = ({ tweet, close }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleDeleteTweet = (e) => {
    e.preventDefault()

    dispatch(delete_one_tweet(tweet))
    return history.push('/home')
  }

  return (
    <div>
      <button onClick={handleDeleteTweet}>Delete</button>
      <button onClick={() => close()}>Cancel</button>
    </div>
  )
}

export default DeleteTweetForm;
