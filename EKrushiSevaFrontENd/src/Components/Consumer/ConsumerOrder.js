import React, { useEffect, useState } from "react";
import axios from "axios";
import ConsumerNavbar from "./ConsumerNavbar";
import ConsumerFooter from "./ConsumerFooter";
export default function ConsumerOrder() {
  const [result, setResult] = useState([{}]);

  let id = sessionStorage.getItem("id");
  let firstName = sessionStorage.getItem("firstName");
  let lastName = sessionStorage.getItem("lastName");

  useEffect(async () => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }

    let result = await axios.get(
      `http://localhost:8080/consumer/showConsumerOrder/${id}`
    );
    let pro = result.data;

    setResult(pro);
  }, []);
  return (
    <div>
      <ConsumerNavbar />
      <h1 className="text-center text-danger">
        Welcome {firstName} {lastName} Your Orderlist
      </h1>

      <div className="container-fluid">
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th className="text-primary" scope="col">
                Order Id
              </th>
              <th className="text-primary" scope="col">
                Product Name
              </th>
              <th className="text-primary" scope="col">
                Item Price
              </th>
              <th className="text-primary" scope="col">
                Shipping Price
              </th>
              <th className="text-primary" scope="col">
                Tax Price
              </th>
              <th className="text-primary" scope="col">
                Total Price
              </th>
              <th className="text-primary" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {result.map((list, index) => (
              <tr>
                <td>{list.co_Id}</td>
                <td>{list.productName}</td>
                <td>{list.itemsPrice}</td>
                <td>{list.shippingPrice}</td>
                <td>{list.taxPrice}</td>
                <td>{list.totalPrice}</td>
                <td className="text-info">
                  <b>{list.status}</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConsumerFooter />
    </div>
  );
}
