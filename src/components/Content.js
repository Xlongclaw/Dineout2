import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content6 ${className}`}>
      <div className="form1">
        <div className="code-sent-wrapper">
          <div className="code-sent">
            <div className="forgot-password1">
              <h3 className="forgot-password2">Forgot Password</h3>
            </div>
            <div className="code-has-been">
              Code has been send to ***** ***70
            </div>
          </div>
        </div>
        <div className="input9">
          <div className="code-input">
            <div className="separator1">
              <div className="separator-child" />
              <div className="dot">2</div>
            </div>
            <div className="separator2">
              <div className="separator-item" />
              <div className="div1">5</div>
            </div>
            <div className="separator3" />
            <div className="separator4" />
            <div className="separator5" />
          </div>
          <div className="resend">
            <div className="didnt-receive-code-container">
              <span>{`Didn’t receive code? `}</span>
              <span className="resend-again">Resend again</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
