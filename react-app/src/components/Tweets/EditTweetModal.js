import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditTweetForm from './EditTweetForm'
import './EditTweet.css'

const EditTweetModal = ({tweet}) => {
  return (
    <>
      <Popup
        trigger={<div className="button"> Edit Tweet </div>}
        className="edit-tweet"
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Edit Tweet </div>
            <div className="content-edit-tweet">
              <EditTweetForm tweet={tweet} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default EditTweetModal;
