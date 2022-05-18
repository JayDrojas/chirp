import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_reply } from "../../store/replies";

const CreateReplyForm = ({ tweet }) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if (content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if (content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if (tweetErrors.length) return setErrors(tweetErrors)

    const newReply = {
      content,
      user_id: user.id,
      tweet_id: tweet?.id
    }

    dispatch(create_reply(newReply))
    setContent('')
    setErrors([])
  }

  function setNewSize(e) {
    if (content.length >= 256) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "#fff";
    }
    e.target.style.height = "10px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="create-tweet-form">
      <i className="fa-solid fa-user" style={{ fontSize: "35px" }}></i>
      <form onSubmit={handleSubmit}>
        <div className="create-tweet-textarea">
        <div>
          {errors.length > 0 && (
            errors.map(error => (
              <p>{error}</p>
              ))
              )}
              </div>
              <p>Replying to {tweet?.user.username}</p>
          <textarea
            name="content"
            id="myTextarea"
            onKeyUp={setNewSize}
            type="text"
            placeholder="Chirp your reply"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required={true}
          />
        </div>
        <div className="crt-chrp-div">
          {content.length > 255 && (<span id="span-character-error">{255 - content?.length}</span>)}
          <button className="create-chirp-bttn-form" type="submit">Reply</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReplyForm;
