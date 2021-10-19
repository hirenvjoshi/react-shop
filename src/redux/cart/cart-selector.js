import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const selectCartItems = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acumalatedQty, cartItem) => (cartItem.quantity + acumalatedQty) ,0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acumalatedPrice, cartItem) => (acumalatedPrice + cartItem.price * cartItem.quantity) ,0)
);

export const selectCartDropDownHidden = createSelector(
    [cartSelector],
    cart => cart.cartDropdownHidden
);