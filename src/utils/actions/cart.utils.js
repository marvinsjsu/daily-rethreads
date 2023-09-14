
export const getCartTotal = (items) => {
    const value = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return value;
};

export const getCartCount = (items) => items.reduce((total, item) => total + item.quantity, 0);

export const findItemInCart = (cartItems, itemToFind) => {
    let itemIdx = false;
    cartItems.forEach((item, idx) => {
        if (item.id === itemToFind.id) {
            itemIdx = idx;
        }
    });

    return itemIdx;
};

export const addItemInCart = (cartItems, itemToAdd) => {
    const itemIdx = findItemInCart(cartItems, itemToAdd);
    const newCartItems = itemIdx === false
        ? [...cartItems, { ...itemToAdd, quantity: 1 }]
        : cartItems.map((item, idx) => {
            if (idx === itemIdx) {
                item.quantity++;
            }
            return item;
        });

    return newCartItems;
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
};

export const decreaseItemQuantityInCart = (cartItems, itemToDecreaseQuantity) => {
    const newCartItems = cartItems.map(item => {
        if (item.id === itemToDecreaseQuantity.id && item.quantity > 0) {
            item.quantity--;
        }
        return item;
    });

    return newCartItems;
};

export const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = getCartTotal(newCartItems);
    const newCartCount = getCartCount(newCartItems);

    return {
        cartTotal: newCartTotal,
        cartCount: newCartCount,
        cartItems: newCartItems,
    };
};

