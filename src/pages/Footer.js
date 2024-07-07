import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "", createAnAccount, propGap }) => {
  const footerStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <section className={`footer1 ${className}`} style={footerStyle}>
      <div className="account">
        <button className="ctaprimary1">
          <div className="create-an-account1">{createAnAccount}</div>
        </button>
      </div>
      <div className="home-indicator14">
        <div className="home-indicator15" />
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  createAnAccount: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default Footer;
