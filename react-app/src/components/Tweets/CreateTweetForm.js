import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { create_tweet } from "../../store/tweets";
import './TweetForm.css'


const CreateTweetForm = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState('');

  const handleTweet = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if (content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if (content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if (tweetErrors.length) return setErrors(tweetErrors)

    const newTweet = {
      content,
      user_id: user.id
    }

    dispatch(create_tweet(newTweet))

    setContent('')
    setErrors('')
  }

  function setNewSize(e) {
    if (content.length >= 256) {
      e.target.style.color = "red";
      // let span = document.querySelector('#span-character-error')
      // span.innerText = -(content.length - 255)
    } else {
      e.target.style.color = "#fff";
    }
    e.target.style.height = "10px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="create-tweet-form">
      <i class="fa-solid fa-user" style={{ fontSize: "35px" }}></i>
      <form onSubmit={handleTweet}>
        <div className="create-tweet-textarea">
          <div>
          {errors.length > 0 && (
            errors.map(error => (
              <p>{error}</p>
              ))
              )}
              </div>
          <textarea
            name="content"
            id="myTextarea"
            onKeyUp={setNewSize}
            type='text'
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required={true}
          />
        </div>
        <div className="crt-chrp-div">
          { content.length > 255 && (<span id="span-character-error">{255 - content?.length}</span>)}
          <button className="create-chirp-bttn-form" type="submit">Chirp</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTweetForm;
