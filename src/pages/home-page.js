import "./home-page.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <b className="delicious-food-for-container">
        <p className="delicious">{`Delicious `}</p>
        <p className="delicious">food for you</p>
      </b>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="home-page-child" />
      <div className="search">Search</div>
      <div className="see-more">see more</div>
      <div className="indian">Indian</div>
      <div className="chinese">Chinese</div>
      <div className="italian">Italian</div>
      <div className="continental">Continental</div>
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="alfredo-pasta-veg-container">
          <p className="delicious">Alfredo</p>
          <p className="delicious">Pasta (VEG)</p>
        </div>
        <b className="rs-340">Rs. 340</b>
      </div>
      <div className="rectangle-group">
        <div className="group-item" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="spicy-fried-rice-container">
          <p className="delicious">Spicy Fried</p>
          <p className="delicious">Rice</p>
        </div>
        <b className="rs-340">Rs.450</b>
      </div>
      <div className="home-page-item" />
      <img
        className="heroicons-solidhome"
        alt=""
        src="/heroiconssolidhome.svg"
      />
      <img className="icsharp-history-icon" alt="" src="/icsharphistory.svg" />
      <img className="shopping-cart-icon" alt="" src="/shoppingcart.svg" />
      <img className="user-icon" alt="" src="/user.svg" />
      <img className="heart-icon" alt="" src="/heart.svg" />
    </div>
  );
};

export default HomePage;
