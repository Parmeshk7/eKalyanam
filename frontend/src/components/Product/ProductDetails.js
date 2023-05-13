import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetails.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import Loader from "../layout/Loader";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  //   const addToCartHandler = () => {
  //     dispatch(addItemsToCart(id, quantity));
  //     alert.success("Item Added To Cart");
  //   };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ProductDetails">
            <div className="imageSection">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <p>{`${product.description}`}</p>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    // onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

// const Wrapper = styled.section`
//     .ProductDetails {
//   background-color: rgb(255, 255, 255);
//   width: 100vw;
//   max-width: 100%;
//   padding: 6vmax;
//   box-sizing: border-box;
//   display: flex;
// }

// .ProductDetails > div {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   padding: 2vmax;
//   box-sizing: border-box;
//   border: 1px solid white;
// }

// .ProductDetails > div:last-child {
//   align-items: flex-start;
// }

// .CarouselImage {
//   width: 20vmax;
// }

// .detailsBlock-1 > h2 {
//   color: rgb(54, 54, 54);
//   font: 600 1.6vmax "Roboto";
// }

// .detailsBlock-1 > p {
//   color: rgba(54, 54, 54, 0.582);
//   font: 200 0.6vmax cursive;
// }

// .detailsBlock-2 {
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   border-top: 1px solid rgba(0, 0, 0, 0.205);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.205);
//   width: 70%;
//   padding: 1vmax 0;
// }

// .detailsBlock-2-span {
//   font: 200 0.8vmax cursive;
//   color: rgba(0, 0, 0, 0.699);
// }

// .detailsBlock-3 {
//   width: 70%;
// }

// .detailsBlock-3 > h1 {
//   color: rgba(17, 17, 17, 0.795);
//   font: 400 1.8vmax "Franklin Gothic Medium";
//   margin: 1vmax 0;
// }
// .detailsBlock-3-1 {
//   display: flex;
//   align-items: center;
// }

// .detailsBlock-3-1-1 > button {
//   border: none;
//   background-color: rgba(0, 0, 0, 0.616);
//   padding: 0.5vmax;
//   cursor: pointer;
//   color: white;
//   transition: all 0.5s;
// }
// .detailsBlock-3-1-1 > button:hover {
//   background-color: rgba(0, 0, 0, 0.767);
// }

// .detailsBlock-3-1-1 > input {
//   border: none;
//   padding: 0.5vmax;
//   width: 1vmax;
//   text-align: center;
//   outline: none;
//   font: 400 0.8vmax "Roboto";
//   color: rgba(0, 0, 0, 0.74);
// }

// .detailsBlock-3-1 > button:last-child {
//   border: none;
//   cursor: pointer;
//   color: white;
//   transition: all 0.5s;
//   background-color: tomato;
//   font: 500 0.7vmax "Roboto";
//   border-radius: 20px;
//   padding: 0.5vmax 2vmax;
//   margin: 1vmax;
//   outline: none;
// }

// .detailsBlock-3-1 > button:last-child:hover {
//   background-color: rgb(214, 84, 61);
// }

// .detailsBlock-3 > p {
//   border-top: 1px solid rgba(0, 0, 0, 0.205);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.205);
//   padding: 1vmax 0;
//   color: rgba(0, 0, 0, 0.651);
//   font: 400 1vmax "Roboto";
//   margin: 1vmax 0;
// }

// .detailsBlock-4 {
//   color: rgba(0, 0, 0, 0.897);
//   font: 500 1.2vmax sans-serif;
// }

// .detailsBlock-4 > p {
//   color: rgba(0, 0, 0, 0.534);
//   font: 300 0.8vmax sans-serif;
// }

// .submitReview {
//   border: none;
//   background-color: tomato;
//   font: 500 0.7vmax "Roboto";
//   border-radius: 20px;
//   padding: 0.6vmax 2vmax;
//   margin: 1vmax 0;
//   color: white;
//   cursor: pointer;
//   transition: all 0.5s;
//   outline: none;
// }
// .submitReview:hover {
//   background-color: rgb(197, 68, 45);
//   transform: scale(1.1);
// }

// .submitDialog {
//   display: flex;
//   flex-direction: column;
// }
// .submitDialogTextArea {
//   border: 1px solid rgba(0, 0, 0, 0.082);
//   margin: 1vmax 0;
//   outline: none;
//   padding: 1rem;
//   font: 300 1rem "Roboto";
// }

// .reviewsHeading {
//   color: #000000be;
//   font: 500 1.4vmax "Roboto";
//   text-align: center;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.226);
//   padding: 1vmax;
//   width: 20vmax;
//   margin: auto;
//   margin-bottom: 4vmax;
// }
// .reviews {
//   display: flex;
//   overflow: auto;
// }

// .reviewCard {
//   flex: none;

//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.226);
//   border: 1px solid rgba(56, 56, 56, 0.116);
//   width: 30vmax;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 1vmax;
//   padding: 3vmax;
// }
// .reviewCard > img {
//   width: 5vmax;
// }
// .reviewCard > p {
//   color: rgba(0, 0, 0, 0.836);
//   font: 600 0.9vmax "Roboto";
// }
// .reviewCardComment {
//   color: rgba(0, 0, 0, 0.445);
//   font: 300 0.8vmax cursive;
// }

// .noReviews {
//   font: 400 1.3vmax "Gill Sans";
//   text-align: center;
//   color: rgba(0, 0, 0, 0.548);
// }

// @media screen and (max-width: 600px) {
//   .ProductDetails {
//     flex-direction: column;
//     height: unset;
//   }

//   .ProductDetails > div:last-child {
//     align-items: center;
//   }

//   .detailsBlock-1 > h2 {
//     font-size: 2.8vmax;
//     text-align: center;
//   }

//   .detailsBlock-1 > p {
//     text-align: center;
//     font-size: 1vmax;
//   }

//   .detailsBlock-2 {
//     justify-content: center;
//   }
//   .detailsBlock-2 > span {
//     font-size: 1.5vmax;
//   }

//   .detailsBlock-3 > h1 {
//     font: 700 3vmax "Franklin Gothic Medium";
//     text-align: center;
//   }

//   .detailsBlock-3-1 {
//     flex-direction: column;
//   }

//   .detailsBlock-3-1-1 {
//     padding: 2vmax 0;
//   }
//   .detailsBlock-3-1-1 > button {
//     padding: 1.2vmax;
//     width: 4vmax;
//   }

//   .detailsBlock-3-1-1 > input {
//     padding: 1.5vmax;
//     width: 3vmax;
//     font: 400 1.8vmax "Roboto";
//   }

//   .detailsBlock-3-1 > button:last-child {
//     font: 500 1.7vmax "Roboto";
//     padding: 1.5vmax;
//     width: 20vmax;
//     margin: 3vmax 0;
//   }

//   .detailsBlock-3 > p {
//     padding: 2.5vmax 0;
//     text-align: center;
//     font: 400 2vmax "Roboto";
//   }

//   .detailsBlock-4 {
//     font: 500 2.5vmax sans-serif;
//   }

//   .detailsBlock-4 > p {
//     font: 300 1.8vmax sans-serif;
//   }

//   .submitReview {
//     font: 500 1.7vmax "Roboto";
//     padding: 1.5vmax;
//     width: 20vmax;
//     margin: 3vmax 0;
//   }

//   .reviewCard > p {
//     font: 600 3vw "Roboto";
//   }
//   .reviewCardComment {
//     font: 300 5vw cursive;
//   }
// }
// `

export default ProductDetails;
