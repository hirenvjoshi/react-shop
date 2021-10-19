import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';
import CollectionPreview from './collection-preview.component';

const CollectionOverview = ({collections}) => (
    <div className="collection-box collection-box-style1 section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="section-header text-center">
                        <h2 className="h2">SHOP</h2>
                        <p>collection from world's top fashion designer</p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />    
                ))
            }
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionOverview);