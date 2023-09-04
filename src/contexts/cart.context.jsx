import { useState, createContext } from "react";

export const CartContext = createContext({
    items: [],
    isVisible: false,
    setItems: () => null,
});

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const value = { items, setItems, isVisible, setIsVisible };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

