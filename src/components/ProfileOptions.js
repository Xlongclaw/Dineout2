import PropTypes from "prop-types";
import "./ProfileOptions.css";

const ProfileOptions = ({ className = "" }) => {
  return (
    <div className={`profile-options ${className}`}>
      <div className="profile-icons">
        <div className="profile-labels">
          <img
            className="ggprofile-icon"
            loading="lazy"
            alt=""
            src="/ggprofile.svg"
          />
        </div>
        <div className="profile2">Profile</div>
      </div>
      <div className="profile-icons1">
        <div className="advertised-activity-name-here" />
      </div>
      <div className="icons8buy-parent">
        <img className="icons8buy" loading="lazy" alt="" src="/icons8buy.svg" />
        <div className="orders">orders</div>
      </div>
      <div className="profile-icons2">
        <div className="profile-icons-child" />
      </div>
      <div className="profile-icons3">
        <div className="icoutline-local-offer-wrapper">
          <img
            className="icoutline-local-offer-icon"
            loading="lazy"
            alt=""
            src="/icoutlinelocaloffer.svg"
          />
        </div>
        <div className="offer-and-promo">offer and promo</div>
      </div>
      <div className="profile-icons4">
        <div className="activity-successfully-created" />
      </div>
      <div className="profile-icons5">
        <div className="icoutline-sticky-note-2-wrapper">
          <img
            className="icoutline-sticky-note-2-icon"
            loading="lazy"
            alt=""
            src="/icoutlinestickynote2.svg"
          />
        </div>
        <div className="privacy-policy2">Privacy policy</div>
      </div>
      <div className="profile-icons6">
        <div className="profile-icons-item" />
      </div>
      <div className="profile-icons7">
        <div className="whhsecurityalt-wrapper">
          <img
            className="whhsecurityalt-icon"
            loading="lazy"
            alt=""
            src="/whhsecurityalt.svg"
          />
        </div>
        <div className="security">Security</div>
      </div>
    </div>
  );
};

ProfileOptions.propTypes = {
  className: PropTypes.string,
};

export default ProfileOptions;
