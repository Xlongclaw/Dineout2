import StatusBar1 from "./StatusBar1";
import PropTypes from "prop-types";
import "./HelpAndSupport.css";

const HelpAndSupport = ({ className = "" }) => {
  return (
    <div className={`help-and-support ${className}`}>
      <div className="home-indicator2">
        <div className="home-indicator3" />
      </div>
      <StatusBar1 title="Help and Support" />
      <section className="body">
        <div className="content">
          <div className="help-and-support1">Help and Support</div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet consectetur. Sit pulvinar mauris mauris
            eu nibh semper nisl pretium laoreet. Sed non faucibus ac lectus eu
            arcu. Nulla sit congue facilisis vestibulum egestas nisl feugiat
            pharetra. Odio sit tortor morbi at orci ipsum dapibus interdum.
            Lorem felis est aliquet arcu nullam pellentesque. Et habitasse ac
            arcu et nunc euismod rhoncus facilisis sollicitudin.
          </div>
        </div>
      </section>
      <div className="home-indicator4">
        <div className="home-indicator5" />
      </div>
    </div>
  );
};

HelpAndSupport.propTypes = {
  className: PropTypes.string,
};

export default HelpAndSupport;
