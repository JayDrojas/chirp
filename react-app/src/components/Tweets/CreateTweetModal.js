import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CreateTweetForm from './CreateTweetForm';

const CreateTweetModal = () => {
  return (
    <>
      <Popup
        trigger={<button className="button create-chirp-bttn"> Chirp </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Create </div>
            <div className="content">
              <CreateTweetForm close={close} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default CreateTweetModal;
