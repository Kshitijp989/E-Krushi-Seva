import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const [a, setA] = useState("");

  const navigate = useNavigate();

  let formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/user/otpverify/${otp}`)
      .then((response) => {
        if (response.data === "OTP verified") {
          alert("well done");
          navigate("/passwordChange");
        } else if (response.data === "OTP Invalid Please Try Again") {
          alert("failed");
          navigate("/otpVerify");
        }
      });
  };

  return (
    <>
      <h1>data{a}</h1>
      <form onSubmit={formSubmit} className="text-center">
        <div className="alert alert-primary text-center">
          Please enter the otp
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label className="text-warning text-center">
              Enter otp
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
