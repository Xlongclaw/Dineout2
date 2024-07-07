import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`frame-container ${className}`}>
      <div className="evawifi-off-fill-wrapper">
        <img
          className="evawifi-off-fill-icon"
          loading="lazy"
          alt=""
          src="/evawifiofffill.svg"
        />
      </div>
      <div className="no-internet-connection">No internet Connection</div>
      <div className="your-internet-connection-is-cu-wrapper">
        <div className="your-internet-connection-container">
          <p className="your-internet-connection">
            Your internet connection is currently
          </p>
          <p className="not-available-please">
            not available please check or try again.
          </p>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
