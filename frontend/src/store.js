import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './reducers/productReducer';
import {prasadReducer, prasadDetailsReducer} from './reducers/prasadReducer';
import { forgotPasswordReducer, userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducers/orderReducer';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    prasads: prasadReducer,
    prasadDetails: prasadDetailsReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
});


let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;



