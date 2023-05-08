import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProducts } from "./actions/productAction";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";
import Pagination from "react-js-pagination";

const TempleStore = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const { products, loading, error, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const total = parseInt(productCount);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  // let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Wrapper>
      <h2 className="productsHeading">Temple Store</h2>

      <div className="products">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} pageLink={"/product"}/>
          ))}
      </div>
      
      {/* {resultPerPage < productCount && ( */}
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={8}
            totalItemsCount={total}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .productsHeading {
    margin: 2vmax auto;
    width: 15vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.171);
    padding: 2vmax;
    color: rgba(0, 0, 0, 0.678);
    font-size: 25px;
    font-weight: 600;
    text-align: center;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5vmax;
    justify-content: center;
    min-height: 30vh;
  }

  .paginationBox {
    display: flex;
    justify-content: center;
    margin: 6vmax;
  }

  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .page-item {
    background-color: rgb(255, 255, 255);
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.178);
    padding: 1vmax 1.5vmax;
    transition: all 0.3s;
    cursor: pointer;
  }
  .page-item:first-child {
    border-radius: 5px 0 0 5px;
  }

  .page-item:last-child {
    border-radius: 0 5px 5px 0;
  }
  .page-link {
    text-decoration: none;
    font: 300 0.7vmax "Roboto";
    color: rgb(80, 80, 80);
    transition: all 0.3s;
  }

  .page-item:hover {
    background-color: rgb(230, 230, 230);
  }

  .page-item:hover .page-link {
    color: rgb(0, 0, 0);
  }

  .pageItemActive {
    background-color: tomato;
  }

  .pageLinkActive {
    color: white;
  }

  .filterBox {
    width: 10vmax;
    position: absolute;
    top: 10vmax;
    left: 4vmax;
  }

  .categoryBox {
    padding: 0%;
  }

  .category-link {
    list-style: none;
    color: rgba(0, 0, 0, 0.61);
    font: 400 0.8vmax "Roboto";
    margin: 0.4vmax;
    cursor: pointer;
    transition: all 0.5s;
  }
  .category-link:hover {
    color: tomato;
  }

  .filterBox > fieldset {
    border: 1px solid rgba(0, 0, 0, 0.329);
  }

  @media screen and (max-width: 600px) {
    .filterBox {
      width: 20vmax;
      position: static;
      margin: auto;
    }

    .page-link {
      font: 300 1.7vmax "Roboto";
    }
    .category-link {
      font: 400 1.8vmax "Roboto";
    }
  }
`;

export default TempleStore;