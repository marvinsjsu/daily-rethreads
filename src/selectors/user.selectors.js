import { createSelector } from "reselect";


export const selectRootUser = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectRootUser],
    (rootUser) => rootUser.currentUser
);

export const selectUserIsLoading = createSelector(
    [selectRootUser],
    (rootUser) => rootUser.isLoading,
);

export const selectUserError = createSelector(
    [selectRootUser],
    (rootUser) => rootUser.error,
);
