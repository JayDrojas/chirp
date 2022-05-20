export const RandomTweets = (tweets, user) => {
  const new_tweets = tweets.filter(tweet => tweet.id !== user.id).splice(0,5)
  return new_tweets
}
