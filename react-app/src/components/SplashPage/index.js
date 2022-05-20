import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import './LoginModal.css'
import './index.css'
import DemoSignin from "./DemoSignin";

const SplashPage = () => {

  return (
    <>
      <div className="splash-page-wrapper">
        <div id="splash-img-div">
          {/* <img id="splash-page-img" alt="background" src="/static/images/twitter-background.png" /> */}
        </div>
        <div id="authentication-actions-div">
          <div className="splash-header-div">
            <div id="splash-bird-div">
              <i className="fa-brands fa-twitter" style={{ fontSize: "40px" }}></i>
            </div>
            <h1>Happening now</h1>
          </div>
          <div className="signup-signin-container">
            <div className="signin-demo-actions">
              <h2>Join Chirp today.</h2>
              <div>
                <DemoSignin />
              </div>
              <div id="div-or-container">
                <div className="div-or-div"></div>
                <div className="div-or-span">
                  <span>or</span>
                </div>
                <div className="div-or-div"></div>
              </div>
              <div>
                <SignUpModal />
                <div className="terms-div">
                  <p>Thank you for visiting my twitter clone. You can signin as demo. Enjoy!</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Already have an account?</h3>
              <LoginModal />
            </div>
          </div>
        </div>
      </div>
      <footer id="splash-footer">
        <div className="footer-divs">
          <a href="https://github.com/JayDrojas/chirp">Github Repo</a>
        </div>
        <div className="footer-divs">
          <a href="https://www.linkedin.com/in/damian-rojas-076a571b8/" >LinkedIn</a>
        </div>
        <div className="footer-divs">
          <p>2022 - Juan Damian Rojas</p>
        </div>
      </footer>
    </>
  )
}

export default SplashPage;
