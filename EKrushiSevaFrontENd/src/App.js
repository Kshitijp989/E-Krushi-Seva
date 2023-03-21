import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/LogFiles/Register";
import Login from "./Components/LogFiles/Login";
import AboutUs from "./Components/Home/MemberImages/AboutUs";
import ImpLinks from "./Components/Home/ImpLinks";
import Product from "./Components/Product/Product";

import AdminHome from "./Components/Admin/AdminHome";
import { UserDetails } from "./Components/Admin/UserDetails";
import AddDeliveryBoy from "./Components/Admin/AddDeliveyBoy";
import ConsumerHome from "./Components/Consumer/ConsumerHome";
import DeliveryHome from "./Components/Delivery Boy/DeliveryHome";
import FarmerHome from "./Components/Farmer/FarmerHome";
import AdminAboutUs from "./Components/Admin/AdminAboutUs";
import ConsumerCropInfo from "./Components/Consumer/ConsumerCropInfo";
import ConsumerOrder from "./Components/Consumer/ConsumerOrder";
import ConsumerViewProduct from "./Components/Consumer/ConsumerViewProduct";
import ConsumerProfile from "./Components/Consumer/ConsumerProfile";
import FarmerAddProduct from "./Components/Farmer/FarmerAddImage";
import AddFarmProducts from "./Components/Farmer/AddFarmProducts";
import AddCropInfo from "./Components/Farmer/AddCropInfo";
import FarmerAddImage from "./Components/Farmer/FarmerAddImage";
import AddCropimage from "./Components/Farmer/AddCropimage";
import OrganicProduct from "./Components/Product/OrganiProduct";
import NonOrganicProduct from "./Components/Product/NonOrganicProduct";
import ConsumerOrganicProduct from "./Components/Consumer/ConsumerOrganicProduct";
import ConsumerNonOrganicProduct from "./Components/Consumer/ConsumerNonOrganicProduct";
import FarmerProfile from "./Components/Farmer/FarmerProfile";
import DeliveryProductInfo from "./Components/Delivery Boy/DeliveryProductInfo";
import DeliveryCropInfo from "./Components/Delivery Boy/DeliveryCropInfo";
import DeliveryProfile from "./Components/Delivery Boy/DeliveryProfile";
import EmailVerify from "./Components/LogFiles/EmailVerify";
import OtpVerify from "./Components/LogFiles/OtpVerify";
import PasswordChange from "./Components/LogFiles/PasswordChange";
import FarmerShowProduct from "./Components/Farmer/FarmerShowProduct";
import FarmerShowCropInfo from "./Components/Farmer/FarmerShowCropInfo";
import DeliveryOtpVerify from "./Components/Delivery Boy/DeliveryOtpVerify";
import CropInfo from "./Components/Home/CropInfo";
import ConsumerAboutUs from "./Components/Consumer/ConsumerAboutUs";
import ConsumerFooter from "./Components/Consumer/ConsumerFooter";
import DeliveryFooter from "./Components/Delivery Boy/DeliveryFooter";
export default function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/implinks" element={<ImpLinks></ImpLinks>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/adminAboutus" element={<AdminAboutUs />}></Route>
        <Route path="/userdetails" element={<UserDetails />}></Route>
        <Route path="/addDeliveryBoy" element={<AddDeliveryBoy />}></Route>
        <Route path="/organicProduct" element={<OrganicProduct />}></Route>
        <Route path="/emailVerify" element={<EmailVerify />}></Route>
        <Route path="/otpVerify" element={<OtpVerify />}></Route>
        <Route path="/passwordChange" element={<PasswordChange />}></Route>
        <Route
          path="/nonOrganicProduct"
          element={<NonOrganicProduct />}
        ></Route>
        <Route path="/deliveryhome" element={<DeliveryHome />}></Route>
        <Route path="/farmerhome" element={<FarmerHome />}></Route>

        <Route path="/consumerCropInfo" element={<ConsumerCropInfo />}></Route>
        <Route path="/consumerHome" element={<ConsumerHome />}></Route>
        <Route path="/consumerOrder" element={<ConsumerOrder />}></Route>
        <Route path="/consumerProfile" element={<ConsumerProfile />}></Route>
        <Route
          path="/consumerViewProduct"
          element={<ConsumerViewProduct />}
        ></Route>
        <Route
          path="/consumerOrganicProduct"
          element={<ConsumerOrganicProduct />}
        ></Route>
        <Route
          path="/consumerNonOrganicProduct"
          element={<ConsumerNonOrganicProduct />}
        ></Route>

        <Route path="/consumeraboutus" element={<ConsumerAboutUs />}></Route>
        <Route path="/consumerfooter" element={<ConsumerFooter/>}></Route>


        <Route path="/farmerAddImage" element={<FarmerAddImage/>}></Route>
        <Route path="/farmerhome" element={<FarmerHome/>}></Route>
        <Route path="/farmerProfile" element={<FarmerProfile />}></Route>
        <Route
          path="/farmerShowProduct"
          element={<FarmerShowProduct />}
        ></Route>
        <Route
          path="/farmerShowCropInfo"
          element={<FarmerShowCropInfo />}
        ></Route>
        <Route
          path="/addfarmproducts"
          element={<AddFarmProducts></AddFarmProducts>}
        ></Route>
        <Route path="/addCropImage" element={<AddCropimage />}></Route>
        <Route path="/addCropInfo" element={<AddCropInfo />}></Route>
        <Route
          path="/deliveryProductInfo"
          element={<DeliveryProductInfo />}
        ></Route>
        <Route
          path="/deliveryOtpverify"
          element={<DeliveryOtpVerify />}
        ></Route>
        <Route path="/cropInfo" element={<CropInfo />}></Route>
        <Route path="/deliveryCropInfo" element={<DeliveryCropInfo />}></Route>
        <Route path="/deliveryProfile" element={<DeliveryProfile />}></Route>
        <Route path="/deliveryfooter" element={<DeliveryFooter />}></Route>

      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
}
