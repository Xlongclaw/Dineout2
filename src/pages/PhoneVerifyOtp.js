import React from "react";
import "./PhoneVerifyOtp.css";

const PhoneVerifyOtp = () => {
  return (
    <div className="phone-verify-otp">
      <button className="back-button">Back</button>
      <div className="title">Forgot Password</div>
      <div className="subtitle">Code has been sent to ***** ***70</div>
      <div className="otp-inputs">
        <input type="text" maxLength="1" className="otp-input" value="2" />
        <input type="text" maxLength="1" className="otp-input" value="5" />
        <input type="text" maxLength="1" className="otp-input" />
        <input type="text" maxLength="1" className="otp-input" />
      </div>
      <div className="resend">
        Didn’t receive code? <span className="resend-link">Resend again</span>
      </div>
      <button className="verify-button">Verify</button>
    </div>
  );
};

export default PhoneVerifyOtp;
