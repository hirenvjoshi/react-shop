import React from 'react';
import CollectionItem from './collection-item.component';

const CollectionPreview = ({title, items}) => (  
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
        <div className="section-header text-center">
            <h2 className="h2">{title.toUpperCase()}</h2>
        </div> 
        <div class="productList">
            <div class="grid-products grid--view-items">
                <div class="row">
                {
                    items
                        .filter((item,index) => index < 4)                         
                        .map( item => (
                            <div class="col-6 col-sm-6 col-md-4 col-lg-3 item">
                                <CollectionItem key={item.id} item={item} />
                            </div>
                        ))
                }
                </div>
            </div>
        </div>
    </div>
)


export default CollectionPreview;