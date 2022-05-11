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

const create_tweet = (tweet) => ({
  type: CREATE_ONE_TWEET,
  tweet
})

const update = (tweet) => ({
  type: UPDATE_ONE_TWEET,
  tweet
})

const delete_one = (tweet) => ({
  type: DELETE_ONE_TWEET,
  tweet
})

export const get_all_tweets = () => async(dispatch) => {
  const response = await fetch("/api/tweets/")
  if(response.ok) {
    const tweets = await response.json()
    console.log(tweets)
    dispatch(all_tweets(tweets.tweets))
  } else {
    return "ERROR AT GET_ALL_TWEETS THUNK"
  }
}

const tweet_reducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case GET_TWEETS:
      newState = {}
      action.tweets.forEach(tweet => newState[tweet.id] =tweet)
      return newState

    default:
      return state
  }
}

export default tweet_reducer;
