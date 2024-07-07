import Header from "./Header";
import PropTypes from "prop-types";
import "./SignUp.css";

const SignUp = ({ className = "" }) => {
  return (
    <div className={`sign-up ${className}`}>
      <Header
        leftSide="/left-side.svg"
        angleLeft="/angleleft.svg"
        mobileSignal="/mobile-signal.svg"
        wifi="/wifi.svg"
        battery="/battery.svg"
      />
      <section className="footer">
        <form className="button-container-parent">
          <div className="button-container">
            <a className="sign-up1">{`Sign up `}</a>
          </div>
          <div className="input-area">
            <div className="input">
              <div className="input-child" />
              <input className="name" placeholder="Name" type="text" />
            </div>
          </div>
          <div className="input-area1">
            <div className="input1">
              <div className="input-item" />
              <input className="name1" placeholder="Email" type="text" />
            </div>
          </div>
          <div className="input-area2">
            <div className="input2">
              <div className="input-inner" />
              <div className="flag-container-parent">
                <div className="flag-container">
                  <img
                    className="twemojiflag-india-icon"
                    loading="lazy"
                    alt=""
                    src="/twemojiflagindia.svg"
                  />
                </div>
                <div className="dropdown">
                  <img
                    className="down-arrow-icon"
                    alt=""
                    src="/down-arrow@2x.png"
                  />
                </div>
                <div className="input-separator" />
              </div>
              <div className="mobile-input">
                <div className="placeholder">+91</div>
              </div>
              <img className="group-icon" alt="" src="/group-13.svg" />
              <div className="mobile-number">
                <div className="your-mobile-number">Your mobile number</div>
              </div>
              <img
                className="icsharp-arrow-left-icon"
                loading="lazy"
                alt=""
                src="/icsharparrowleft@2x.png"
              />
            </div>
          </div>
          <div className="input-area3">
            <div className="input3">
              <div className="rectangle-div" />
              <div className="gender">Gender</div>
              <img
                className="down-arrow-icon1"
                alt=""
                src="/down-arrow-1@2x.png"
              />
            </div>
          </div>
          <div className="agreement">
            <img
              className="check-circle-icon"
              loading="lazy"
              alt=""
              src="/-checkcircle@2x.png"
            />
            <div className="by-signing-up-container">
              <p className="by-signing-up-you-agree-to-th">
                <span className="by-signing-up">{`By signing up. you agree to the `}</span>
                <span className="terms-of-service">Terms of service</span>
                <span className="and"> and</span>
              </p>
              <p className="privacy-policy">Privacy policy.</p>
            </div>
          </div>
          <button className="ctaprimary">
            <div className="create-an-account">Sign Up</div>
          </button>
          <div className="divider">
            <div className="frame-parent">
              <div className="line-wrapper">
                <div className="frame-child" />
              </div>
              <div className="or">or</div>
              <div className="line-container">
                <div className="frame-item" />
              </div>
            </div>
          </div>
          <div className="social-login">
            <div className="social-options">
              <div className="social-sign-up">
                <img
                  className="gmail-icon"
                  loading="lazy"
                  alt=""
                  src="/gmail.svg"
                />
              </div>
              <div className="social-sign-updefault">
                <img
                  className="facebook-icon"
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="sign-up-with">Sign up with Facebook</div>
              </div>
              <div className="social-sign-updefault1">
                <img
                  className="apple-icon"
                  loading="lazy"
                  alt=""
                  src="/apple.svg"
                />
                <div className="sign-up-with1">Sign up with Apple</div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <img
        className="recording-indicator-icon"
        alt=""
        src="/recording-indicator.svg"
      />
      <section className="signin-link-parent">
        <div className="signin-link">
          <div className="already-have-an-container">
            <span>{`Already have an account? `}</span>
            <span className="sign-in">Sign in</span>
          </div>
        </div>
        <div className="home-indicator">
          <div className="home-indicator1" />
        </div>
      </section>
      <div className="title">
        <div className="title1">Title</div>
      </div>
      <div className="right-accessory">
        <div className="right-title">Skip</div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  className: PropTypes.string,
};

export default SignUp;
