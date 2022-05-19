import { useDispatch } from "react-redux"
import { delete_one_tweet } from '../../store/tweets'
import { useHistory } from "react-router-dom"
import './DeleteTweet.css'

const DeleteTweetForm = ({ tweet, close }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleDeleteTweet = (e) => {
    e.preventDefault()

    dispatch(delete_one_tweet(tweet))
    return history.push('/home')
  }

  return (
    <div className="delete-tweet-div">
      <div className="delete-tweet-info">
        <h2>Delete Chirp?</h2>
        <p>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Chirp search results. </p>
        <button className="delete-chirp-bttn" onClick={handleDeleteTweet}>Delete</button>
        <button className="delete-cancel-bttn" onClick={() => close()}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteTweetForm;
