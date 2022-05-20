import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { update_one_reply } from "../../store/replies";

const EditReplyForm = ({ reply, close }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState(reply?.content);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if (content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if (content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if (tweetErrors.length) return setErrors(tweetErrors)

    reply.content = content;

    dispatch(update_one_reply(reply))
    setContent('')
    setErrors([])
    close()
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
          <div className="errors-container">
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
            type="text"
            placeholder={reply?.content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          // required={true}
          />
          <div className="crt-chrp-div">
            {content.length > 255 && (<span id="span-character-error">{255 - content?.length}</span>)}
            <button className="create-chirp-bttn-form" type="submit">Edit Reply</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditReplyForm;
