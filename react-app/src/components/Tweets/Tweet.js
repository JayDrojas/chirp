
const Tweet = ({ tweet }) => {

  return (
    <div>
      <p>{tweet.content}</p>
      <p>username : {tweet.user.username}</p>
    </div>
  )
}

export default Tweet;
