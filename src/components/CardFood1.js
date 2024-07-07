import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardFood1.css";

const CardFood1 = ({
  className = "",
  solariaTransmartMXMalang1,
  solaria,
  m,
  propPadding,
  onCardFoodContainerClick,
}) => {
  const cardFoodStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigate = useNavigate();

  const onCardFoodContainerClick1 = useCallback(() => {
    navigate("/reserve");
  }, [navigate]);

  return (
    <div
      className={`card-food1 ${className}`}
      onClick={onCardFoodContainerClick}
      style={cardFoodStyle}
    >
      <img
        className="solaria-transmart-mx-malang-1-icon1"
        loading="lazy"
        alt=""
        src={solariaTransmartMXMalang1}
      />
      <div className="solaria-wrapper">
        <h2 className="solaria1">{solaria}</h2>
      </div>
      <div className="location-one-icons">
        <img
          className="elmap-marker-icon1"
          loading="lazy"
          alt=""
          src="/elmapmarker.svg"
        />
        <div className="m1">{m}</div>
      </div>
      <div className="button5">
        <img
          className="button-inner"
          loading="lazy"
          alt=""
          src="/rectangle-156.svg"
        />
        <a className="button6">Order</a>
      </div>
    </div>
  );
};

CardFood1.propTypes = {
  className: PropTypes.string,
  solariaTransmartMXMalang1: PropTypes.string,
  solaria: PropTypes.string,
  m: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,

  /** Action props */
  onCardFoodContainerClick: PropTypes.func,
};

export default CardFood1;
