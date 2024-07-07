import TopBar from "./TopBar";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <header className={`main ${className}`}>
      <img className="notch-icon5" loading="lazy" alt="" src="/notch@2x.png" />
      <TopBar />
    </header>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
