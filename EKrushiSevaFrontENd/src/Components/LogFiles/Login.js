import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./login.css";
import login1 from "./login1.jpg";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addData = async (add) => {
    add.preventDefault();
    let user = {
      email: email,
      password: password,
    };
    console.log(email);
    let v1 = document.querySelector("#email").value;

    let result = await axios.post(`http://localhost:8080/user/UserLogin`, user);
    console.log("hello");

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields Required !!! ",
      });
    } else if (result.data.data === null || result.data.data === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid User",
      });
    } else {
      sessionStorage.setItem("role", result.data.data.role);
      sessionStorage.setItem("email", result.data.data.email);
      sessionStorage.setItem("id", result.data.data.id);
      sessionStorage.setItem("firstName", result.data.data.firstName);
      sessionStorage.setItem("lastName", result.data.data.lastName);
      sessionStorage.setItem("city", result.data.data.city);
      sessionStorage.setItem("phone", result.data.data.phone);
      sessionStorage.setItem("address", result.data.data.address);
      sessionStorage.setItem("pincode", result.data.data.pincode);
      sessionStorage.setItem("state", result.data.data.state);

      if (result.data.data.status === "Active") {
        if (result.data.data.role === "ADMIN") {
          swal("Login Successfully!", "success");
          window.location.href = "/adminhome";
        } else if (result.data.data.role === "CONSUMER") {
          swal("Login Successfully!", "success");
          window.location.href = "/consumerhome";
        } else if (result.data.data.role === "FARMER") {
          swal("Login Successfully!", "success");
          window.location.href = "/farmerhome";
        } else if (result.data.data.role === "DELIVERY_BOY") {
          swal("Login Successfully!", "success");
          window.location.href = "/deliveryhome";
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are temporarily block! Please contact admin",
        });
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div class="login-img">
        <div className="vh-100 d-flex">
          <div className="container w-50 m-auto log">
            <div className="row">
              <div className="col-lg-5 p-0">
                <img src={login1} className="w-100 log-img" />
              </div>
              <div className="col-lg-7">
                <div className="m-auto w-75 pt-3 pb-3 align-self-center ">
                  <h1
                    className="text-center fw-bold mb-3"
                    style={{ color: "#ba8b00" }}
                  >
                    E-KrushiSeva
                  </h1>
                  <h1 className="text-center display-4">Login</h1>

                  <form className="row g-3 mt-3">
                    <div className="col-md-12">
                      <label>Email</label>
                      <Input
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter your email"
                        autoFocus
                        name="email"
                        id="email"
                        required
                        title="example@email.com"
                      />
                    </div>
                    <div className="col-md-12 mt-4">
                      <label> Password</label>
                      <Input
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        placeholder="Enter your password"
                        name="Password"
                        id="Password"
                        required
                      />
                    </div>
                    <a href="emailVerify">Forget password</a>
                    <div class="col-md-12 text-center">
                      <Container className="text-right my-0">
                        <table>
                          <tr>
                            <th>
                              <button
                                className="btn btn-danger"
                                onClick={addData}
                              >
                                Login
                              </button>
                            </th>
                            <th>
                              <Link to="/register">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Register NewUser{" "}
                                </button>
                              </Link>
                            </th>
                          </tr>
                        </table>
                      </Container>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Login;
