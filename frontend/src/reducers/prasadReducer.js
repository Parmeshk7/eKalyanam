import {ALL_PRASAD_REQ, ALL_PRASAD_SUCCESS, ALL_PRASAD_FAIL, CLEAR_ERRORS} from "../constants/prasadConstants";
import {PRASAD_DETAILS_REQ, PRASAD_DETAILS_SUCCESS, PRASAD_DETAILS_FAIL} from "../constants/prasadConstants"



export const prasadsReducer = (state = {prasads: []}, action) => {
    switch(action.type){
        case ALL_PRASAD_REQ:
            return {
                loading: true,
                prasads: []
            }
        case ALL_PRASAD_SUCCESS:
            return {
                loading: false,
                prasads: action.payload.prasads,
                prasadCount: action.payload.prasadCount
            }
        case ALL_PRASAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export const prasadDetailsReducer = (state = {prasad : {}}, action) => {
    switch(action.type){
        case PRASAD_DETAILS_REQ:
            return {
                loading: true,
                ...state,
            }
        case PRASAD_DETAILS_SUCCESS:
            return {
                loading: false,
                prasad: action.payload,
            }
        case PRASAD_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};