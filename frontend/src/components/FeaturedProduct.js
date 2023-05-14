import React, { useEffect } from 'react';
import styled from 'styled-components';
import Product from './ProductCard.js';
import {getProducts} from '../actions/productAction.js';
import {useSelector, useDispatch} from 'react-redux';



const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const {loading, error, products, productCard} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrapper>
        <h2 className='homeHeading'>Featured Products</h2>

        <div className="container" id="container">

            {products &&
              products.map((product) => (
                <Product product={product} />
              ))}

            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
.homeHeading{
    text-align: center;
    /* font-family: Roboto; */
    font-size: 1.4vmax;
    border-bottom: 1px solid rgba(21, 21, 21, 0.5);
    width: 20vmax;
    padding: 1vmax;
    margin: 5vmax auto;
    color: rgb(0, 0, 0, 0.7);
}

.container {
  display: flex;
  margin: 2vmax auto;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
}

`

export default FeaturedProduct;


