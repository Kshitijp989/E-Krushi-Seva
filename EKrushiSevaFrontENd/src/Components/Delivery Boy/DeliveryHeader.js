import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function DeliveryHeader() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <Link
          to="/deliveryhome"
          class="navbar-brand text-info"
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
                to="/deliveryhome"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
               <b> Home</b>
              </Link>
            </li>
            <li class="nav-item  p-2 mx-4">
              <Link
                to="/deliveryProductInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                <b>Product Info</b>
              </Link>
            </li>
            <li class="nav-item  p-2 mx-4">
              <Link
                to="/deliveryCropInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                <b>Crop Info</b>
              </Link>
            </li>

            <li class="nav-item  p-2 mx-4 ">
              <Link
                to="/deliveryProfile"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                <b>Profile</b>
              </Link>
            </li>

            <li class="nav-item  p-2 mx-4 ml-5 mr-5">
              <b className="text-info">Delivery Boy</b>
            </li>

            <li class="nav-item mx-5">
              <Link to="/" style={{ textDecoration: "none", color: "#0F9D58" }}>
                <button className="btn btn-success " onClick={removeSession}>
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
