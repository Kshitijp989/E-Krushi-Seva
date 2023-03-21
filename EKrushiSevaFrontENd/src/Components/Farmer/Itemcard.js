import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import {  CardActionArea, CardActions } from "@mui/material";
import axios from "axios";

const Itemcard = (props) => {


  let id = props.item.p_Id;
  let deleteItem = () => {
    console.log(id);
    console.log(props.item.productName);
    axios.delete(`http://localhost:8080/farmer/deleteProduct/${id}`);
    window.location.href = "/farmerShowProduct";
    // navigate("/farmerShowProduct");
  };

  return (
    <Card
      className="shadow rounded bg-info mb-4 border border-danger"
      sx={{ maxWidth: 300 }}
    >
      <CardActionArea>
        <img src={props.item.imageName} alt="" height="200" width="100%" />
        {/* </CardMedia> */}
        <CardContent>
          <Typography
            className="text-center"
            color={"tomato"}
            gutterBottom
            variant="h5"
            component="div"
          >
            Product Name- {props.item.productName}
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            {props.item.categories}
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            Stocks-{props.item.stocks}
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            Price-{props.item.price} Rs
          </Typography>

          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="mx-auto">
          <button type="button" class="btn btn-danger" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Itemcard;
