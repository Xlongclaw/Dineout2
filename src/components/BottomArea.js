import PropTypes from "prop-types";
import "./BottomArea.css";

const BottomArea = ({ className = "", createAnAccount }) => {
  return (
    <section className={`bottom-area ${className}`}>
      <div className="bottom-content">
        <button className="ctaprimary4">
          <div className="create-an-account4">{createAnAccount}</div>
        </button>
      </div>
      <div className="home-indicator29">
        <div className="home-indicator30" />
      </div>
    </section>
  );
};

BottomArea.propTypes = {
  className: PropTypes.string,
  createAnAccount: PropTypes.string,
};

export default BottomArea;
