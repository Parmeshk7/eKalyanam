import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OrderSuccess = () => {

  console.log(localStorage.getItem("cartItems") === null);
  if(localStorage.getItem("cartItems")){
    localStorage.removeItem("cartItems");
    window.location.reload();
  }

  return (
    <Wrapper>
        <div className="orderSuccess">
        <CheckCircleIcon />

        <Typography>Your Order has been Placed successfully </Typography>
        <Link to="/orders">View Orders</Link>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.orderSuccess {
  margin: auto;
  text-align: center;
  padding: 10vmax;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.orderSuccess > svg {
  font-size: 7vmax;
  color: tomato;
}
.orderSuccess > p {
  font-size: 2vmax;
}
.orderSuccess > a {
  background-color: rgb(51, 51, 51);
  color: white;
  border: none;
  padding: 1vmax 3vmax;
  cursor: pointer;
  font: 400 1vmax "Roboto";
  text-decoration: none;
  margin: 2vmax;
}

@media screen and (max-width: 600px) {
  .orderSuccess > a {
    padding: 3vw 6vw;
    font: 400 4vw "Roboto";
    margin: 2vmax;
  }

  .orderSuccess > svg {
    font-size: 20vw;
  }
  .orderSuccess > p {
    margin: 2vmax;
    font-size: 5vw;
  }
}
`

export default OrderSuccess;