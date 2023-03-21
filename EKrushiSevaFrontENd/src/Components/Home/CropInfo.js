import React, { useState, useEffect } from "react";
import axios from "axios";
import cardback from "../Consumer/cardback.jpg";
import Itemcard from "../Consumer/Itemcard";
import Header from "../Home/Header";

export default function CropInfo() {
  const [product, setProduct] = useState([{}]);

  useEffect(async () => {
    let result = await axios.get(`http://localhost:8080/user/showCropInfo`);
    let pro = result.data;

    setProduct(pro);
  }, []);

  return (
    <>
      {" "}
     
      <div className="p-0 m-0">
      <Header />
      <div
          className="row align-items-center"
          style={{
            backgroundImage: "url(" + cardback + ")",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            opacity: 1,
          }}
        >
          
      
          
          <div className="block col-12 m-4">
            <div className="row">
              {product.map((item) => {
                return (
                  //column
                  <div className="col-3 mb-1">
                    <Itemcard item={item} key={item.p_Id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
