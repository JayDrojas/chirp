import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_all_replies } from "../../store/replies";

const Replies = () => {
  const dispatch = useDispatch()
  const { chirpId } = useParams()
  const replies = useSelector(store => Object.values(store.replies))

  console.log(replies)

  useEffect(() => {
    dispatch(get_all_replies(chirpId))
  }, [dispatch])

  return (
    <div>
      <h1>Replies</h1>
      {replies && replies.map(reply => (
        <div key={reply?.id}>
          <h3 key={reply}>{reply?.content}</h3>
          <h4> {reply?.user_id}</h4>
        </div>
      ))}
    </div>
  )
}

export default Replies;
