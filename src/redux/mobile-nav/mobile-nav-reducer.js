import mobileNavActionTypes from "./mobile-nav-action-types";

const INITIAL_STATE ={
    mobileNavHidden: true,
}
const mobileNavReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case mobileNavActionTypes.TOGGLE_MOBILE_NAVIGATION :
            return {
                ...state,
                mobileNavHidden: !state.mobileNavHidden
            }        
        default:
            return state;
    }
}

export default mobileNavReducer;