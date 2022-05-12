const GET_REPLIES = 'replies/GET_REPLIES'
const GET_ONE_REPLY= 'reply/GET_ONE_REPLY'
const CREATE_ONE_REPLY = 'reply/CREATE_ONE_TWEET'
const UPDATE_ONE_REPLY = 'reply/UPDATE_ONE_TWEET'
const DELETE_ONE_REPLY = 'reply/DELETE_ONE_TWEET'

const all_replies = (replies) => ({
  type: GET_REPLIES,
  replies
})

const create_one = (reply) => ({
  type: CREATE_ONE_REPLY,
  reply
})

export const get_all_replies = (id) => async(dispatch) => {
  const response = await fetch(`/api/tweets/${id}/replies`)

  if(response.ok) {
    const replies = await response.json()
    dispatch(all_replies(replies.replies))
  } else {
    return "ERROR AT GET_ALL_REPLIES THUNK"
  }
}

export const create_reply = (reply) => async(dispatch) => {
  const response = await fetch(`/api/replies/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reply)
  })
  if(response.ok) {
    const new_reply = await response.json()
    dispatch(create_one(new_reply))
  } else {
    return "ERROR AT CREATE_REPLY THUNK"
  }
}

const reply_reducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case GET_REPLIES:
      newState = {}
      action.replies.forEach(reply => newState[reply.id] = reply);
      return newState
    case CREATE_ONE_REPLY:
      newState = {...state}
      newState[action.reply.id] = action.reply
      return newState
    default:
      return state
  }
}

export default reply_reducer;
