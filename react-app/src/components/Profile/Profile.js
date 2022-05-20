import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const Profile = () => {

  const dispatch = useDispatch()
  const history = useHistory();

  return (
    <div className="profile-wrapper-detail">
      <div id="profile-header-div">
        <div onClick={e => history.goBack()} id="arrow-div"><i style={{ fontSize: '15px' }} className="fa-solid fa-arrow-left"></i>
          <div className="profile-top-name">
            <h3>Name</h3>
            <div>22 tweets</div>
          </div>
        </div>
        <div className="profile-background-image">
          blan background here
        </div>
        <div className="profile-info-div">
          <div className="profile-name">name</div>
          <div className="profile-tag-name">tagname</div>
          <div className="profile-join-date">join date</div>
          <div className="profile-join-date">followers</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
