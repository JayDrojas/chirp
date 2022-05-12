import { useDispatch } from "react-redux"
import { useState } from 'react'
import { update_one_tweet } from '../../store/tweets'


const EditTweetForm = ({ tweet, close }) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState();
  const [content, setContent] = useState(tweet?.content);


  const handleEditTweet = (e) => {
    e.preventDefault()

    const tweetErrors = []
    if (content.length <= 0) tweetErrors.push('Chirp can\'t be empty.')
    if (content.length > 255) tweetErrors.push('Chirp can\'t be more than 255 characters long.')
    if (tweetErrors.length) return setErrors(tweetErrors)

    tweet.content = content;

    dispatch(update_one_tweet(tweet))
    return close()
  }

  return (
    <form onSubmit={handleEditTweet}>
      <div>
        {errors?.map(error => (
          <p key={error}>{error}</p>
        ))}
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          type='text'
          // placeholder="What's happening?"
          value={content}
          placeholder={tweet?.content}
          onChange={(e) => setContent(e.target.value)}
          // required={true}
        />
      </div>
      <button type="submit">Chirp</button>
    </form>
  )
}

export default EditTweetForm;
