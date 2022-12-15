import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [typed, setTyped] = useState(false);

  const tweets = useSelector(state => Object.values(state.tweets))
  const users = useSelector(state => Object.values(state.users))

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const filteredTweets = tweets.filter(tweet => tweet?.content.toLowerCase().includes(search))
  const filteredUsers = users.filter(user => user?.username.toLowerCase().includes(search))

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
    if (search.length > 1) {
      setTyped(true)
    } else {
      setTyped(false)
    }
  }

  const onKey = (e) => {
    e.preventDefault()
    console.log(e.key)
  }

  return (
    <>
      <form onSubmit={onKey}>
        <input
          type="search"
          value={search}
          onInput={handleChange}
        />
        <div>
          {typed && (
            filteredUsers.map(user => (
              <div>
                {user?.username}
              </div>
            ))
          )}
          {typed && (
            filteredTweets.map(tweet => (
              <div>
                {tweet?.content}
              </div>
            ))
          )}
        </div>
      </form>
    </>
  )
}

export default Search;
