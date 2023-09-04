import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { items, isVisible, setIsVisible } = useContext(CartContext);

    const onToggleIconHandler = () => setIsVisible(!isVisible);

    return (
        <div className="cart-icon-container" onClick={onToggleIconHandler} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{items.length}</span>
        </div>
    );
};

export default CartIcon;
