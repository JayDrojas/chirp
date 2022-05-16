import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import LoginForm from "../auth/LoginForm";

const LoginModal = () => {
  return (
    <>
      <Popup
        trigger={<button id="login-bttn" className="button"> Sign in </button>}
        modal
        nested
        className="login-modal"
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> <i class="fa-brands fa-twitter" style={{ fontSize: "30px"}}></i></div>
            <div className="content">
              <h1>Enter your credentials</h1>
              <LoginForm />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default LoginModal;
