import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import CartItem from "./cart-item.component";
import CustomButton from "./custom-button.component";
import { selectCartItems,selectCartTotal } from "../redux/cart/cart-selector";
import { toggleCartDropDownAction } from "../redux/cart/cart-action";

const CartDropDown = ({cartItems, total, history, dispatch}) => (
    <div id="header-cart" className="block block-cart">
        {
            cartItems.length 
            ?
            <ul className="mini-products-list">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </ul>
            :
            <p className="mt-4 text-center">Your cart is empty!</p>
        }
        
        <div className="total">
            <div className="total-in">
                <span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">${total}</span></span>
            </div>
            <div className="buttonSet text-center">                
                <CustomButton className="btn btn-secondary btn--small" onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartDropDownAction());
                }}>Checkout</CustomButton>
            </div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
    

export default withRouter(connect(mapStateToProps)(CartDropDown));