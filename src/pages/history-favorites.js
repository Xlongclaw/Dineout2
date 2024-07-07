import "./history-favorites.css";

const HistoryFavorites = () => {
  return (
    <div className="history-favorites">
      <div className="history">History</div>
      <div className="no-history-yet">No history yet</div>
      <div className="hit-the-orange-container">
        <p className="hit-the-orange">Hit the orange button down</p>
        <p className="hit-the-orange">below to Create an order</p>
      </div>
      <div className="history-favorites-child" />
      <div className="start-odering">Start odering</div>
      <img className="chevron-left-icon2" alt="" src="/chevronleft.svg" />
      <img className="vector-icon9" alt="" src="/vector7.svg" />
    </div>
  );
};

export default HistoryFavorites;
