import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import axios from "axios";
import swal from "sweetalert2";
import cropinfo from "./cropinfo.jpg";
const AddCropimage = () => {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") !== "FARMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  let cropId = sessionStorage.getItem("cropId");
  let email = sessionStorage.getItem("email");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `http://localhost:8080/uploadCropImage/${email}/${cropId}`,
        formData
      );

      // Clear percentage
    
      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
      swal.fire({
        icon: "Success",
        title: "Hurreh!!!",
        text: " Crop Image added Succesfully.. :)",
        timer: 5000,
        showConfirmButton: false,
      });
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
     
    }
    window.location.href = "./addCropInfo";
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(" + cropinfo + ")",
        backgroundSize: "cover",
        height: "100vh",
        opacity: 1,
      }}
    >
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          <div className="text-center p-3">
            <h1>
              <b>Add Crop Image</b>
            </h1>
          </div>
       
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit}>
              <div className="custom-file mb-4">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
              </div>
             <input
                type="submit"
                value="Upload"
                className="btn btn-primary btn-block mt-4"
              />
            </form>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AddCropimage;
