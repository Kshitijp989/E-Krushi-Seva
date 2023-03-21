import axios from "axios";
import React, { useEffect, useState } from "react";
import FarmernavBar from "./FarmerNavbar";
import Itemcard from "./Itemcard";

import cropinfo from "./cropinfo.jpg";

import cardback from "./cardback.jpg";
import FarmerFooter from "./FarmerFooter";

export default function FarmerShowProduct() {
  let id = sessionStorage.getItem("id");
  const [pdata, setPdata] = useState([{}]);

  useEffect(async () => {
    let result1 = await axios.get(
      `http://localhost:8080/farmer/showFarmerProduct/${id}`
    );
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
              backgroundImage: "url(" + cropinfo + ")",
              backgroundSize: "cover",
              height: "100vh",
              opacity: 1,
            }}
          >
      <h1 className="text-center text-info">All Farm Products</h1>

      <div className="row " >
        <div className="block col-12 m-2">
          <div className="row"  >
            {pdata.map((item) => {
              return (
                <div className="col-3 mb-2">
                  <Itemcard item={item} key={item.cropId} />
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
