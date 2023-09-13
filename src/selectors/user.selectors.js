import { createSelector } from "reselect";


export const selectRootUser = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectRootUser],
    (rootUser) => rootUser.currentUser
);
