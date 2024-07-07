import Offer2 from "../components/Offer2";
import Footer from "../components/Footer1";
import "./Offer1.css";

const Offer1 = () => {
  return (
    <div className="offer2">
      <div className="home-indicator14">
        <div className="home-indicator15" />
      </div>
      <section className="status-bar1">
        <div className="top-status-bar1">
          <img
            className="notch-icon1"
            loading="lazy"
            alt=""
            src="/notch@2x.png"
          />
          <div className="status-bar-left1">
            <img
              className="left-side-icon1"
              loading="lazy"
              alt=""
              src="/left-side.svg"
            />
          </div>
          <div className="status-bar-right1">
            <div className="right-side1">
              <img
                className="mobile-signal-icon1"
                loading="lazy"
                alt=""
                src="/mobile-signal.svg"
              />
              <img
                className="wifi-icon1"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
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
        </div>
        <div className="left-title-right1">
          <div className="left-accessory1">
            <img className="angle-left-icon1" alt="" src="/angleleft1.svg" />
            <div className="left-title1">Back</div>
          </div>
          <div className="title4">
            <h3 className="title5">Special Offer</h3>
          </div>
          <div className="right-accessory2">
            <div className="right-title2">Right Title</div>
          </div>
        </div>
      </section>
      <section className="content3">
        <img
          className="hamburger-menu-icon1"
          loading="lazy"
          alt=""
          src="/hamburger-menu1.svg"
        />
        <div className="content-inner">
          <div className="offer-group">
            <Offer2
              group39335="/group-393352.svg"
              discount15Off="Discount 15% off"
              specialPromoValidForBlack="Special Promo valid for Black Friday"
            />
            <Offer2
              group39335="/group-39335-12.svg"
              discount15Off="Special 5% off"
              specialPromoValidForBlack="Special Weekend deal promo"
            />
            <Offer2
              group39335="/group-39335-21.svg"
              discount15Off="Cashback 15%  "
              specialPromoValidForBlack="Special Promo valid for today"
            />
            <div className="offer3">
              <img
                className="offer-item"
                loading="lazy"
                alt=""
                src="/group-393352.svg"
              />
              <div className="offer-inner2">
                <div className="discount-15-off-group">
                  <h3 className="discount-15-off-container1">
                    <b>Special 15% off</b>
                  </h3>
                  <div className="special-promo-valid1">
                    Special Promo valid for Black Friday
                  </div>
                </div>
              </div>
            </div>
            <Offer2
              group39335="/group-39335-41.svg"
              discount15Off="Discount 15% off"
              specialPromoValidForBlack="Special Promo valid for Black Friday"
            />
            <Offer2
              group39335="/group-39335-12.svg"
              discount15Off="Discount 15% off"
              specialPromoValidForBlack="Special Promo valid for Black Friday"
            />
          </div>
        </div>
      </section>
      <section className="background">
        <img
          className="background-blur-icon"
          alt=""
          src="/background-blur.svg"
        />
        <div className="background-child" />
      </section>
      <section className="lorem-ipsum">
        <div className="lorem-ipsum-child" />
        <div className="bottom-navigation">
          <div className="home-indicator16">
            <div className="home-indicator17" />
          </div>
          <img className="cross-icon" loading="lazy" alt="" src="/cross.svg" />
        </div>
        <div className="special-offer">
          <h2 className="special-offer1">Special Offer</h2>
        </div>
        <div className="tag">
          <img
            className="tag-discount-svgrepo-com-1-icon"
            loading="lazy"
            alt=""
            src="/tagdiscountsvgrepocom-1.svg"
          />
        </div>
        <div className="discount-off">
          <h1 className="discount-15-off">Discount 15% off</h1>
        </div>
        <div className="black-friday">
          <div className="special-promo-valid2">
            Special Promo valid for Black Friday
          </div>
        </div>
        <div className="disc-copy">
          <div className="disc">
            <b className="disc35">DISC35</b>
            <img
              className="copy-icon"
              loading="lazy"
              alt=""
              src="/copy@2x.png"
            />
          </div>
        </div>
        <div className="lorem-ipsum-inner">
          <div className="line-div" />
        </div>
        <div className="terms">
          <div className="terms-and-conditions">Terms and Conditions</div>
        </div>
        <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
          <div className="lorem-ipsum-dolor-container">
            <ul className="lorem-ipsum-dolor-sit-amet-co">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
        </div>
        <div className="ut-enim-ad-minim-veniam-quis-wrapper">
          <div className="ut-enim-ad-container">
            <ul className="ut-enim-ad-minim-veniam-quis">
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </ul>
          </div>
        </div>
        <div className="duis-aute-irure-dolor-in-repre-wrapper">
          <div className="duis-aute-irure-container">
            <ul className="duis-aute-irure-dolor-in-repre">
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
            </ul>
          </div>
        </div>
        <div className="create-account">
          <button className="ctaprimary1">
            <div className="create-an-account1">Use Promo</div>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Offer1;
