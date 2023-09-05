import { useState, createContext } from "react";

export const CartContext = createContext({
    items: [],
    isVisible: false,
    setItems: () => null,
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

const updateItemQuantity = (cartItems, itemToUpdate, newQuantity) => {
    const itemIndex = getItemIndex(cartItems, itemToUpdate);
    const newCartItems = [...cartItems];
    newCartItems[itemIndex].quantity = newQuantity;
    return newCartItems;
}

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const addItemToCart = (itemToAdd) => setItems(addCartItem(items, itemToAdd));

    const removeItemFromCart = (itemToRemove) => setItems(removeCartItem(items, itemToRemove));

    const updateCartItemQuantity = (itemToUpdate, newQuantity) => setItems(updateItemQuantity(items, itemToUpdate, newQuantity));

    const value = { items, addItemToCart, removeItemFromCart, updateCartItemQuantity, isVisible, setIsVisible };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

