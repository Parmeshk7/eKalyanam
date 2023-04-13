import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  return (
    <Wrapper>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        {/* <div>
          <Rating {...options} />{" "}
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews} Reviews)
          </span>
        </div> */}
        <span>{`₹${product.price}`}</span>
      </Link>
    </Wrapper>
  );
};


const Wrapper = styled.section`

.productCard {
  width: 14vmax;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(48, 48, 48);
  margin: 2vmax;
  transition: all 0.5s;
  padding-bottom: 0.5vmax;
}

.productCard > img {
  width: 14vmax;
}

.productCard > div {
  margin: 0.5vmax;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/* .productCardSpan {
  margin: 0.5vmax;
  font: 300 0.7vmax "Roboto";
} */

.productCard > p {
  font-family: "Roboto";
  font-size: 1.2vmax;
  margin: 1vmax 0.5vmax;
  margin-bottom: 0;
}

.productCard > span {
  margin: 0.5vmax;
  color: tomato;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1vmax;
}

.productCard:hover {
  box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);

  transform: translateY(-1vmax);
}

@media screen and (max-width: 600px) {
  .productCard > p {
    font-size: 1.7vmax;
  }

  .productCard > div {
    margin: 0vmax;
    display: block;
  }

  .productCard > span {
    font-size: 1.5vmax;
  }

  .productCard > div > span {
    margin: 0 0.5vmax;
    font: 300 1vmax "Roboto";
  }
}
`

export default ProductCard;