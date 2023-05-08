import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './reducers/productReducer';
import {prasadReducer, prasadDetailsReducer} from './reducers/prasadReducer';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    prasads: prasadReducer,
    prasadDetails: prasadDetailsReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;



