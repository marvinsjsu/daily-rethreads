import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { items, isVisible, setIsVisible } = useContext(CartContext);
    const itemCount = items.reduce((acc, item) => acc += item.quantity, 0);

    const onToggleIconHandler = () => setIsVisible(!isVisible);

    return (
        <div className="cart-icon-container" onClick={onToggleIconHandler} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
