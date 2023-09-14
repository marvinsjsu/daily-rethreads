import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    total: 0,
    items: [],
    isVisible: false,
    setIsVisible: () => null,
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    decreaseItemInCart: () => null,
    increaseItemInCart: () => null,
});

const getItemIndex = (cartItems, product) => {
    let itemIndex;
    cartItems.forEach((item, idx) => {
        if (item.id === product.id) {
            itemIndex = idx;
        }
    });

    return itemIndex;
}

const addCartItem = (cartItems, itemToAdd) => {
    const itemIndex = getItemIndex(cartItems, itemToAdd);

    if (itemIndex !== undefined) {
        let newItems = [...cartItems];
        newItems[itemIndex].quantity++;
        return newItems;
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
};

const decreaseItemQuantity = (cartItems, cartItem) => {
    return cartItems.map(item => {
        if (item.id === cartItem.id) {
            if (item.quantity > 0) {
                item.quantity--;
            }
        }

        return item;
    });
};

const increaseItemQuantity = (cartItems, cartItem) => {
    return cartItems.map(item => {
        if (item.id === cartItem.id) {
            item.quantity++;
        }

        return item;
    });
}

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const newTotal = items.reduce((total, item) => total + (item.quantity * item.price), 0);
        setTotal(newTotal);
    }, [items]);

    const addItemToCart = (itemToAdd) => setItems(addCartItem(items, itemToAdd));

    const removeItemFromCart = (itemToRemove) => setItems(removeCartItem(items, itemToRemove));

    const decreaseItemInCart = (cartItem) => setItems(decreaseItemQuantity(items, cartItem));

    const increaseItemInCart = (cartItem) => setItems(increaseItemQuantity(items, cartItem));

    const value = {
        items,
        total,
        isVisible,
        setIsVisible,
        addItemToCart,
        removeItemFromCart,
        decreaseItemInCart,
        increaseItemInCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

