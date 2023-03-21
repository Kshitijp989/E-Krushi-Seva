import React, { useState, useEffect } from "react";
import axios from "axios";

import "../Consumer/profile.css";
import DeliveryHeader from "./DeliveryHeader";
import DeliveryFooter from "./DeliveryFooter";

export default function DeliveryProfile() {
  const [product, setProduct] = useState([{}]);
  let email = sessionStorage.getItem("email");
  useEffect(async () => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "DELIVERY_BOY"
    ) {
      window.location.href = "/login";
    }
    let result = await axios.post(
      `http://localhost:8080/user/profile/${email}`
    );
    let pro = result.data;

    setProduct(pro);
  }, []);
  return (
    <>
      <DeliveryHeader />
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(to right top, #208322, #1b732c, #1c6332, #205333, #254332)",
        }}
      >
        <div class="container vh-100 w-50">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 mt-1 pt-4">
              <div class=" z-depth-3">
                <div class="col-sm-12 bg-success rounded-left">
                  <div class="card-block text-center text-white">
                    <i class="fas fa-id-card fa-7x mt-5 mb-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 ">
              <div class=" z-depth-3">
                <div class="col-sm-12 bg-white rounded-right pb-3">
                  <h3 class=" p-2 text-center font-weight-bold">
                    <b>PROFILE CARD</b>
                  </h3>
                  <hr class="badge-primary mt-0 " />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">
                        Full Name : {product.firstName}_{product.lastName}
                      </h3>
                    </div>
                  </div>
                  <hr class="bg-primary" />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">
                        Email ID : {product.email}
                      </h3>
                    </div>
                  </div>
                  <hr class="bg-primary" />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">City: {product.city}</h3>
                    </div>
                  </div>
                  <hr class="bg-primary" />
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="font-weight-bold">Phone : {product.phone}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeliveryFooter/>
      </div>
    </>
  );
}
