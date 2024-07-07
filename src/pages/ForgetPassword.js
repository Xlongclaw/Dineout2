import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import "./ForgetPassword.css";

const ForgetPassword = ({ className = "" }) => {
  return (
    <div className={`forget-password ${className}`}>
      <img
        className="recording-indicator-icon1"
        alt=""
        src="/recording-indicator.svg"
      />
      <Header
        leftSide="/left-side1.svg"
        angleLeft="/angleleft1.svg"
        mobileSignal="/mobile-signal1.svg"
        wifi="/wifi1.svg"
        battery="/battery1.svg"
      />
      <div className="title2">
        <div className="title3">Title</div>
      </div>
      <div className="right-accessory1">
        <div className="right-title1">Skip</div>
      </div>
      <section className="content3">
        <div className="form-area">
          <div className="form-container">
            <div className="form-header">
              <div className="title4">
                <h3 className="forgot-password">Forgot Password</h3>
              </div>
              <div className="select-which-contact">
                Select which contact details should we use to reset your
                password
              </div>
            </div>
          </div>
          <div className="options">
            <div className="payment-card">
              <div className="payment-card-child" />
              <div className="sms-icon">
                <img
                  className="sms-icon-child"
                  loading="lazy"
                  alt=""
                  src="/group-39335.svg"
                />
              </div>
              <div className="sms-label">
                <div className="via-sms">Via SMS</div>
                <div className="sms-placeholder">***** ***70</div>
              </div>
            </div>
            <div className="email-option">
              <div className="payment-card1">
                <div className="payment-card-item" />
                <div className="payment-card-inner">
                  <img
                    className="frame-inner"
                    alt=""
                    src="/group-39335-1.svg"
                  />
                </div>
                <div className="via-email-parent">
                  <div className="via-email">Via Email</div>
                  <div className="xyzxyzcom">**** **** **** xyz@xyz.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-indicator12">
        <div className="home-indicator13" />
      </footer>
      <Footer createAnAccount="Continue" propGap="16px" />
    </div>
  );
};

ForgetPassword.propTypes = {
  className: PropTypes.string,
};

export default ForgetPassword;
