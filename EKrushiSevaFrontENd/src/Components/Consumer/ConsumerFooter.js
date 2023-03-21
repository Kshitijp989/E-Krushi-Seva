import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";

function ConsumerFooter() {
  return (
    <div>
      <footer class="bg-dark text-white sticky-bottom">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                E-KrushiSeva
              </h5>
              <p>
                Krishi Seva Portal is an online fruit, vegetable & grain store
                that is dedicated to providing services to consumers in making
                online marketing accessible to them. 
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Products
              </h5>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#"
                  class="text-white"
                >
                  Organic Products
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#"
                  class="text-white"
                >
                  Non Organic Products
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Useful links
              </h5>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/consumerHome"
                  class="text-white"
                >
                  HOME
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/consumerOrganicProduct"
                  class="text-white"
                >
                  OrganicProduct 
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/consumerNonOrganicProduct"
                  class="text-white"
                >
                  Non Organic Products
                </Link>
              </p>
              
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/consumeraboutus"
                  class="text-white"
                >
                  AboutUs
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i> TVM, Kerala
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>ekrushiseva@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9987800942
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9878787878
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2023 All rights reserved by :
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/consumeraboutus"
                >
                  <strong class="text-info">Team 14 CDAC TVM</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConsumerFooter;
