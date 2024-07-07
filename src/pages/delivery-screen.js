import "./delivery-screen.css";

const DeliveryScreen = () => {
  return (
    <div className="delivery-screen">
      <div className="checkout">Checkout</div>
      <div className="delivery">Delivery</div>
      <div className="delivery-screen-child" />
      <div className="proceed-to-payment">Proceed to payment</div>
      <img className="chevron-left-icon4" alt="" src="/chevronleft.svg" />
      <div className="address-details-parent">
        <div className="address-details">Address details</div>
        <div className="change">change</div>
        <div className="group-child26" />
        <div className="richa-singh-parent">
          <div className="richa-singh1">Richa Singh</div>
          <div className="jama-masjid-road1">
            Jama Masjid Road, Near Raja Palace,Delhi-6
          </div>
          <div className="div21">+91 1234567890</div>
          <div className="group-child27" />
          <div className="group-child28" />
        </div>
        <div className="dashiconsbank1" />
      </div>
      <div className="delivery-method-parent">
        <div className="delivery-method">Delivery method.</div>
        <div className="total">Total</div>
        <div className="rs1100">Rs.1100</div>
        <div className="group-child29" />
        <div className="door-delivery-parent">
          <div className="door-delivery">Door delivery</div>
          <div className="group-child30" />
          <div className="group-child31" />
          <div className="group-child32" />
        </div>
        <div className="pick-up-parent">
          <div className="door-delivery">Pick up</div>
          <div className="group-child33" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryScreen;
