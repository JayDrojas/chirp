import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { create_reply } from "../../store/replies";

const CreateReplyForm = ({tweet}) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [content, setContent] = useState();
  const [errors, setErrors] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if(content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if(content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if(tweetErrors.length) return setErrors(tweetErrors)

    const newReply = {
      content,
      user_id: user.id,
      tweet_id: tweet?.id
    }

    dispatch(create_reply(newReply))
    setContent('')
    setErrors([])
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Create Reply</label>
      <textarea
        name="content"
        type="text"
        placeholder="Chirp your reply"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required={true}
      />
      <button type="submit">Reply</button>
    </form>
  )
}

export default CreateReplyForm;
