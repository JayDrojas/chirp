export const RandomTweets = (tweets, user) => {
  const new_tweets = tweets.filter(tweet => tweet.id !== user.id).splice(0,5)
  console.log(new_tweets)
  return new_tweets
}
