import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Header from "../Home/Header";
import img from "../Images/alexa.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Itemcard from "./Itemcard";
import Cart from "./Cart";
import "./Product.css";
import farm from "../Farmer/farm.jpg"

export default function NonOrganicProduct() {
  const [product, setProduct] = useState([{}]);

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (newProduct) => {
    const exist = cartItems.find((x) => x.p_Id === newProduct.p_Id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.p_Id === newProduct.p_Id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...newProduct, qty: 1 }]);
    }
  };
  const onRemove = (newProduct) => {
    const exist = cartItems.find((x) => x.p_Id === newProduct.p_Id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.p_Id !== newProduct.p_Id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.p_Id === newProduct.p_Id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  useEffect(async () => {
    let result = await axios.get(
      `http://localhost:8080/consumer/nonOrganicProduct`
    );
    let pro = result.data;

    setProduct(pro);
  }, []);

  return (
    <>
    <Header></Header>
    <div className="row" style={{
      backgroundImage: "url(" + farm + ")",
      backgroundSize: "cover",
      height: "100vh",
      opacity: 1,
    }}>
     

      <h1 className="text-center text-info m-3">All Non-Organic Products</h1>
      {/* <CartProvider> */}
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="block col-8  m-2">
          <div className="row">
            {product.map((item) => {
              return (
                //column
                <div className="col-4 mb-2">
                  <Itemcard
                    // img={item.imageName}
                    // productName={item.productName}
                    // price={item.price}
                    onAdd={onAdd}
                    item={item}
                    key={item.p_Id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <span class="col vl"></span> */}
        <div className="col border border-success">
          <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </div>
      </div>
      {/* <Cart
          className="split right"
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        /> */}
      {/* </div> */}

      {/* </CartProvider> */}
    </div>
    </>
  );
}
