import ProfileOptions from "../components/ProfileOptions";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <div className="profile-navigation-wrapper">
        <div className="profile-navigation">
          <ProfileOptions />
          <div className="user-actions">
            <div className="sign-out-parent">
              <div className="sign-out">Sign-out</div>
              <div className="wrapper-arrow-1-wrapper">
                <div className="wrapper-arrow-1">
                  <img
                    className="wrapper-arrow-1-child"
                    loading="lazy"
                    alt=""
                    src="/arrow-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-gallery">
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img
          className="image-10-icon"
          loading="lazy"
          alt=""
          src="/image-10@2x.png"
        />
      </div>
    </div>
  );
};

export default SideNavbar;
