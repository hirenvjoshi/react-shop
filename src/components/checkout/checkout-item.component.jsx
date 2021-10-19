import React from 'react';
import { connect } from 'react-redux';
import { addItemAction,removeItemAction,clearItemFromCartAction } from '../../redux/cart/cart-action';

const CheckoutItem = ({cartItem, addItemToCart, removeItemFromCart, clearItemFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <tr className="cart__row border-bottom line1 cart-flex border-top">
            <td className="cart__image-wrapper cart-flex-item">
                <a href="#"><img className="cart__image" src={imageUrl} alt={name} /></a>
            </td>
            <td className="cart__meta small--text-left cart-flex-item pl-4">
                <div className="list-view-item__title">
                    <a href="#">{name}</a>
                </div>
            </td>
            <td className="cart__price-wrapper cart-flex-item">
                <span className="money">${price}</span>
            </td>
            <td className="cart__update-wrapper cart-flex-item text-right">
                <div className="cart__qty text-center">
                    <div className="qtyField">
                        <button className="btn btn--secondary qtyBtn minus" onClick={() => removeItemFromCart(cartItem)}><i className="icon icon-minus"></i></button>
                        <input className="cart__qty-input qty" type="text" value={quantity} readOnly />
                        <button className="btn btn--secondary qtyBtn plus" onClick={() => addItemToCart(cartItem)}><i className="icon icon-plus"></i></button>
                    </div>
                </div>
            </td>
            <td className="text-right small--hide cart-price">
                <div><span className="money">${price * quantity}</span></div>
            </td>
            <td className="text-center small--hide">
                <button className="btn btn--secondary cart__remove" title="Remove Item" onClick={() => clearItemFromCart(cartItem)}>
                    <i className="icon icon anm anm-times-l"></i>
                </button>
            </td>
        </tr>
    )
};

const mapPropsToDispatch = dispatch => ({
    addItemToCart: item => dispatch(addItemAction(item)),
    removeItemFromCart: item => dispatch(removeItemAction(item)),
    clearItemFromCart: item => dispatch(clearItemFromCartAction(item)),
});

export default connect(null,mapPropsToDispatch)(CheckoutItem);