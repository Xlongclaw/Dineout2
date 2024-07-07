import "./order.css";

const Order = () => {
  return (
    <div className="order">
      <div className="orders1">Orders</div>
      <div className="no-orders-yet">No orders yet</div>
      <div className="hit-the-orange-container1">
        <p className="hit-the-orange1">Hit the orange button down</p>
        <p className="hit-the-orange1">below to Create an order</p>
      </div>
      <div className="order-child" />
      <div className="start-odering1">Start odering</div>
      <img className="chevron-left-icon3" alt="" src="/chevronleft.svg" />
      <img className="order-item" alt="" src="/group-66.svg" />
    </div>
  );
};

export default Order;
