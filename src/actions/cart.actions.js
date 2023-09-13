import {
    addItemInCart,
    removeItemFromCart,
    updateCartItemsReducer,
    decreaseItemQuantityInCart,
} from "../utils/actions/cart.utils";


export const CartActionTypes = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    DECREASE_ITEM_QTY_IN_CART: 'DECREASE_ITEM_QTY_IN_CART',
    TOGGLE_CART_VISIBILITY: 'TOGGLE_VISIBILITY',
};

export const CartActions = {
    addItemToCart: (cartItem) => (dispatch, getState) => {
        const { cart } = getState();
        const newCartItems = addItemInCart(cart.cartItems, cartItem);
        const payload = updateCartItemsReducer(newCartItems);

        dispatch({
            type: CartActionTypes.ADD_ITEM_TO_CART,
            payload,
        });
    },
    removeItemFromCart: (cartItem) => (dispatch, getState) => {
        const { cart } = getState();
        const newCartItems = removeItemFromCart(cart.cartItems, cartItem);
        const payload = updateCartItemsReducer(newCartItems);

        dispatch({
            type: CartActionTypes.REMOVE_ITEM_FROM_CART,
            payload,
        });
    },
    decreaseItemQuantityInCart: (cartItem) => (dispatch, getState) => {
        const { cart } = getState();
        const newCartItems = decreaseItemQuantityInCart(cart.cartItems, cartItem);
        const payload = updateCartItemsReducer(newCartItems);

        dispatch({
            type: CartActionTypes.DECREASE_ITEM_QTY_IN_CART,
            payload,
        });
    },
    toggleCartVisibility: () => ({
        type: CartActionTypes.TOGGLE_CART_VISIBILITY,
    }),
};
