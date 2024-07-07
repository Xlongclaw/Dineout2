import StatusBar1 from "./StatusBar1";
import PropTypes from "prop-types";
import "./PrivacyPolicy.css";

const PrivacyPolicy = ({ className = "" }) => {
  return (
    <div className={`privacy-policy1 ${className}`}>
      <div className="home-indicator8">
        <div className="home-indicator9" />
      </div>
      <StatusBar1 title="Privacy Policy" />
      <section className="content2">
        <div className="privacy-policy-for-dineout-parent">
          <div className="privacy-policy-for">Privacy Policy for Dineout</div>
          <div className="at-dineout-accessible-container">
            <p className="at-dineout-accessible">
              At DIneout, accessible from DIneout.com, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by DIneout and how we use it.
            </p>
            <p className="if-you-have">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p className="this-privacy-policy">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in DIneout. This policy is not
              applicable to any information collected offline or via channels
              other than this website. Our Privacy Policy was created with the
              help of the Free Privacy Policy Generator.
            </p>
          </div>
        </div>
      </section>
      <div className="home-indicator10">
        <div className="home-indicator11" />
      </div>
    </div>
  );
};

PrivacyPolicy.propTypes = {
  className: PropTypes.string,
};

export default PrivacyPolicy;
