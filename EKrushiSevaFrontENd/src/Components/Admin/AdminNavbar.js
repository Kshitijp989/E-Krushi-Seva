import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <Link
          to="/adminhome"
          className="navbar-brand px-4 text-info"
        >
         <b> E-KrushiSeva</b>
        </Link>

        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item p-2 mx-4 ml-5">
              <Link
                to="/adminhome"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                <b>Home</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-4">
              <Link
                to="/userdetails"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                <b>User Details</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-4">
              <Link
                to="/addDeliveryBoy"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
              <b>  Delivery Boy</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-4 mr-5">
            <Link
              to="/adminAboutus"
              style={{ textDecoration: "none", color: "#0F9D58" }}
            >
            <b>  About Us</b>
            </Link>
            </li>
            <li class="nav-item p-2 mx-4 mr-5"><b className="text-info">Admin </b></li>
            <li class="nav-item mx-5 ml-5">
            <Link to="/" style={{ textDecoration: "none", color: "#0F9D58" }}>
              <button className="btn btn-success " onClick={removeSession}>
                {" "}
                Logout
              </button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
