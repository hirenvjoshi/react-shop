import React from 'react';
import { connect } from 'react-redux';
import { addItemAction } from "../../redux/cart/cart-action";

const CollectionItem = ({item, addItem}) => {    
    const {name, price, imageUrl} =  item;
    return (
        <div className="col-12 item">
            <div className="product-image">
                <span className="grid-view-item__link">
                    <img className="primary" src={item.imageUrl} alt={name} title={name} />
                    <img className="hover" src={imageUrl} alt={name} title={name}></img>
                </span>
                <div className="variants add">
                    <button className="btn btn-addto-cart" type="button" tabIndex="0" onClick={() => addItem(item)}>Add To Cart</button>
                </div>
            </div>
            <div className="product-details text-center">
                <h3 className="pull-left">{name}</h3>
                <h3 className="pull-right">${price}</h3>
            </div>
        </div>
    )
}

const mapPropsToDispatch = dispatch => ({
    addItem: item => dispatch(addItemAction(item))
});

export default connect(null,mapPropsToDispatch)(CollectionItem);