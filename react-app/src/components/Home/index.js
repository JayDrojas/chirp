import CreateTweetForm from '../Tweets/CreateTweetForm';
import Tweets from '../Tweets/Tweets'

const Home = () => {
  return (
    <>
      <CreateTweetForm />
      <h1> Main Page </h1>
      <Tweets />
    </>

  )
}

export default Home;
