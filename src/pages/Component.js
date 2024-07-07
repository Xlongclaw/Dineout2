import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardFood1 from "../components/CardFood1";
import CardFood from "../components/CardFood";
import "./Component.css";

const Component = () => {
  const navigate = useNavigate();

  const onCardFoodContainerClick = useCallback(() => {
    navigate("/reserve");
  }, [navigate]);

  return (
    <div className="component-1">
      <div className="reserve">
        <div className="barsstatus-bar-iphone-xon-parent">
          <div className="barsstatus-bar-iphone-xon">
            <div className="time-style">
              <div className="time">9:41</div>
            </div>
            <div className="connection-icons-wrapper">
              <div className="connection-icons">
                <img
                  className="cellular-connection-icon"
                  alt=""
                  src="/cellular-connection.svg"
                />
                <img className="wifi-icon2" alt="" src="/wifi2.svg" />
                <div className="battery">
                  <div className="border" />
                  <img className="cap-icon" alt="" src="/cap.svg" />
                  <div className="capacity" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="nearest-order-details-parent">
                <div className="nearest-order-details">
                  <h3 className="nearest-order">Nearest Order</h3>
                  <div className="emoji-wrapper">
                    <img
                      className="emoji-icon"
                      loading="lazy"
                      alt=""
                      src="/emoji.svg"
                    />
                  </div>
                </div>
                <div className="confused-order-nearby">
                  Confused? Order nearby!
                </div>
              </div>
              <div className="input8">
                <input
                  className="search-box"
                  placeholder="Search"
                  type="text"
                />
                <div className="search-wrapper">
                  <img className="search-icon" alt="" src="/search.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-one-wrapper">
            <div className="card-one">
              <CardFood1
                solariaTransmartMXMalang1="/solariatransmartmxmalang1-2@2x.png"
                solaria="Solaria "
                m="200 M"
                onCardFoodContainerClick={onCardFoodContainerClick}
              />
              <CardFood1
                solariaTransmartMXMalang1="/inginlebihdekatdenganpenikmatnyagokanaramenteppanhadirdipark23entertainmentcenter-3@2x.png"
                solaria="Gokana"
                m="582 M"
                propPadding="11.5px 0px"
              />
            </div>
          </div>
        </div>
        <div className="card-two-wrapper">
          <div className="card-two">
            <CardFood
              baksoBasoNyukNyangAtiRaj="/bakso---baso---nyuk-nyang---ati-raja-makassar---50-biji-2@2x.png"
              basoAtiRaja="Baso Ati Raja"
              m="600 M"
            />
            <CardFood
              baksoBasoNyukNyangAtiRaj="/8c85b0cacf1e8a92912e804a9e1607c0-2@2x.png"
              basoAtiRaja="Ichiban"
              m="680 M"
            />
          </div>
        </div>
      </div>
      <div className="reserve1">
        <div className="reserve-content">
          <div className="barsstatus-bar-iphone-xon1">
            <div className="time-style1">
              <a className="time1">9:41</a>
            </div>
            <div className="reserve-connection-icons-wrapper">
              <div className="reserve-connection-icons">
                <img
                  className="cellular-connection-icon1"
                  alt=""
                  src="/cellular-connection.svg"
                />
                <img className="wifi-icon3" alt="" src="/wifi2.svg" />
                <div className="battery1">
                  <div className="border1" />
                  <img className="cap-icon1" alt="" src="/cap.svg" />
                  <div className="capacity1" />
                </div>
              </div>
            </div>
          </div>
          <div className="title-page">
            <img
              className="icon-chevron-left"
              loading="lazy"
              alt=""
              src="/icon--chevronleft.svg"
            />
            <div className="reserve-wrapper">
              <a className="reserve2">Reserve</a>
            </div>
          </div>
        </div>
        <div className="restaurant-details">
          <div className="card-food">
            <img
              className="solaria-transmart-mx-malang-1-icon"
              loading="lazy"
              alt=""
              src="/solariatransmartmxmalang1-2-1@2x.png"
            />
            <div className="solaria-parent">
              <h2 className="solaria">{`Solaria `}</h2>
              <div className="solaria-adalah-restoran">
                Solaria adalah restoran lokal asli Indonesia yang berdiri sejak
                tahun 1995, merupakan restoran keluarga dengan konsep casual
                dining yang menyajikan menu-menu makanan khas yang disajikan
                secara fresh food (dimasak setelah makanan dipsesan).
              </div>
            </div>
            <div className="location-details">
              <img
                className="elmap-marker-icon"
                loading="lazy"
                alt=""
                src="/elmapmarker.svg"
              />
              <div className="m">200 M</div>
            </div>
            <div className="button1">
              <img
                className="button-child"
                loading="lazy"
                alt=""
                src="/rectangle-156-4.svg"
              />
              <div className="button2">Reserve Table</div>
            </div>
            <div className="button3">
              <img
                className="button-item"
                loading="lazy"
                alt=""
                src="/rectangle-156-4.svg"
              />
              <div className="button4">Self-Pick Up</div>
            </div>
          </div>
        </div>
        <div className="home-indicator26">
          <div className="bar" />
        </div>
      </div>
    </div>
  );
};

export default Component;
