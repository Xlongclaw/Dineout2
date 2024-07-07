import PropTypes from "prop-types";
import "./CardFood.css";

const CardFood = ({
  className = "",
  baksoBasoNyukNyangAtiRaj,
  basoAtiRaja,
  m,
}) => {
  return (
    <div className={`card-food2 ${className}`}>
      <img
        className="bakso-baso-nyuk-nyang-at-icon"
        loading="lazy"
        alt=""
        src={baksoBasoNyukNyangAtiRaj}
      />
      <div className="baso-ati-raja-wrapper">
        <h2 className="baso-ati-raja">{basoAtiRaja}</h2>
      </div>
      <div className="location-two-icons">
        <input className="elmap-marker" type="radio" />
        <div className="m2">{m}</div>
      </div>
      <div className="button7">
        <img
          className="rectangle-icon"
          loading="lazy"
          alt=""
          src="/rectangle-156.svg"
        />
        <a className="button8">Order</a>
      </div>
    </div>
  );
};

CardFood.propTypes = {
  className: PropTypes.string,
  baksoBasoNyukNyangAtiRaj: PropTypes.string,
  basoAtiRaja: PropTypes.string,
  m: PropTypes.string,
};

export default CardFood;
