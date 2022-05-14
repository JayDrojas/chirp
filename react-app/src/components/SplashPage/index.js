import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import './LoginModal.css'

const SplashPage = () => {

  return (
    <div className="splash-page-wrapper">
      <div>
        <img alt="background" src="/static/images/twitter-background.png" />
      </div>
      <div>
        <h2>login button with modal</h2>
        <LoginModal />
      </div>
      <div>
        <h2>signup button with modal</h2>
        <SignUpModal />
      </div>
    </div>

  )
}

export default SplashPage;
