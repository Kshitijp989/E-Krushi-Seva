import React, { useEffect, useState } from "react";
import axios from "axios";
import DeliveryHeader from "./DeliveryHeader";
import { useNavigate } from "react-router-dom";
import DeliveryFooter from "./DeliveryFooter";

export default function DeliveryProductInfo() {
  const [result, setResult] = useState([{}]);
  const navigate = useNavigate();

  let id = sessionStorage.getItem("id");
  let firstName = sessionStorage.getItem("firstName");
  let lastName = sessionStorage.getItem("lastName");

  useEffect(async () => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "DELIVERY_BOY"
    ) {
      window.location.href = "/login";
    }
    let result = await axios.get(`http://localhost:8080/delivery/showOrder`);
    let pro = result.data;
    setResult(pro);
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(
      `http://localhost:8080/delivery/showOrder`
    );
    setResult(response.data);
  };

  const myfun = async (orderId) => {
    // console.log(">>>>>" + orderId);
    const userOrder = { co_Id: orderId };
    const res = await axios.post(
      "http://localhost:8080/delivery/getOrderById",
      userOrder
    );
    sessionStorage.setItem("orderEmail", res.data.email);
     let orderEmail = sessionStorage.getItem("orderEmail");

    // console.log("kadbaj" + res.data.firstName);
    // console.log(res.data.co_Id);
    // const user1 = {
    //   firstName: res.data.firstName,
    //   lastName: res.data.lastName,
    //   email: res.data.email,
    //   phone: res.data.phone,
    //   address: res.data.address,
    //   pincode: res.data.pincode,
    //   city: res.data.city,
    //   state: res.data.state,
    //   productName: res.data.productName,
    //   itemsPrice: res.data.itemsPrice,
    //   taxPrice: res.data.taxPrice,
    //   shippingPrice: res.data.shippingPrice,
    //   totalPrice: res.data.totalPrice,
    //   status: "Dispatch",
    // };
    // console.log(user1);
    if (res.data.status === "Order Placed") {
      const user1 = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone,
        address: res.data.address,
        pincode : res.data.pincode,
        city: res.data.city,
        state: res.data.state,
        productName: res.data.productName,
        itemsPrice: res.data.itemsPrice,
        taxPrice: res.data.taxPrice,
        shippingPrice: res.data.shippingPrice,
        totalPrice: res.data.totalPrice,
        status: "Dispatch",
        co_Id: res.data.co_Id,
      };
      console.log("--------------------------------");
      console.log(user1);

      const user2 = await axios.post(
        "http://localhost:8080/delivery/editOrderStatus",
        user1
      );

      const user3 = await axios.post(
        `http://localhost:8080/delivery/msg/${orderEmail}`,
        user1
      );
    }

    getAllUsers();
  };
  const myfun2 = async (orderId) => {
    // console.log(">>>>>" + orderId);
    const userOrder = { co_Id: orderId };
    const res = await axios.post(
      "http://localhost:8080/delivery/getOrderById",
      userOrder
    );
    sessionStorage.setItem("orderEmail", res.data.email);
    let orderEmail = sessionStorage.getItem("orderEmail");

    const user1 = {
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      email: res.data.email,
      phone: res.data.phone,
      address: res.data.address,
      pincode:res.data.pincode,
      city: res.data.city,
      state: res.data.state,
      productName: res.data.productName,
      itemsPrice: res.data.itemsPrice,
      taxPrice: res.data.taxPrice,
      shippingPrice: res.data.shippingPrice,
      totalPrice: res.data.totalPrice,
      status: "Dispatch",
    };

    sessionStorage.setItem("orderId", res.data.co_Id);

    const user3 = await axios.post(
      `http://localhost:8080/delivery/otpgenerator/${orderEmail}`,
      user1
    );

    if (res.data.status === "Dispatch") {
      navigate("/deliveryOtpVerify");
    }
  };

  return (
    <div>
      <DeliveryHeader />

      <div className="container-fluid mt-4">
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th className="text-primary m-0" scope="col">
                Order Id
              </th>
              <th className="text-primary" scope="col">
                Name
              </th>
              <th className="text-primary" scope="col">
                Phone No
              </th>
              <th className="text-primary" scope="col">
                Product Name
              </th>
              <th className="text-primary" scope="col">
                Shipping Price
              </th>
              <th className="text-primary" scope="col">
                Total Price
              </th>
              <th className="text-primary" scope="col">
                Address
              </th>
              <th className="text-primary" scope="col">
                City
              </th>
              <th className="text-primary" scope="col">
                State
              </th>
              <th className="text-primary" scope="col">
                Pincode
              </th>

              <th className="text-primary" scope="col">
                Status
              </th>
              <th className="text-primary" scope="col"></th>
              <th className="text-primary" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {result.map((list, index) => (
              <tr>
                <td>{list.co_Id}</td>
                <td>
                  {list.firstName} {list.lastName}
                </td>
                <td>{list.phone}</td>
                <td>{list.productName}</td>
                <td>{list.shippingPrice}</td>
                <td>{list.totalPrice}</td>
                <td>{list.address}</td>
                <td>{list.city}</td>
                <td>{list.state}</td>
                <td>{list.pincode}</td>
                <td className="text-info">
                  <b>{list.status}</b>
                </td>
                <td className="text-info">
                  <input
                    type="button"
                    onClick={() => {
                      myfun(list.co_Id);
                    }}
                    className="btn btn-success mb-4"
                    value="Dispatch"
                  />
                </td>
                <td>
                  <input
                    type="button"
                    onClick={() => {
                      myfun2(list.co_Id);
                    }}
                    className="btn btn-success mb-4"
                    value="Delivered"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeliveryFooter />
    </div>
  );
}
