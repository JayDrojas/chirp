import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUser } from "../../store/users";
import Tweets from "../Tweets/Tweets";
import './Profile.css'

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const user = useSelector(state => state.user[userId]);
  // const tweets = user?.tweets;
  const tweets = useSelector(state => Object.values(state.tweets)).filter(tweet => tweet.user_id === +userId)

  useEffect(() => {
    dispatch(getUser(userId))
  }, [])

  return (
    <>
      <div className="profile-wrapper-div">
        <div className="top-back-bttn-container">
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
            <img alt="profile" src="https://mychirpbucket.s3.amazonaws.com/dea2da15c19a4a9b80cc3105aed95ad5.jpg" />
          </div>
          <div className="profile-info-div">
            <div className="profile-name">{user?.first_name + ' ' + user?.last_name}</div>
            <div className="profile-tag-name">@{user?.username}</div>
            {/* <div className="profile-join-date">join date</div> */}
            {/* <div className="">followers</div> */}
          </div>
          <Tweets tweets={tweets} needForm={false} />
        </div>
      </div>
    </>
  )
}

export default Profile;
