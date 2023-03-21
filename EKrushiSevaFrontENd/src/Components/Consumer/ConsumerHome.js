import React, { useEffect } from "react";
import Carausol from "../Carosol/Carausol";
import Cards from "../Home/Cards";
import Footer from "../Home/Footer";
import ConsumerFooter from "./ConsumerFooter";
import ConsumerNavbar from "./ConsumerNavbar";
export default function ConsumerHome() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  sessionStorage.getItem("role");
  let v = sessionStorage.getItem("email");

  return (
    <div>
      <ConsumerNavbar />
      <Carausol></Carausol>
      <Cards></Cards>
      <ConsumerFooter />
    </div>
  );
}
