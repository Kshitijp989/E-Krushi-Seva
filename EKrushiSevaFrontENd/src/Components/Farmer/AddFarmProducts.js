import { useState, useEffect } from "react";
import FarmernavBar from "./FarmerNavbar";
import bag1 from "./farmprod.jpg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import FarmerFooter from "./FarmerFooter";

export default function AddFarmProducts() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "FARMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setstock] = useState("");
  const [price, setPrice] = useState("");
  console.log(productName);
  const navigate = useNavigate();

  let role = sessionStorage.getItem("role");
  let email = sessionStorage.getItem("email");
  let saveProduct = (data) => {
    console.log(data);
    axios.post(`http://localhost:8080/farmer/add-product/${email}`, data).then(
      (response) => {
        sessionStorage.setItem("productId", response.data.p_Id);
        navigate("/farmerAddImage");
      },
      (error) => {
        console.log(error);

        alert(" ERROR : Failed to Add");
      }
    );
  };
  let inputdata = {
    productName: productName,
    categories: category,
    stocks: stock,
    price: price,
  };

  let validate = (e) => {
    if (
      productName.trim() === "" ||
      category.trim() === "" ||
      stock.trim() === "" ||
      price.trim() === ""
    ) {
      swal("Fill all field");
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
            className="row  "
            style={{
              backgroundImage: "url(" + bag1 + ")",
              backgroundSize: "cover",
              height: "100%",
              opacity: 1,
            }}
          >
            <div className="col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center my-2 "><b>Add Farm Products</b></h3>
              <div className="card-body">
                <form className="registerForm">
                  <div className="form-group my-2">
                    <label className="my-1"><b> Product Name</b> </label>
                    <input
                      placeholder="Enter Product Name"
                      name="Product_Name"
                      className="form-control"
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label className="my-1"> <b>Product Category </b></label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      required
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="" selected>
                        Please select one of them
                      </option>
                      <option value="ORGANIC_PRODUCT">ORGANIC_PRODUCT</option>
                      <option value="NON_ORGANIC_PRODUCT">
                        NON ORGANIC PRODUCT
                      </option>
                    </select>
                  </div>
                  <div className="form-group my-2">
                    <label className="my-1"> <b>Product Stock </b></label>
                    <input
                      placeholder="Enter Product Stock"
                      name="number"
                      className="form-control"
                      type="number"
                      required
                      onChange={(e) => {
                        setstock(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label className="my-1"> <b>Product Price</b> </label>
                    <input
                      placeholder="Enter Product Price"
                      name="number"
                      className="form-control"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>

                  <button
                    className="btn btn-success my-2"
                    style={{ marginTop: "10px" }}
                    onClick={validate}
                  >
                    Save Product
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
