import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { create_tweet } from "../../store/tweets";

const CreateTweetForm = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState();
  const [content, setContent] = useState();

  const handleTweet = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if(content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if(content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')

    if(tweetErrors.length) return setErrors(tweetErrors)

    const newTweet = {
      content,
      user_id: user.id
    }

    dispatch(create_tweet(newTweet))

    setContent('')
    setErrors('')
  }

  return (
    <form onSubmit={handleTweet}>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          type='text'
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required={true}
        />
      </div>
      <button type="submit">Chirp</button>
    </form>
  )
}

export default CreateTweetForm
