import { useContext } from "react";

import FormButton from "../FormButton/form-button.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss"

const CheckoutItem = ({ item }) => {
    const { name, price, quantity, imageUrl } = item;
    const {
        removeItemFromCart,
        increaseItemInCart,
        decreaseItemInCart,
    } = useContext(CartContext);

    const onRemoveItemClickHandler = () => removeItemFromCart(item);

    const onIncreaseQuantityClickHandler = () => increaseItemInCart(item);

    const onDecreaseQuantityClickHandler = () => decreaseItemInCart(item);

    return (
        <div className="checkout-item-container">
            <img src={imageUrl} alt={name} />
            <span className="name">{name}</span>
            <span className="quantity">
                <button
                    type="button"
                    className="cta-item-quantity"
                    onClick={onDecreaseQuantityClickHandler}
                >
                    &lt;
                </button>
                {quantity}
                <button
                    type="button"
                    className="cta-item-quantity"
                    onClick={onIncreaseQuantityClickHandler}
                >
                    &gt;
                </button>
            </span>
            <span className="price">${price}</span>
            <button
                type="button"
                className="cta-remove-item"
                onClick={onRemoveItemClickHandler}
            >
                &#10005;
            </button>
        </div>
    );
};

export default CheckoutItem;
