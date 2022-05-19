import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteTweetForm from './DeleteTweetForm'

const DeleteTweetModal = ({ tweet }) => {
  return (
    <>
      <Popup
        trigger={<div className="button"> Delete Tweet </div>}
        className='delete-tweet'
        modal
        nested
      >
        {close => (
          <div className="modal">
            <div className="content" id='content-delete-tweet'>
              <DeleteTweetForm tweet={tweet} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default DeleteTweetModal;
