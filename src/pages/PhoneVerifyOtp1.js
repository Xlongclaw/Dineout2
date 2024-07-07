import TopBar from "../components/TopBar";
import FormContainer from "../components/FormContainer";
import BottomArea from "../components/BottomArea";
import "./PhoneVerifyOtp1.css";

const PhoneVerifyOtp1 = () => {
  return (
    <div className="phone-verify-otp1">
      <TopBar />
      <div className="back-button">
       
      </div>
      <div className="title-container">
        <h1 className="title">Forgot Password</h1>
        <p className="subtitle">Code has been sent to ***** ***70</p>
      </div>
      <FormContainer />
      <p className="resend-container">
        Didn’t receive code? <span className="resend-link">Resend again</span>
      </p>
      <BottomArea createAnAccount="Verify" />
    </div>
  );
};

export default PhoneVerifyOtp1;
