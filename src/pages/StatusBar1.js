import PropTypes from "prop-types";
import "./StatusBar1.css";

const StatusBar1 = ({ className = "", title }) => {
  return (
    <section className={`status-bar ${className}`}>
      <header className="top-status-bar">
        <img
          className="notch-icon1"
          loading="lazy"
          alt=""
          src="/notch@2x.png"
        />
        <div className="status-bar-left">
          <img
            className="left-side-icon1"
            loading="lazy"
            alt=""
            src="/left-side.svg"
          />
        </div>
        <div className="status-bar-right">
          <div className="right-side">
            <img
              className="mobile-signal-icon1"
              loading="lazy"
              alt=""
              src="/mobile-signal.svg"
            />
            <img className="wifi-icon1" loading="lazy" alt="" src="/wifi.svg" />
            <img
              className="battery-icon1"
              loading="lazy"
              alt=""
              src="/battery.svg"
            />
            <img
              className="recording-indicator-icon2"
              alt=""
              src="/recording-indicator.svg"
            />
          </div>
        </div>
      </header>
      <div className="left-title-right">
        <div className="left-accessory">
          <img
            className="angle-left-icon1"
            loading="lazy"
            alt=""
            src="/angleleft1.svg"
          />
          <a className="left-title2">Back</a>
        </div>
        <div className="page-title-container">
          <div className="title5">
            <a className="title6">{title}</a>
          </div>
        </div>
        <div className="right-accessory2">
          <div className="right-title2">Right Title</div>
        </div>
      </div>
    </section>
  );
};

StatusBar1.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default StatusBar1;
