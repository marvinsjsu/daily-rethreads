import { createSelector } from 'reselect';

export const selectRootCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectRootCart],
    (rootCart) => rootCart.cartItems,
);

export const selectCartTotal = createSelector(
    [selectRootCart],
    (rootCart) => rootCart.cartTotal,
);

export const selectCartCount = createSelector(
    [selectRootCart],
    (rootCart) => rootCart.cartCount,
);

export const selectIsVisible = createSelector(
    [selectRootCart],
    (rootCart) => rootCart.isVisible,
);
