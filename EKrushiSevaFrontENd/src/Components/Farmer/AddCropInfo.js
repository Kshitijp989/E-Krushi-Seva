
import FarmernavBar from "./FarmerNavbar";
import cropinfo from "./cropinfo.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import FarmerFooter from "./FarmerFooter";

export default function AddCropInfo() {
  const [cropName, setCropName] = useState();
  const [scientificCropName, setScientificCropName] = useState();
  const [cropType, setCropType] = useState();
  const [desc, setDesc] = useState();
  const navigate = useNavigate();
  let role = sessionStorage.getItem("role");
  let email = sessionStorage.getItem("email");

  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "FARMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  let saveProduct = async (data) => {
    await axios
      .post(`http://localhost:8080/farmer/addCropInfo/${email}`, data)
      .then(
        (response) => {
        
          sessionStorage.setItem("cropId", response.data.cropId);
          navigate("/addCropImage");
        },
        (error) => {
          console.log(error);

          alert(" ERROR : Failed to Register");
        }
      );
  };
  let inputdata = {
    cropName: cropName,
    scientificName: scientificCropName,
    cropType: cropType,
    description: desc,
  };

  let validate = (e) => {
    if (
      cropName.trim() === "" ||
      scientificCropName.trim() === "" ||
      cropType.trim() === "" ||
      desc.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else {
      e.preventDefault();
      saveProduct(inputdata);
    }
  };

  return (
    <>
      <FarmernavBar />
      <div>
        <div className="container-fluid">
          <div
            className="row"
            style={{
              // backgroundRepeat:"no-repeat",
              backgroundImage: "url(" + cropinfo + ")",
              backgroundSize: "cover",
              height: '100vh',
              opacity: 1,
            }}
          >
            <div className="col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center my-2">
                <b>Add Crop Information</b>
              </h3>
              <div className="card-body">
                <form className="registerForm">
                  <div className="form-group my-2">
                    <label className="my-1">
                      {" "}
                      <b>Crop Name</b>{" "}
                    </label>
                    <input
                      placeholder="Enter Crop Name"
                      name="Product_Name"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setCropName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group my-2">
                    <label className="my-1">
                      {" "}
                      <b>Scientific Crop Name</b>{" "}
                    </label>
                    <input
                      placeholder="Enter Scientific Crop Name"
                      name="text"
                      className="form-control"
                      type="text"
                      required
                      onChange={(e) => {
                        setScientificCropName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label className="my-1">
                      {" "}
                      <b>Crop Type</b>{" "}
                    </label>
                    <input
                      placeholder="Enter Crop Type"
                      name="text"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setCropType(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label className="my-1">
                      {" "}
                      <b>Crop Description</b>{" "}
                    </label>

                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-primary my-2"
                    style={{ marginTop: "10px" }}
                    onClick={validate}
                  >
                    Save Crop
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FarmerFooter/>
    </>
  );
}
