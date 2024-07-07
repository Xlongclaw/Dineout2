import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import IPhone11ProMax from "./pages/i-phone11-pro-max";
import IPhone11ProMax1 from "./pages/i-phone11-pro-max1";
import MyProfile from "./pages/my-profile";
import CartScreen from "./pages/cart-screen";
import HistoryFavorites from "./pages/history-favorites";
import Order from "./pages/order";
import DeliveryScreen from "./pages/delivery-screen";
import MyOffers from "./pages/my-offers";
import ProfileScreen from "./pages/profile-screen";
import CheckoutScreen from "./pages/checkout-screen";
import SearchScreen from "./pages/search-screen";
import NotFound from "./pages/not-found";
import OrderScreen from "./pages/order-screen";
import Vector from "./pages/vector";
import ContactUS from "./pages/ContactUS";
import StatusBar1 from "./pages/StatusBar1";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import PhoneVerifyOtp1 from "./pages/PhoneVerifyOtp1";
import PhoneVerifyOtp from "./pages/PhoneVerifyOtp";
import SignUp from "./pages/SignUp";
import Component from "./pages/Component";
import NoInternet from "./pages/NoInternet";
import HelpAndSupport from "./pages/HelpAndSupport";
import Offer1 from "./pages/Offer1";
import SideNavbar from "./pages/SideNavbar";
import ProfileOptions from "./components/ProfileOptions";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-max-1":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-max-2":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile":
        title = "";
        metaDescription = "";
        break;
      case "/cart-screen":
        title = "";
        metaDescription = "";
        break;
      case "/history-favorites":
        title = "";
        metaDescription = "";
        break;
      case "/order":
        title = "";
        metaDescription = "";
        break;
      case "/delivery-screen":
        title = "";
        metaDescription = "";
        break;
      case "/my-offers":
        title = "";
        metaDescription = "";
        break;
      case "/profile-screen":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-screen":
        title = "";
        metaDescription = "";
        break;
      case "/search-screen":
        title = "";
        metaDescription = "";
        break;
      case "/not-found":
        title = "";
        metaDescription = "";
        break;
      case "/order-screen":
        title = "";
        metaDescription = "";
        break;
      case "/vector":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
     
     
      <Route path="/home-page" element={<HomePage />} />
      

      <Route path="/i" element={<IPhone11ProMax />} />
      <Route path="/iphone-11-pro-max-2" element={<IPhone11ProMax1 />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/cart-screen" element={<CartScreen />} />
      <Route path="/history-favorites" element={<HistoryFavorites />} />
      <Route path="/order" element={<Order />} />
      <Route path="/delivery-screen" element={<DeliveryScreen />} />
      <Route path="/my-offers" element={<MyOffers />} />
      <Route path="/profile-screen" element={<ProfileScreen />} />
      <Route path="/checkout-screen" element={<CheckoutScreen />} />
      <Route path="/search-screen" element={<SearchScreen />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/order-screen" element={<OrderScreen />} />
      <Route path="/vector" element={<Vector />} />
      <Route path="/ContactUS" element={<ContactUS />} />
      <Route path="/" element={<Component/>} />
      <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
      <Route path="/NoInternet" element={< NoInternet/>} />
      <Route path="/Offer1" element={<Offer1/>} />
      <Route path="/PhoneVerifyOtp" element={<PhoneVerifyOtp />} />
      <Route path="/PhoneVerifyOtp1" element={<PhoneVerifyOtp1 />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/SideNavbar" element={<SideNavbar/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/StatusBar1" element={<StatusBar1 />} />
      <Route path="/profile-options" element={<ProfileOptions/>} />
    </Routes>
  );
}
export default App;
