import React from 'react';
import { Switch, Route } from 'react-router';
import CollectionOverview from '../components/collection/collection-overview';
import CollectionPage from './collectionpage.component';

const ShopPage = ({match}) => (
    <Switch>
        <Route path={`${match.path}`} component={CollectionOverview} exact />
        <Route path={`${match.path}/:collectionSlug`} component={CollectionPage} />
    </Switch>
);

export default ShopPage;