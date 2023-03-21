import React, { useEffect } from "react";
import "../Home/MemberImages/AboutUs.css";
import "../Home/MemberImages/Shetej.jpeg";
import "../Home/MemberImages/Niraj.jpeg";
import "../Home/MemberImages/Mangesh.jpeg";
import "../Home/MemberImages/Madhavi.jpg";
import "../Home/MemberImages/Jayraj.jpeg";
import ConsumerNavbar from "./ConsumerNavbar";
import ConsumerFooter from "./ConsumerFooter";

export default function ConsumerAboutUs() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="bg-success">
     <ConsumerNavbar />
      <div class="container-fluid">
        <div class="row p-5">
          <div class="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../Home/MemberImages/Shetej.jpeg")}
                      alt="aneesh"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Shetej Patil</h2>
                    <p>
                      Hi I'm Shetej Patil. I'm currently pursuing Post
                      Graduate Diploma in CDAC Tvm, I am the Project Lead
                      and my role in the project is Full Stack developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../Home/MemberImages/Niraj.jpeg")}
                      alt="chirag"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Niraj Patil</h2>
                    <p>
                      Hi I'm Niraj Patil. I'm currently pursuing Post Graduate
                      Diploma in CDAC TVM, and my role in the project is
                      Full Stack developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../Home/MemberImages/Mangesh.jpeg")}
                      alt="gajanan"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Mangesh Pawar</h2>
                    <p>
                      Hi I'm Mangesh Pawar. I'm currently pursuing Post Graduate
                      Diploma in CDAC TVM, and my role in the project is
                      Full Stack developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../Home/MemberImages/Madhavi.jpg")}
                      alt="pratik"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Madhavi Suratkar</h2>
                    <p>
                      Hi I'm Madhavi Suratkar. I'm currently pursuing Post
                      Graduate Diploma in CDAC TVM, and my role in the
                      project is Full Stack developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../Home/MemberImages/Jayraj.jpeg")}
                      alt="sid"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Jayraj Pawar</h2>
                    <p>
                      Hi I'm Jayraj Pawar. I'm currently pursuing Diploma in
                      CDAC TVM, and my role in the project is frontend
                      developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConsumerFooter />      
    </div>
  );
}
