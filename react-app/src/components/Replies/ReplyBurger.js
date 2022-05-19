import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import '../Tweets/TweetBurger.css'
import DeleteReplyModal from './DeleteReplyModal';
import EditReplyModal from './EditReplyModal';

const ReplyBurger = ({reply}) => {

  return (
      <Popup
        trigger={<div className="span-burger">...</div>}
        position="left top"
        on="click"
        closeOnDocumentClick
        nested
        className='tweet-burger'
        contentStyle={{
        boxShadow:'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px'
      }}
        arrow={false}
      >
        <div className="menu-div">
          <div className="menu-item"> <EditReplyModal reply={reply} /></div>
          <div className="menu-item"> <DeleteReplyModal reply={reply} /></div>
        </div>
      </Popup>
  )
}

export default ReplyBurger;
