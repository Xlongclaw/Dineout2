import PropTypes from "prop-types";
import "./Offer2.css";

const Offer2 = ({
  className = "",
  group39335,
  discount15Off,
  specialPromoValidForBlack,
}) => {
  return (
    <div className={`offer5 ${className}`}>
      <img className="offer-child2" loading="lazy" alt="" src={group39335} />
      <div className="offer-discount">
        <div className="discount-15-off-parent1">
          <h3 className="discount-15-off2">{discount15Off}</h3>
          <div className="special-promo-valid4">
            {specialPromoValidForBlack}
          </div>
        </div>
      </div>
    </div>
  );
};

Offer2.propTypes = {
  className: PropTypes.string,
  group39335: PropTypes.string,
  discount15Off: PropTypes.string,
  specialPromoValidForBlack: PropTypes.string,
};

export default Offer2;
