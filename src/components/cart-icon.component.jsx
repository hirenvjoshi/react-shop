import React from "react";
import { connect } from "react-redux";
import { toggleCartDropDownAction } from "../redux/cart/cart-action";
import { selectCartItemsCount } from "../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggoleCartDropDown,itemsCount}) => (
    <span className="site-header__cart" title="Cart" onClick={toggoleCartDropDown}>
        <i className="icon anm anm-bag-l"></i>
        <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">{itemsCount}</span>
    </span>
)

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggoleCartDropDown: () => (dispatch(toggleCartDropDownAction()))
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);