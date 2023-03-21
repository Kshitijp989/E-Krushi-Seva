import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Itemcard from "../Product/Itemcard";
import Cart from "../Product/Cart";
import "../Product/Product.css";
import ConsumerNavbar from "./ConsumerNavbar";
import ConsumerFooter from "./ConsumerFooter";
import farm from "../Farmer/farm.jpg"

export default function ConsumerOrganicProduct() {
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
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }

    let result = await axios.get(
      `http://localhost:8080/consumer/organicProduct`
    );
    let pro = result.data;

    setProduct(pro);
  }, []);

  return (

    <>
    <div style={{
      backgroundImage: "url(" + farm + ")",
      backgroundSize: "cover",
      height: "100vh",
      opacity: 1,
    }}>
      <ConsumerNavbar />

      <h1 className="text-center text-info ">All Organic Products</h1>

      <div className="row" >
        <div className="block col-8  m-2">
          <div className="row">
            {product.map((item) => {
              return (
                <div className="col-4 mb-2">
                  <Itemcard onAdd={onAdd} item={item} key={item.p_Id} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col border border-success">
          <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </div>
      </div>

    </div>
    </>
  );
}
