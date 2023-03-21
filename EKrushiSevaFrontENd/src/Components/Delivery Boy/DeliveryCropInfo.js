import React, { useState, useEffect } from "react";
import axios from "axios";
import Itemcard from "../Consumer/Itemcard";
import cardback from "./cardback.jpg";
import DeliveryHeader from "./DeliveryHeader";
import DeliveryFooter from "./DeliveryFooter";

export default function DeliveryCropInfo() {
  const [product, setProduct] = useState([{}]);

  useEffect(async () => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "DELIVERY_BOY"
    ) {
      window.location.href = "/login";
    }
    
    let result = await axios.get(`http://localhost:8080/user/showCropInfo`);
    let pro = result.data;

    setProduct(pro);
  }, []);

  return (
    <>
      {" "}
      <DeliveryHeader />
      <h1 className="text-info text-center">Crop Information</h1>
      <div className="p-0 m-0">
        <div
          className="row align-items-center"
          style={{
            backgroundImage: "url(" + cardback + ")",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            opacity: 1,
          }}
        >
          <div className="block col-12 m-5">
            <div className="row">
              {product.map((item) => {
                return (
                  <div className="col-3 mb-2">
                    <Itemcard item={item} key={item.p_Id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <DeliveryFooter/>
    </>
  );
}
