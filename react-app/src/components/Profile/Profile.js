import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUser } from "../../store/users";
import './Profile.css'

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const user = useSelector(state => state.user[userId]);

  useEffect(() => {
    dispatch(getUser(userId))
  }, [])

  console.log(user?.tweets.length)
  return (
    <>
      <div className="profile-wrapper-div">
        <div className="profile-header-div" onClick={e => history.goBack()} id="arrow-div"><i style={{ fontSize: '15px' }} className="fa-solid fa-arrow-left"></i></div>
        <div className="profile-top-name">
          <h3>{user?.first_name + ' ' + user?.last_name}</h3>
          <div>{user?.tweets.length} {user?.tweets.length > 1 ? 'Tweets' : 'Tweet'}</div>
        </div>
      </div>
      <div className="profile-wrapper-detail">
        <div className="profile-background-image">
        </div>
        <div className="profile-pic">
          <img alt="profile" src="https://pbs.twimg.com/profile_images/1523741813403635713/yUaYGy6I_400x400.jpg" />
        </div>
        <div className="profile-info-div">
          <div className="profile-name">{user?.first_name + ' ' + user?.last_name}</div>
          <div className="profile-tag-name">@{user?.username}</div>
          {/* <div className="profile-join-date">join date</div> */}
          {/* <div className="">followers</div> */}
        </div>
      </div>
    </>
  )
}

export default Profile;
