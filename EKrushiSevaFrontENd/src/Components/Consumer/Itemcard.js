import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../Images/brocalli.jfif";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();

  return (
    <Card
      className="shadow rounded bg-info mb-4 border border-danger"
      sx={{ maxWidth: 300 }}
    >
      <CardActionArea>
        <img src={props.item.image} alt="" height="200" width="100%" />

        <CardContent>
          <Typography
            className="text-center"
            color={"tomato"}
            gutterBottom
            variant="h4"
            component="div"
          >
            {props.item.cropName}
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            {props.item.scientificName}
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            {props.item.cropType}
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            {props.item.description}
          </Typography>

          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Itemcard;
