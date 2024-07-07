import FrameComponent from "../components/FrameComponent";
import "./NoInternet.css";

const NoInternet = () => {
  return (
    <div className="no-internet">
      <FrameComponent />
      <div className="no-internet-inner">
        <button className="rectangle-parent">
          <div className="frame-child" />
          <div className="try-again">Try again</div>
        </button>
      </div>
    </div>
  );
};

export default NoInternet;
