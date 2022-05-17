import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditReplyForm from './EditReplyForm'

const EditReplyModal = ({reply}) => {
  return (
    <>
      <Popup
        trigger={<button className="button"> Edit Reply </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Edit Reply </div>
            <div className="content">
              <EditReplyForm reply={reply} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default EditReplyModal;