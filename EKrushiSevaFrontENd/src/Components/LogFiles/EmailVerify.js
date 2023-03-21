import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function EmailVerify() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  sessionStorage.setItem("userEmail", email);
  let formSubmit = () => {
    axios.post(`http://localhost:8080/user/otpgenerator/${email}`);
    navigate("/otpVerify");
  };

  return (
    <>
      <form onSubmit={formSubmit} className="text-center">
        <div className="alert alert-primary text-center">
          Please enter your new Password
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label className="text-warning text-center">
              Enter your email
              <Input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                name="email"
                id="email"
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
