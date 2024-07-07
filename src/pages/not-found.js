import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <b className="found-6-results1">Found 6 results</b>
      <img className="chevron-left-icon13" alt="" src="/chevronleft.svg" />
      <div className="murglai-chicken">Murglai Chicken</div>
      <div className="not-found-child" />
      <div className="item-not-found">Item not found</div>
      <div className="try-searching-the-container">
        <p className="try-searching-the">Try searching the item with</p>
        <p className="try-searching-the">a different keyword.</p>
      </div>
      <img className="feathersearch-icon" alt="" src="/feathersearch.svg" />
    </div>
  );
};

export default NotFound;
