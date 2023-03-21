import Cards from "../Home/Cards";
import Carausol from "../Carosol/Carausol";
import Footer from "../Home/Footer";
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";
import AdminFooter from "./AdminFooter";
export default function AdminHome() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "ADMIN"
    ) {
      window.location.href = "/login";
    }
  }, []);
  let y = localStorage.getItem("email");
  return (
    <div>
      <AdminNavbar />

      <Carausol></Carausol>
      <Cards></Cards>
      <AdminFooter />
    </div>
  );
}
