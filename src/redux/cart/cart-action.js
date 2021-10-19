import cartActionTypes from "./cart-action-types";

export const toggleCartDropDownAction = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN    
});

export const addItemAction = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemAction = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCartAction = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});