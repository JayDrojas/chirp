import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteReplyForm from './DeleteReplyForm';

const DeleteReplyModal = ({ reply }) => {
  return (
    <>
      <Popup
        trigger={<div className="button"> Delete Reply </div>}
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
              <DeleteReplyForm reply={reply} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default DeleteReplyModal;
