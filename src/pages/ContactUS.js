import StatusBar1 from "./StatusBar1";
import Footer from "./Footer";
import PropTypes from "prop-types";
import "./ContactUS.css";

const ContactUS = ({ className = "" }) => {
  return (
    <div className={`contact-us ${className}`}>
      <div className="home-indicator6">
        <div className="home-indicator7" />
      </div>
      <StatusBar1 title="Contact Us" />
      <section className="content1">
        <div className="contact-info">
          <div className="restaurant-info">
            <div className="contact-us-for">Contact us for Dineout</div>
          </div>
          <div className="address-info">
            <div className="address-container">
              <div className="address">Address</div>
            </div>
            <div className="house-72-road-container">
              <p className="house-72-road">{`House# 72, Road# 21, Banani, Dhaka-1213 (near Banani Bidyaniketon School &`}</p>
              <p className="college-beside-university">
                {" "}
                College, beside University of South Asia)
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="call-13301">Call : 13301 (24/7)</p>
              <p className="email-supportpathaocom">
                Email : support@pathao.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="form">
        <div className="input-field">
          <div className="button-container1">
            <div className="send-message">Send Message</div>
          </div>
          <div className="input4">
            <div className="input-boxes" />
            <input className="name2" placeholder="Name" type="text" />
          </div>
          <div className="input5">
            <div className="input-child1" />
            <input className="name3" placeholder="Email" type="text" />
          </div>
          <div className="input6">
            <div className="input-child2" />
            <div className="frame-div">
              <input className="group-input" type="checkbox" />
            </div>
            <div className="input-dropdown">
              <div className="dropdown-icon">
                <img
                  className="down-arrow-icon2"
                  loading="lazy"
                  alt=""
                  src="/down-arrow1@2x.png"
                />
              </div>
              <div className="separator" />
            </div>
            <div className="placeholder1">
              <div className="div">+880</div>
            </div>
            <div className="number-field">
              <div className="your-mobile-number1">Your mobile number</div>
            </div>
          </div>
          <textarea
            className="input7"
            placeholder="Write your text"
            rows={6}
            cols={18}
          />
        </div>
      </section>
      <Footer createAnAccount="Send Message" />
    </div>
  );
};

ContactUS.propTypes = {
  className: PropTypes.string,
};

export default ContactUS;
