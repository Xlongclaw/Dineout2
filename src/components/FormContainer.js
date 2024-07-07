import PropTypes from "prop-types";
import "./FormContainer.css";

const FormContainer = ({ className = "" }) => {
  return (
    <div className={`form-container2 ${className}`}>
      <div className="form-content">
        <div className="form-header1">
          <div className="form-title">
            <h3 className="forgot-password3">Forgot Password</h3>
          </div>
          <div className="code-has-been1">
            Code has been send to ***** ***70
          </div>
        </div>
      </div>
      <div className="input-area4">
        <div className="code-input1">
          <div className="placeholder-area">
            <div className="placeholder-area-child" />
          </div>
          <div className="placeholder-area1">
            <div className="placeholder-area-item" />
          </div>
          <div className="placeholder-area2" />
          <div className="placeholder-area3" />
          <div className="placeholder-area4" />
        </div>
        <div className="resend1">
          <div className="didnt-receive-code-container1">
            <span>{`Didn’t receive code? `}</span>
            <span className="resend-again1">Resend again</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
