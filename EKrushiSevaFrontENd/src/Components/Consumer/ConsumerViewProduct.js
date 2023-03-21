import React from "react";
import ConsumerNavbar from "./ConsumerNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Itemcard from "../Product/Itemcard";
import Cart from "../Product/Cart";
import ConsumerFooter from "./ConsumerFooter";

export default function ConsumerViewProduct() {
  const [product, setProduct] = useState([{}]);

  const [cartItems, setCartItems] = useState([]);
  sessionStorage.getItem("role");
  sessionStorage.getItem("email");

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

    let result = await axios.get(`http://localhost:8080/consumer/showProducts`);
    let pro = result.data;

    setProduct(pro);
  }, []);

  return (
    <div>
      <ConsumerNavbar />

      <h1 className="text-center text-info m-3">All Products</h1>

      <div className="row">
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
      <ConsumerFooter />
    </div>
  );
}
