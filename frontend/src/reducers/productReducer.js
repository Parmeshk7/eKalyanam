import {ALL_PRODUCT_FAIL, ALL_PRODUCT_REQ, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS} from '../constants/productConstants';
import {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQ} from "../constants/productConstants"

export const productReducer = (state = {products: []}, action) => {
    switch(action.type){
        case ALL_PRODUCT_REQ:
            return {
                loading: true,
                product: []
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productCount: action.payload.productCount
            }
        case ALL_PRODUCT_FAIL:
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


export const productDetailsReducer = (state = {product : {}}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQ:
            return {
                loading: true,
                ...state,
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            }
        case PRODUCT_DETAILS_FAIL:
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