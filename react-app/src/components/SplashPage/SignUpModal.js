import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import SignUpForm from "../auth/SignUpForm";

const SignUpModal = () => {
  return (
    <>
      <Popup
        trigger={<button className="button"> Signup </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Login </div>
            <div className="content">
              <SignUpForm />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default SignUpModal;
