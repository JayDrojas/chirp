const GET_USER = 'user/GET_USER';

const get_user = (user) => ({
  type: GET_USER,
  user: user
})

export const getUser = (id) => async (dispatch) => {
  const response = await fetch (`/api/users/profile/${id}`)

  if (response.ok) {
    const user = await response.json()
    dispatch(get_user(user))
  } else {
    return "could'nt find user"
  }
}

const user_reducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case GET_USER:
      newState = {}
      newState[action.user.id] = action.user
      return newState
    default:
      return state
  }
}

export default user_reducer;
