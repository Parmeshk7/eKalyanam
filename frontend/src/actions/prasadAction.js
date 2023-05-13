import axios from "axios";
import {ALL_PRASAD_REQ, ALL_PRASAD_SUCCESS, ALL_PRASAD_FAIL, CLEAR_ERRORS} from "../constants/prasadConstants";
import {PRASAD_DETAILS_REQ, PRASAD_DETAILS_SUCCESS, PRASAD_DETAILS_FAIL} from "../constants/prasadConstants"

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

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};