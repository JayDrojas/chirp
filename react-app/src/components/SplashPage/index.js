import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import './LoginModal.css'
import './index.css'

const SplashPage = () => {

  return (
    <div className="splash-page-wrapper">
      <div id="splash-img-div">
        {/* <img id="splash-page-img" alt="background" src="/static/images/twitter-background.png" /> */}
      </div>
      <div id="authentication-actions-div">
        <div className="splash-header-div">
          <div id="splash-bird-div">
            <i class="fa-brands fa-twitter" style={{ fontSize: "40px" }}></i>
          </div>
          <h1>Happening now</h1>
        </div>
        <div className="signup-signin-container">
          <div>
            <h2>Join Chirp today.</h2>
            <SignUpModal />
          </div>
          <div>
            <h3>Already have an account?</h3>
            <LoginModal />
          </div>
        </div>
      </div>
    </div>

  )
}

export default SplashPage;
