import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import SignUpForm from "../auth/SignUpForm";
import './SignUpModal.css'

const SignUpModal = () => {
  return (
    <>
      <Popup
        trigger={<button id="sign-up-bttn" className="button"> Sign up with email </button>}
        modal
        nested
        className="signup-modal"
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> <i class="fa-brands fa-twitter" style={{ fontSize: "30px"}}></i> </div>
            <div className="content">
              <h1>Create your account</h1>
              <SignUpForm />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default SignUpModal;
