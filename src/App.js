import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import RealsState from "./components/RealsState";
import Vehicle from "./components/Vehicle";
import Residential from "./components/Residential";
import Car from "./components/Car";
import BeautifulHouseforSale from "./components/BeautifulHouseforSale";
import Search from "./components/Search";
import MapView from "./components/MapView";
import CreatedeAd1 from "./components/CreatedeAd1";
import SearchVehicle from "./components/SearchVehicle";
import ViewType from "./components/ViewType";
import HondaCarForSale from "./components/HondaCarForSale";
import CreatedAdVehicle from "./components/CreatedAdVehicle";
import SelectCarFromTheList from "./components/SelectCarFromTheList";
import CreatedAdVehicle2 from "./components/CreatedAdVehicle2";
import ImgBasicInformation from "./components/ImgBasicInformation";
import SelectPayment from "./components/SelectPayment";
import SelectPaymentMethod from "./components/SelectPaymentMethod";
import RequestSubmit from "./components/RequestSubmit";
import ImgBasicInformationRealState from "./components/ImgBasicInformationRealState";
import MyProfile from "./components/MyProfile";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Faq from "./components/Faq";
import About from "./components/About";
import VehicleOpen from "./components/VehicleOpen";
import AdMangement from "./components/AdMangement";
import Favorite from "./components/FAVORITES";
import Message from "./components/Message";
import ReportProblem from "./components/ReportProblem";
import HomeProfile from "./components/HomeProfile";
import Login from './components/EnterTheCode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/realstate" element={<RealsState />} />
         
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/car" element={<Car />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/beautifulhouseforsale"
            element={<BeautifulHouseforSale />}
          />

          <Route path="/mapview" element={<MapView />} />
          <Route path="/createad1" element={<CreatedeAd1 />} />
          <Route path="/searchvehicle" element={<SearchVehicle />} />
          <Route path="/viewtype" element={<ViewType />} />
          <Route path="/hondacarforsale" element={<HondaCarForSale />} />
          <Route path="/createdadvehicle" element={<CreatedAdVehicle />} />
          <Route
            path="/selectcarfromthelist"
            element={<SelectCarFromTheList />}
          />
          <Route path="/createdadvehicle2" element={<CreatedAdVehicle2 />} />
          <Route
            path="/imgbasicinformation"
            element={<ImgBasicInformation />}
          />
          <Route path="/selectpayment" element={<SelectPayment />} />
          <Route
            path="/selectpaymentmethod"
            element={<SelectPaymentMethod />}
          />
          <Route path="/requestsubmit" element={<RequestSubmit />} />
          <Route
            path="/imgbasicinformationrealstate"
            element={<ImgBasicInformationRealState />}
          />

          <Route path="/myprofile" element={<MyProfile />} />

          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/vehicleopen" element={<VehicleOpen />} />
          <Route path="/AdMangement" element={<AdMangement />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/reportproblem" element={<ReportProblem />} />
          <Route path="/message" element={<Message />} />
          <Route path="/homeprofile" element={<HomeProfile />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
