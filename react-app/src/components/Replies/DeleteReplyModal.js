import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteReplyForm from './DeleteReplyForm';

const DeleteReplyModal = ({ reply }) => {
  return (
    <>
      <Popup
        trigger={<div className="button"> Delete Reply </div>}
        className='delete-tweet'
        modal
        nested
      >
        {close => (
          <div className="modal">
            <div className="content" id='content-delete-tweet'>
              <DeleteReplyForm reply={reply} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default DeleteReplyModal;
