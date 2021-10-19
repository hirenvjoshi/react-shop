import { createSelector } from "reselect";

const mobileNavHiddenSelector = state => state.mobilenavhidden;

export const selectMobileNavHidden = createSelector(
    [mobileNavHiddenSelector],
    mobilenavhidden => mobilenavhidden.mobileNavHidden
);