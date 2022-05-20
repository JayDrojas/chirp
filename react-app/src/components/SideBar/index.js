import Recent from "./Recent";
import './index.css'
import AboutMe from "./AboutMe";

const SideBar = () => {
  return (
    <div className="right-sidebar-div">
      <div className="right-subcontainers">
        <Recent />
      </div>
      <div className="right-subcontainers">
        <AboutMe />
      </div>
    </div>
  )
}

export default SideBar;
