import SHOP_DATA from "../../config/shop-data";

const INITIAL_STATE = {
    collection: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;    
    }
}

export default shopReducer;