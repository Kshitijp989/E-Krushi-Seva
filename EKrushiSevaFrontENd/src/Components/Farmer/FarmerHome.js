import React, { useEffect } from "react";
import Cards from "../Home/Cards";
import Carausol from "../Carosol/Carausol";
import Footer from "../Home/Footer";
import FarmernavBar from "./FarmerNavbar";
import FarmerFooter from "./FarmerFooter";

export default function FarmerHome() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "FARMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <FarmernavBar></FarmernavBar>
      <Carausol />
      <Cards></Cards>
      <FarmerFooter />
    </>
  );
}
