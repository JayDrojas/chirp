import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { delete_one_tweet, update_one_tweet } from '../../store/tweets'
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
      <h1>Hello</h1>
      <button onClick={handleDeleteTweet}>Delete</button>
      <button onClick={() => close()}>Cancel</button>
    </div>
  )
}

export default DeleteTweetForm;
