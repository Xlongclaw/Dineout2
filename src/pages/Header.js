import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  className = "",
  leftSide,
  angleLeft,
  mobileSignal,
  wifi,
  battery,
}) => {
  return (
    <section className={`header ${className}`}>
      <img className="notch-icon" loading="lazy" alt="" src="/notch@2x.png" />
      <div className="top-right">
        <div className="top-right-signals">
          <div className="signal-icons">
            <img
              className="left-side-icon"
              loading="lazy"
              alt=""
              src={leftSide}
            />
            <div className="title-container">
              <div className="left-title">
                <img
                  className="angle-left-icon"
                  loading="lazy"
                  alt=""
                  src={angleLeft}
                />
                <a className="left-title1">Back</a>
              </div>
            </div>
          </div>
          <div className="content4">
            <div className="form-container1">
              <img
                className="mobile-signal-icon"
                loading="lazy"
                alt=""
                src={mobileSignal}
              />
              <img className="wifi-icon" loading="lazy" alt="" src={wifi} />
              <img
                className="battery-icon"
                loading="lazy"
                alt=""
                src={battery}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  leftSide: PropTypes.string,
  angleLeft: PropTypes.string,
  mobileSignal: PropTypes.string,
  wifi: PropTypes.string,
  battery: PropTypes.string,
};

export default Header;
