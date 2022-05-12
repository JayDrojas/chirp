import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditTweetForm from './EditTweetForm'

const EditTweetModal = ({tweet}) => {
  return (
    <>
      <Popup
        trigger={<button className="button"> Edit Tweet </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Edit Tweet </div>
            <div className="content">
              <EditTweetForm tweet={tweet} close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default EditTweetModal;
