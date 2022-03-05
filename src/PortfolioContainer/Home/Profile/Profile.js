import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://facebook.com/tibebu.enyew.9/" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://linkedin.com/in/tibebu-eneyew/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://instagram.com/e.tibebu/" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/tibebuenyew" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://youtube.com/channel/UC6jinCsnwKMKjpY03Fs1MRg" target="_blank" rel="noreferrer">
                <i className="fa fa-youtube-squre"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Tibebu</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 👌",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "Php-Codeigniter Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            {""}
            <button className="btn primary-btn">Hire Me {""}</button>
            <a href="tescv.pdf" download="Tibebu tescv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
