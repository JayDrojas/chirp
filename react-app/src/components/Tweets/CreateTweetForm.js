import { useState } from "react"
import { useDispatch } from "react-redux";
import { create_tweet } from "../../store/tweets";
import './TweetForm.css'


const CreateTweetForm = () => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleTweet = async (e) => {
    e.preventDefault()

    const tweetErrors = []
    if (content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if (content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if (tweetErrors.length) return setErrors(tweetErrors)

    const tweetData = new FormData();
    tweetData.append("content", content)
    tweetData.append("image", image)

    const response = await dispatch(create_tweet(tweetData))
    if (response.errors) {
      return setErrors([response.errors])
    }
    setContent('')
    setErrors('')
    setImage('')
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file)
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
            // required={true}
          />
          {image && (
            <img src={URL.createObjectURL(image)} alt='' />
          )}
        </div>
        <div className="create-form-action-div">
          <label className="label-for-file-bttn">
            <input
              name="upload-img"
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
            <div>
              <i style={{ fontSize: "18px" }} class="fa-regular fa-image"></i>
            </div>
          </label>
          <div className="crt-chrp-div">
            {content.length > 255 && (<span id="span-character-error">{255 - content?.length}</span>)}
            <button className="create-chirp-bttn-form" type="submit">Chirp</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTweetForm;
