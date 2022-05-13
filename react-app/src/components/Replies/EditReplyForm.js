import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { update_one_reply } from "../../store/replies";

const EditReplyForm = ({reply, close}) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState(reply?.content);
  const [errors, setErrors] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if(content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if(content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if(tweetErrors.length) return setErrors(tweetErrors)

    reply.content = content;

    dispatch(update_one_reply(reply))
    setContent('')
    setErrors([])
    close()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required={true}
      />
      <button type="submit">Edit Reply</button>
    </form>
  )
}

export default EditReplyForm;
