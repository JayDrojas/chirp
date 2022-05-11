import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

const SplashPage = () => {

  return (
    <div>

      <h1>This will be the spash page</h1>

      <div>
        <h2>login button with modal</h2>
        <LoginForm />
      </div>
      <div>
        <h2>signup button with modal</h2>
        <SignUpForm />
      </div>
    </div>

  )
}

export default SplashPage;
