const GET_TWEETS = 'tweets/GET_TWEETS'
const GET_ONE_TWEET = 'tweet/GET_ONE_TWEET'
const CREATE_ONE_TWEET = 'tweet/CREATE_ONE_TWEET'
const UPDATE_ONE_TWEET = 'tweet/UPDATE_ONE_TWEET'
const DELETE_ONE_TWEET = 'tweet/DELETE_ONE_TWEET'

const all_tweets = (tweets) => ({
  type: GET_TWEETS,
  tweets
})

const get_one = (tweet) => ({
  type: GET_ONE_TWEET,
  tweet
})

const create_one = (tweet) => ({
  type: CREATE_ONE_TWEET,
  tweet
})

const update = (tweet) => ({
  type: UPDATE_ONE_TWEET,
  tweet
})

const delete_one = (id) => ({
  type: DELETE_ONE_TWEET,
  id
})

export const delete_one_tweet = (tweet) => async(dispatch) => {
  const response = await fetch(`/api/tweets/${tweet.id}`, { method: 'DELETE'})

  if(response.ok) {
    dispatch(delete_one(tweet.id))
  } else {
    return "ERROR AT DELETE ONE THUNK"
  }
}


export const get_all_tweets = () => async(dispatch) => {
  const response = await fetch("/api/tweets/")
  if(response.ok) {
    const tweets = await response.json()
    dispatch(all_tweets(tweets.tweets))
  } else {
    return "ERROR AT GET_ALL_TWEETS THUNK"
  }
}

export const create_tweet = (tweet) => async(dispatch) => {
  const response = await fetch("/api/tweets/", {
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(tweet)
    body: tweet
  })
  if(response.ok) {
    const tweet = await response.json()
    dispatch(create_one(tweet))
    return tweet
  } else {
    const errors = await response.json()
    return errors
  }
}

export const get_one_tweet = (id) => async(dispatch) => {
  const response = await fetch(`/api/tweets/${id}`)

  if(response.ok) {
    const tweet = await response.json()
    dispatch(get_one(tweet))
  } else {
    return"ERROR AT GET_ONE_TWEET THUNK"
  }
}

export const update_one_tweet = (tweet) => async(dispatch) => {
  const id = tweet.get('id')
  const response = await fetch(`/api/tweets/${id}`, {
    method: "PUT",
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    body: tweet
  })

  if(response.ok) {
    const updatedTweet = await response.json()
    dispatch(update(updatedTweet))
    return updatedTweet
  } else {
    const errors = await response.json()
    return errors
  }
}

const tweet_reducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case GET_TWEETS:
      newState = {}
      action.tweets.forEach(tweet => newState[tweet.id] =tweet)
      return newState
    case CREATE_ONE_TWEET:
      newState = {...state}
      newState[action.tweet.id] = action.tweet
      return newState
    case GET_ONE_TWEET:
      newState = {...state}
      newState[action.tweet.id] = action.tweet
      return newState
    case UPDATE_ONE_TWEET:
      newState = {...state}
      newState[action.tweet.id] = {...action.tweet}
      return newState
    case DELETE_ONE_TWEET:
      newState = {...state}
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

export default tweet_reducer;
