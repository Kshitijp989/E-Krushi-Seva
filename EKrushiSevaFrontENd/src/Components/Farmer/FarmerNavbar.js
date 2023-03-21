import { Link } from "react-router-dom";

export default function FarmernavBar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand px-4 text-info" href="/consumerhome">
          <b>E-KrushiSeva </b>
        </a>

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
            <li class="nav-item p-2 mx-2">
              <Link to="/farmerhome"
                style={{ textDecoration: "none", color: "#0F9D58" }}><b>Home</b></Link>

              {/* <a class="nav-link active" aria-current="page" href="farmerhome">
                Home
              </a> */}
            </li>
            <li class="nav-item p-2 mx-2">
              <Link  to="/addfarmproducts"
                style={{ textDecoration: "none", color: "#0F9D58" }}><b>AddProducts</b></Link>
              {/* <a
                class="nav-link active"
                aria-current="page"
                href="addfarmproducts"
              >
                AddFarmProducts
              </a> */}
            </li>
            <li class="nav-item p-2 mx-2">
              <Link to="/farmerShowProduct"
                style={{ textDecoration: "none", color: "#0F9D58" }}><b>ShowProducts</b></Link>

              {/* <a
                class="nav-link active"
                aria-current="page"
                href="farmerShowProduct"
              >
                ShowProducts
              </a> */}
            </li>
            <li class="nav-item p-2 mx-2">
              <Link  to="/addCropInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }} ><b>AddCropInfo</b></Link>
              {/* <a class="nav-link active" aria-current="page" href="addCropInfo">
                AddCropInfo
              </a> */}
            </li>

            <li class="nav-item p-2 mx-2">

             <Link to="/farmerShowCropInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }}><b>ShowCropInfo</b></Link>
              {/* <a
                class="nav-link active"
                aria-current="page"
                href="farmerShowCropInfo"
              >
                ShowCropInfo
              </a> */}
            </li>

            <li class="nav-item p-2 mx-2 mr-5">
              <Link to="/farmerProfile"
                style={{ textDecoration: "none", color: "#0F9D58" }} ><b>Profile</b></Link>

              {/* <a class="nav-link" href="farmerProfile">
                Profile
              </a> */}
            </li>
            <li class="nav-item p-2 ml-5">
            <b className="text-info">Farmer</b>
            </li>

            <li class="nav-item mx-5 ml-5">
              <button className="btn btn-success " onClick={removeSession}>
                Logout
              </button>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
