import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteTweetForm from './DeleteTweetForm'

const DeleteTweetModal = ({ tweet }) => {
  return (
    <>
      <Popup
        trigger={<button className="button"> Delete Tweet </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Delete Tweet </div>
            <div className="content">
              <DeleteTweetForm tweet={tweet} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default DeleteTweetModal;
