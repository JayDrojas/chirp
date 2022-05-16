import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteTweetForm from './DeleteTweetForm'

const DeleteTweetModal = ({ tweet }) => {
  return (
    <>
      <Popup
        trigger={<div className="button"> Delete Tweet </div>}
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
