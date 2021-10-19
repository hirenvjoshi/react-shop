import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const shopSelector = state => state.shop;

export const selectCollections = createSelector(
    [shopSelector],
    shop => shop.collection
);

//Converting Object To Array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collection => Object.keys(collection).map(key => collection[key])
);

export const selectCollection = memoize(collectionUrlParam => 
    createSelector(
        [selectCollections],
        collection => collection[collectionUrlParam]
    )
);
