import { Link } from "react-router-dom";

const AboutMe = () => {

  return (
    <div id="right-tweet-content" className="each-tweet-right">
      <h4>Damian Rojas</h4>
      <p>My name is Damian and I created this twitter clone. Below are links to LinkedIn and github.</p>
      <div className="aboutme-links">
        <div>
          <a className="icon github" href='https://github.com/JayDrojas/chirp'>
            <i style={{ fontSize: '50px' }} class="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          <a className="icon linkedin" href="https://www.linkedin.com/in/damian-rojas-076a571b8/">
          <i style={{ fontSize: '50px' }} class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
