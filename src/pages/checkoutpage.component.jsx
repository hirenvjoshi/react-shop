import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart-selector';
import CheckoutItem from '../components/checkout-item.component';

const CheckoutPage = ({cartItems,total}) => (   
    <div className="collection-box collection-box-style1 section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="section-header text-center">
                        <h2 className="h2">YOUR CART</h2>
                        <p>here is the list of items you added to your shopping cart!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                    <table className="cart1">
                        <thead className="cart__row cart__header">
                            <tr>
                                <th className="text-left">Product</th>
                                <th className="text-left pl-4">Description</th>
                                <th className="text-left">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Total</th>
                                <th className="action">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.length
                                ?
                                cartItems.map(cartItem => (
                                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                                ))
                                :
                                <tr colSpan="6" className="cart__row border-bottom line1 cart-flex border-top">
                                    <td className="pt-4 pb-4">Your cart is empty!</td>
                                </tr>
                            }                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-left pt-2"><button className="btn btn-secondary btn--small cart-continue">Continue shopping</button></td>
                                <td colSpan="2" className="text-right pt-2">
                                    <span className="text-right cart__subtotal-title cart__subtotal"><span className="money">${total}</span></span>                                            
                                </td>
                                <td>&nbsp;</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);