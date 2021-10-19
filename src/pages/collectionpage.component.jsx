import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shop-selector';
import CollectionItem from '../components/collection/collection-item.component';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <div className="collection-box collection-box-style1 section">
            <div className="container-fluid">                
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">{title}</h2>
                            <p>here is the collection of {title.toLowerCase()} from world's top fashion designer</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                        <div className="productList">
                            <div className="grid-products grid--view-items">
                                <div className="row">
                                {
                                    items                                
                                        .map( item => (
                                            <div className="col-6 col-sm-6 col-md-4 col-lg-3 item" key={item.id}>
                                                <CollectionItem item={item} />
                                            </div>
                                        ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )
};

const mapStateToProps = (state, ownProps) => ({
    //currying example
    collection: selectCollection(ownProps.match.params.collectionSlug)(state)
})

export default connect(mapStateToProps)(CollectionPage);