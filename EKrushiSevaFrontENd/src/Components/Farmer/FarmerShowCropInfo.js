import axios from "axios";
import React, { useEffect, useState } from "react";
import FarmernavBar from "./FarmerNavbar";
import Itemcard from "../Consumer/Itemcard";
import cropinfo from "./cropinfo.jpg";


export default function FarmerShowCropInfo() {
  let id = sessionStorage.getItem("id");
  let email = sessionStorage.getItem("email");
  const [pdata, setPdata] = useState([{}]);
  useEffect(async () => {
    let result1 = await axios.get(
      `http://localhost:8080/farmer/showFarmerCropInfo/${id}`
    );
    console.log(id);
    console.log(result1.data);
    let pro = result1.data;
    setPdata(pro);
  }, []);

  return (
    <>
      <FarmernavBar />
      <div className="container-fluid">
          <div
            className="row"
            style={{
              backgroundRepeat:"no-repeat",
              backgroundImage: "url(" + cropinfo + ")",
              backgroundSize: "cover",
              height: "100vh",
              opacity: 1,
            
            }}
          >
      
      <h1 className="text-center text-info ">All Crop Information</h1>

      <div className="row" >
        <div className="block col-12  m-2">
          <div className="row">
            {pdata.map((item) => {
              return (
                //column
                <div className="col-3 mb-2">
                  <Itemcard item={item} key={item.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      </div>
   
   
    </>
  );
}
