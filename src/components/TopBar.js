import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TopBar.css";

const TopBar = ({ className = "", statusIconsAlignSelf, statusIconsWidth }) => {
  const topBarStyle = useMemo(() => {
    return {
      alignSelf: statusIconsAlignSelf,
      width: statusIconsWidth,
    };
  }, [statusIconsAlignSelf, statusIconsWidth]);

  return (
    <div className={`top-bar ${className}`} style={topBarStyle}>
      <div className="left-top">
        <div className="top-buttons">
          <img
            className="left-side-icon4"
            loading="lazy"
            alt=""
            src="/left-side1.svg"
          />
          <div className="status-icons">
            <div className="signal">
              <img
                className="angle-left-icon4"
                loading="lazy"
                alt=""
                src="/angleleft1.svg"
              />
              <a className="left-title5">Back</a>
            </div>
          </div>
        </div>
        <div className="right-top">
          <div className="network-status">
            <img
              className="mobile-signal-icon4"
              loading="lazy"
              alt=""
              src="/mobile-signal1.svg"
            />
            <img
              className="wifi-icon6"
              loading="lazy"
              alt=""
              src="/wifi1.svg"
            />
            <img
              className="battery-icon4"
              loading="lazy"
              alt=""
              src="/battery1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  statusIconsAlignSelf: PropTypes.any,
  statusIconsWidth: PropTypes.any,
};

export default TopBar;
