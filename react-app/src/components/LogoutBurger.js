import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import LogoutButton from './auth/LogoutButton';

const LogoutBurger = ({ user }) => {

  return (
    <Popup
      trigger={<div className="span-burger">...</div>}
      position="left top"
      on="click"
      closeOnDocumentClick
      nested
      className='logout-burger'
      contentStyle={{
        boxShadow: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px'
      }}
      arrow={false}
    >
      <div className="menu-div">
        <div className="menu-item"> <LogoutButton />
        </div>
      </div>
    </Popup>
  )
}

export default LogoutBurger;
