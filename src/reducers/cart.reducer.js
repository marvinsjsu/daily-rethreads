import { CartActionTypes } from "../actions/cart.actions";

const initialState = {
    cartItems: [],
    cartTotal: 0,
    cartCount: 0,
    isVisible: false,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case CartActionTypes.ADD_ITEM_TO_CART: {
            return {
                ...state,
                ...payload,
            };
        }
        case CartActionTypes.REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                ...payload,
            };
        }
        case CartActionTypes.DECREASE_ITEM_QTY_IN_CART: {
            return {
                ...state,
                ...payload,
            }
        }
        case CartActionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                isVisible: !state.isVisible,
            }
        default: {
            return state;
        }
    }
};

export default reducer;
