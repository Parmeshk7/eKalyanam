import axios from 'axios';

import { ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_REQ, CLEAR_ERRORS } from '../constants/productConstants';
// import { useDispatch } from 'react-redux';
import {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQ} from "../constants/productConstants"



export const getProducts = (currentPage=1, price = [0, 25], category) => async (dispatch) => {
    try{
        dispatch({type: ALL_PRODUCT_REQ});

        let link = `/api/v1/products/?page=${currentPage}`;

        if(category){
            link = `/api/v1/products/?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        }

        const {data} = await axios.get(link);
        

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })
    }
    catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_DETAILS_REQ});

        const {data} = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        })
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};


