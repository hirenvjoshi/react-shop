import userActionTypes from "./user-action-types";

export const setCurrentUserAction = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});