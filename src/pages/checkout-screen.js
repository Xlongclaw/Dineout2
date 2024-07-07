import "./checkout-screen.css";

const CheckoutScreen = () => {
  return (
    <div className="checkout-screen">
      <div className="checkout1">Checkout</div>
      <div className="payment">Payment</div>
      <div className="checkout-screen-child" />
      <div className="proceed-to-payment1">Proceed to payment</div>
      <img className="chevron-left-icon11" alt="" src="/chevronleft.svg" />
      <div className="total-parent">
        <div className="total1">Total</div>
        <div className="rs11001">Rs.1100</div>
      </div>
      <div className="delivery-method-group">
        <div className="delivery-method1">Delivery method.</div>
        <div className="group-child39" />
        <div className="door-delivery-group">
          <div className="door-delivery1">Door delivery</div>
          <div className="group-child40" />
          <div className="group-child41" />
          <div className="group-child42" />
        </div>
        <div className="pick-up-group">
          <div className="door-delivery1">Pick up</div>
          <div className="group-child43" />
        </div>
      </div>
      <div className="payment-method1">Payment Method</div>
      <div className="checkout-screen-item" />
      <div className="card-group">
        <div className="card1">Card</div>
        <div className="group-child44" />
        <div className="group-child45" />
        <div className="group-child46" />
        <div className="group-child47" />
      </div>
      <div className="upi-transfer-group">
        <div className="card1">UPI Transfer</div>
        <div className="group-child48" />
        <div className="group-child45" />
        <div className="group-child50" />
      </div>
      <div className="gpay-group">
        <div className="gpay1">GPay</div>
        <div className="group-child51" />
        <div className="group-child52" />
        <div className="group-child53" />
      </div>
      <div className="paytm-group">
        <div className="card1">Paytm</div>
        <div className="group-child54" />
        <div className="group-child50" />
      </div>
    </div>
  );
};

export default CheckoutScreen;
