import "./my-offers.css";

const MyOffers = () => {
  return (
    <div className="my-offers">
      <div className="my-offers1">My offers</div>
      <img className="chevron-left-icon5" alt="" src="/chevronleft.svg" />
      <div className="ohh-snap-no">ohh snap! No offers yet</div>
      <div className="bella-doset-have-container">
        <p className="bella-doset-have">Bella dose’t have any offers</p>
        <p className="bella-doset-have">yet please check again.</p>
      </div>
    </div>
  );
};

export default MyOffers;
