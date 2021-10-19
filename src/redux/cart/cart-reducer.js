import cartActionTypes from "./cart-action-types";
import { addItemToCart,removeItemFromCart,clearItemFromCart } from "../../utils/cart.utils";

const INITIAL_STATE ={
    cartDropdownHidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN :
            return {
                ...state,
                cartDropdownHidden: !state.cartDropdownHidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                }  
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;