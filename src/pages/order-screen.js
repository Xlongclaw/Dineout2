import "./order-screen.css";

const OrderScreen = () => {
  return (
    <div className="order-screen">
      <img className="chevron-left-icon14" alt="" src="/chevronleft.svg" />
      <img className="heart-icon3" alt="" src="/heart3.svg" />
      <img className="mask-group-icon13" alt="" src="/mask-group@2x.png" />
      <div className="alfredo-pasta-nv-container">
        <span>Alfredo Pasta (</span>
        <span className="nv">NV</span>
        <span>)</span>
      </div>
      <div className="delivery-info">Delivery info</div>
      <div className="return-policy">Return policy</div>
      <div className="delivered-between-monday">
        Delivered between monday aug and thursday 20 from 8pm to 9 Pm
      </div>
      <div className="no-return-policy">{`No Return Policy T&C Applied.`}</div>
      <b className="rs3202">Rs.320</b>
      <img className="order-screen-child" alt="" src="/group-6.svg" />
      <div className="order-screen-item" />
      <div className="add-to-cart">Add to cart</div>
    </div>
  );
};

export default OrderScreen;
