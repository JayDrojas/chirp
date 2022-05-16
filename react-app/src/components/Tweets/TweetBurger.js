import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteTweetModal from './DeleteTweetModal';
import EditTweetModal from './EditTweetModal';
import './TweetBurger.css'

const TweetBurger = ({tweet}) => {

  return (
      <Popup
        trigger={<div className="span-burger">...</div>}
        position="left top"
        on="click"
        closeOnDocumentClick
        nested
        className='tweet-burger'
        contentStyle={{ padding: '0px',
        boxShadow:'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px'
      }}
        arrow={false}
      >
        <div className="menu-div">
          <div className="menu-item"> <EditTweetModal tweet={tweet} /></div>
          <div className="menu-item"> <DeleteTweetModal tweet={tweet} /></div>
        </div>
      </Popup>
  )
}

export default TweetBurger;
