import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategory } from '../redux/category/category-selector';

import CategoryList from '../components/category/category-list.component';

const HomePage = ({categoryListItems}) => (	
	<CategoryList categoryListItems={categoryListItems} />		
);

const mapStateToProps = createStructuredSelector({
	categoryListItems: selectCategory
});

export default connect(mapStateToProps)(HomePage);