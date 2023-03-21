import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function DeliveryOtpVerify() {
  const [otp, setOtp] = useState("");
  const [a, setA] = useState("");

  const navigate = useNavigate();

  let formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/delivery/otpverify/${otp}`)
      .then((response) => {
        if (response.data === "OTP verified") {
          let OrderId = sessionStorage.getItem("orderId");
          const user1 = {
            status: "Delivered",
            co_Id: OrderId,
          };
          const user2 = axios.post(
            "http://localhost:8080/delivery/editOrderStatus",
            user1
          );

          alert("well done");
          navigate("/deliveryProductInfo");
        } else if (response.data === "OTP Invalid Please Try Again") {
          alert("failed");
          navigate("/deliveryOtpVerify");
        }
      });
  };

  return (
    <>
      <form onSubmit={formSubmit} className="text-center">
        <div className="alert alert-primary text-center">
          <b>Please enter the OTP To Deliver Order</b>
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label className="text-warning text-center">
              <b>Enter OTP Recieved to mail</b>
              <Input
                type="text"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder="Enter otp"
                name="text"
                id="text"
                required
              />
            </label>
          </div>
          <div>
            <Button className="mt-4 btn btn-sm " type="submit">
              send otp
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
