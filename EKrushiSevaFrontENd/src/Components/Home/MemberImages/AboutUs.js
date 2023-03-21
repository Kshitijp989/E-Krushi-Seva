import "./AboutUs.css";

import Header from "../Header";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
    <Header/>
      <div class="container-fluid bg-success">
        <div class="row p-5">
          <div class="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={require("./Shetej.jpeg")}alt="" />
                        </div>
                        <div className="img-text">
                          <h2>Shetej Patil</h2>
                          <p>
                            Hi I'm Shetej Patil. I'm currently pursuing
                            Post Graduate Diploma in CDAC TVM, I am the Project Lead  and my role in the project
                            is Full Stack developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={require("./Niraj.jpeg")} />
                        </div>
                        <div className="img-text">
                          <h2>Niraj Patil</h2>
                          <p>
                            Hi I'm Niraj Patil. I'm currently pursuing Post Graduate Diploma
                            in CDAC TVM, and my role in the project is
                            Full Stack developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={require("./Madhavi.jpg")} alt="" />
                        </div>
                        <div className="img-text">
                          <h2>Madhavi Suratkar</h2>
                          <p>
                            Hi I'm Madhavi Suratkar. I'm currently pursuing Post Graduate Diploma in CDAC
                            TVM, and my role in the project is Full Stack developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={require("./Mangesh.jpeg")} alt="" />
                        </div>
                        <div className="img-text">
                          <h2>Mangesh Pawar</h2>
                          <p>
                            Hi I'm Mangesh Pawar. I'm currently pursuing Post Graduate Diploma
                            in CDAC TVM, and my role in the project is
                            Full Stack developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={require("./Jayraj.jpeg")} alt="sid" />
                        </div>
                        <div className="img-text">
                          <h2>Jayraj Pawar</h2>
                          <p>
                            Hi I'm Jayraj Pawar. I'm currently pursuing Post Graduate
                            Diploma in CDAC TVM, and my role in the project
                            is frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
     <Footer />
    </>
  );
};

export default AboutUs;