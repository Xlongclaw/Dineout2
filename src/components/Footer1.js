import PropTypes from "prop-types";
import "./Footer1.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer2 ${className}`}>
      <div className="menu">
        <img className="vector-icon3" alt="" src="/vector1.svg" />
        <div className="wallet-icon">
          <img
            className="wallet-icon1"
            loading="lazy"
            alt=""
            src="/wallet.svg"
          />
        </div>
        <div className="home-button">
          <div className="home">
            <div className="house-wrapper">
              <img
                className="house-icon"
                loading="lazy"
                alt=""
                src="/house@2x.png"
              />
            </div>
            <a className="home1">Home</a>
          </div>
          <div className="favourite-button">
            <div className="favourite">
              <div className="heart-wrapper">
                <img
                  className="heart-icon"
                  loading="lazy"
                  alt=""
                  src="/heart@2x.png"
                />
              </div>
              <div className="favourite1">Favourite</div>
            </div>
          </div>
          <div className="wallet-button">
            <div className="wallet">Wallet</div>
          </div>
          <div className="offer-profile">
            <div className="offer6">
              <div className="offer-profile-s-v-g">
                <img
                  className="discount-fill-icon"
                  loading="lazy"
                  alt=""
                  src="/discount-fill@2x.png"
                />
              </div>
              <div className="offer7">Offer</div>
            </div>
            <div className="profile">
              <div className="user-wrapper">
                <img
                  className="user-icon"
                  loading="lazy"
                  alt=""
                  src="/user.svg"
                />
              </div>
              <div className="profile1">Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-indicator27">
        <div className="home-indicator28" />
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
