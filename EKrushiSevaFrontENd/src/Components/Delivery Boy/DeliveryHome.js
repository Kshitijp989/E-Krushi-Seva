import Carausol from "../Carosol/Carausol";
import React from "react";
import Footer from "../Home/Footer";
import DeliveryHeader from "./DeliveryHeader";
import DeliveryFooter from "./DeliveryFooter";
import { useEffect } from "react";
export default function DeliveryHome() {
  
useEffect(() => {
  if (
    sessionStorage.getItem("role") === "null" ||
    sessionStorage.getItem("role") != "DELIVERY_BOY"
  ) {
    window.location.href = "/login";
  }
}, []);
  return (
    <>
      <DeliveryHeader />
      <Carausol />
      <DeliveryFooter />
    </>
  );
}
