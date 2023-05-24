import axios from "axios";
import {ALL_PRASAD_REQ, ALL_PRASAD_SUCCESS, ALL_PRASAD_FAIL, CLEAR_ERRORS} from "../constants/prasadConstants";
import {PRASAD_DETAILS_REQ, PRASAD_DETAILS_SUCCESS, PRASAD_DETAILS_FAIL} from "../constants/prasadConstants"
import { ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/productConstants";

export const getPrasads = (currentPage=1, price = [0, 25], god) => async (dispatch) => {
    try{
        dispatch({type: ALL_PRASAD_REQ});

        let link = `/api/v1/prasads/?page=${currentPage}`;

        if(god){
            link = `/api/v1/prasads/?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&god=${god}`;
        }

        const {data} = await axios.get(link);
        

        dispatch({
            type: ALL_PRASAD_SUCCESS,
            payload: data,
        })
    }
    catch (error) {
        dispatch({
            type: ALL_PRASAD_FAIL,
            payload: error.response.data.message
        });
    }
};


export const getPrasadDetails = (id) => async (dispatch) => {
    try{
        dispatch({type: PRASAD_DETAILS_REQ});

        const {data} = await axios.get(`/api/v1/prasad/${id}`);

        dispatch({
            type: PRASAD_DETAILS_SUCCESS,
            payload: data.prasad,
        })
    }
    catch (error) {
        dispatch({
            type: PRASAD_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
};


export const getAdminPrasad = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_PRODUCT_REQUEST });
  
      const { data } = await axios.get("/api/v1/admin/prasads");
  
      dispatch({
        type: ADMIN_PRODUCT_SUCCESS,
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Create Prasad
export const createPrasad = (productData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_PRODUCT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/admin/prasad/new`,
        productData,
        config
      );
  
      dispatch({
        type: NEW_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Update Prasad - Admin
export const updatePrasad = (id, productData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(
        `/api/v1/admin/prasad/${id}`,
        productData,
        config
      );
  
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Delete Product
export const deletePrasad = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/admin/prasad/${id}`);
  
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};