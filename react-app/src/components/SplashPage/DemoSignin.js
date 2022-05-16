import { useDispatch } from "react-redux"
import { login } from "../../store/session"


const DemoSignin = () => {
  const dispatch = useDispatch()

  const demoHandler = async (e) => {
    e.preventDefault()
    dispatch(login("demo@aa.io", "password"));
  }

  return (
    <button onClick={demoHandler} id="demo-bttn" type="button">Sign in as Demo</button>
  )
}

export default DemoSignin;
