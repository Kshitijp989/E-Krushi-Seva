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
    // <div className="mb-3">
    <Card
      className="shadow rounded bg-primary mb-4 border border-danger"
      sx={{ maxWidth: 300 }}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="200"
          // image={props.item.imageName}
          alt="green iguana"
        > */}
        <img src={props.item.imageName} alt="" height="200" width="100%"/>
        {/* </CardMedia> */}
        <CardContent>
          <Typography
            className="text-center"
            color={"#6b6262"}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.item.productName}1KG
          </Typography>
          <Typography
            className="text-center"
            fontWeight={"900"}
            gutterBottom
            variant="h6"
            component="div"
          >
            RS. {props.item.price}
          </Typography>

          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="mx-auto">
          {/* <div key={props.key}> */}
          <button
            type="button"
            class="btn btn-success"
            onClick={() => props.onAdd(props.item)}
          >
            Add To Cart
          </button>
        </div>
        {/* </div> */}
      </CardActions>
    </Card>
    // </div>
  );
};

export default Itemcard;
