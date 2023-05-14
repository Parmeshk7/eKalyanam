import React from "react";
// import "./CartItemCard.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartItemCard = ({itemType, item, deleteCartItems }) => {
  return (
    <Wrapper>
        <div className="CartItemCard">
            <img src={item.image} alt="ssa" />
            <div>
              {itemType === "prasad" ? <Link to={`/prasad/${item.product}`}>{item.name}</Link> : <Link to={`/product/${item.product}`}>{item.name}</Link> }
            
            <span>{`Price: ₹${item.price}`}</span>
            <p onClick={() => deleteCartItems(item.product)}>Remove</p>
            </div>
        </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
.CartItemCard {
  display: flex;
  padding: 1vmax;
  height: 8vmax;
  align-items: flex-start;
  box-sizing: border-box;
}
.CartItemCard > img {
  width: 5vmax;
}

.CartItemCard > div {
  display: flex;
  margin: 0.3vmax 1vmax;
  flex-direction: column;
}

.CartItemCard > div > a {
  font: 300 0.9vmax cursive;
  color: rgba(24, 24, 24, 0.815);
  text-decoration: none;
}

.CartItemCard > div > span {
  font: 300 0.9vmax "Roboto";
  color: rgba(24, 24, 24, 0.815);
}

.CartItemCard > div > p {
  color: tomato;
  font: 100 0.8vmax "Roboto";
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .CartItemCard {
    padding: 3vmax;
    height: 25vmax;
  }
  .CartItemCard > img {
    width: 10vmax;
  }

  .CartItemCard > div {
    margin: 1vmax 2vmax;
  }

  .CartItemCard > div > a {
    font: 300 2vmax cursive;
  }

  .CartItemCard > div > span {
    font: 300 1.9vmax "Roboto";
  }

  .CartItemCard > div > p {
    font: 100 1.8vmax "Roboto";
  }
}
`

export default CartItemCard;