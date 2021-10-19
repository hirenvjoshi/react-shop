//Represents overall redurecer bases on all of the reducers that it pulls in
//In order all reducers to combine we need to import combineReducer

import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import categoryReducer from "./category/category-reducer";
import shopReducer from "./shop/shop-reducer";
import mobileNavReducer from "./mobile-nav/mobile-nav-reducer";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

//We have to pass an object where 
//the key goes to the actual reducer we want
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    shop: shopReducer,
    mobilenavhidden: mobileNavReducer
});

export default persistReducer(persistConfig, rootReducer);