import React from 'react';
import { withRouter } from 'react-router-dom';

const CategoryItem = ({title, imageUrl, linkUrl, match}) => (
    <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4 mb-4">
        <div className="collection-grid-item">
            <a href={`${match.url}${linkUrl}`} className="collection-grid-item__link">            
                <img src={imageUrl} alt={title} />
                <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">{title}</h3>
                </div>            
            </a>
        </div>
    </div>
)

export default withRouter(CategoryItem);