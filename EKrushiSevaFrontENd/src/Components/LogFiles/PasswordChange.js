import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PasswordChange() {
  const [userData, setUserData] = useState({});
  const userEmail = sessionStorage.getItem("userEmail");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userEmail);
    axios
      .get(`http://localhost:8080/user/getuserbyemail/${userEmail}`)
      .then((res) => {
        const response = res.data;

        setUserData(response);
        console.log(userData);
      });
  }, []);

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setUserData({ ...userData, [name]: val });
  }

  function formHandle(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/user/updateuser`, userData)
      .then((res) => {
        alert(res.data);
        const response = res.data;
        if (response === "Password Updated") {
          toast("Done");
          navigate("/login");
        }
      });
  }

  return (
    <>
      <form onSubmit={formHandle} className="text-center">
        <div className="alert alert-primary text-center">
          Please enter your new Password
        </div>
        <div className="row justify-content-around">
          <div style={{ marginTop: "100px" }}>
            <label>
              Enter new password
              <input
                className="form-control"
                type="text"
                name="password"
                value={userData.password}
                onChange={change}
                placeholder="Enter new Password"
              />
            </label>
          </div>
          <div>
            <Button className="mt-4 btn btn-sm " type="submit">
              submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
