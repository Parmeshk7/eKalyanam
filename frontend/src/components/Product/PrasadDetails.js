import React, { Fragment, useEffect, useState, } from "react";
import "./ProductDetails.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import {
    clearErrors,
    getPrasadDetails,
  } from "../../actions/prasadAction";


const PrasadDetails = ({match}) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const {prasad, loading, error} = useSelector(
        (state) => state.prasadDetails
    );

    useEffect(() => {
        dispatch(getPrasadDetails(id));
    }, [dispatch, id]);


    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);

    const increaseQuantity = () => {
        if (prasad.Stock <= quantity) return;
    
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
        <div className="ProductDetails">
            <div className="imageSection">
              <Carousel>
                {prasad.images &&
                  prasad.images.map((item, i) => (
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
                <h2>{prasad.name}</h2>
                <p>Product # {prasad._id}</p>
              </div>
              <div className="detailsBlock-2">
               <p>{`${prasad.description}`}</p>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${prasad.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={prasad.Stock < 1 ? true : false}
                    // onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
                </div>
                </div>
        </div>
    </Fragment>
  )
};


export default PrasadDetails;