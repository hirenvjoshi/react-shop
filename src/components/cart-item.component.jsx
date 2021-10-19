import React from 'react';
import { connect } from 'react-redux';
import { addItemAction,removeItemAction,clearItemFromCartAction } from '../redux/cart/cart-action';

const CartItem = ({item, addItemToCart, removeItemFromCart, clearItemFromCart}) => {
    const  {name, imageUrl, price, quantity} = item;
    return (
        <li className="item">
            <a className="product-image" href="#">
                <img src={imageUrl} alt={name} />
            </a>
            <div className="product-details">
                <button className="float-right" onClick={() => clearItemFromCart(item)}><i className="anm anm-times-l" aria-hidden="true"></i></button>
                {name}
                <div className="wrapQtyBtn">
                    <div className="qtyField">
                        <span className="label">Qty:</span>
                        <button className="qtyBtn minus" onClick={() => removeItemFromCart(item)}><i className="fa anm anm-minus-r" aria-hidden="true"></i></button>
                        <input type="text" id="Quantity" name="quantity" className="product-form__input qty" value={quantity} readOnly />
                        <button className="qtyBtn plus" onClick={() => addItemToCart(item)}><i className="fa anm anm-plus-r" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="priceRow">
                    <div className="product-price">
                        <span className="money">${price} x {quantity} = ${price * quantity}</span>
                    </div>
                </div>
            </div>
        </li>
    )
};

const mapPropsToDispatch = dispatch => ({
    addItemToCart: item => dispatch(addItemAction(item)),
    removeItemFromCart: item => dispatch(removeItemAction(item)),
    clearItemFromCart: item => dispatch(clearItemFromCartAction(item)),
});

export default connect(null,mapPropsToDispatch)(CartItem);