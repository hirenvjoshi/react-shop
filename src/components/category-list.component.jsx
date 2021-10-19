import React from 'react';

import CategoryItem from './category-item.component';

const CategoryList = (props) => (
    <div className="collection-box collection-box-style1 section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="section-header text-center">
                        <h2 className="h2">Most Trending Collection</h2>
                        <p>collection from world's top fashion designer</p>
                    </div>
                </div>
            </div>
            <div className="row">
            {
                props.categoryListItems.map(({id, ...otherCategoryListProps}) => (                    
                   <CategoryItem key={id} {...otherCategoryListProps} /> 
                ))
            }
            </div>
        </div>
    </div>
)

export default CategoryList;