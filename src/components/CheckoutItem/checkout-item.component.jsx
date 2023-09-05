import { useContext } from "react";

import FormButton from "../FormButton/form-button.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss"

const CheckoutItem = ({ item }) => {
    const { name, price, quantity, imageUrl } = item;
    const { updateCartItemQuantity, removeItemFromCart } = useContext(CartContext);

    const onRemoveItemClickHandler = () => {
        removeItemFromCart(item);
    };

    const onIncreaseQuantityClickHandler = () => {
        updateCartItemQuantity(item, item.quantity + 1);
    };

    const onDecreaseQuantityClickHandler = () => {
        if (item.quantity > 0) {
            updateCartItemQuantity(item, item.quantity - 1);
        }
    };

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
            <FormButton
                type="button"
                onClick={onRemoveItemClickHandler}
            >
                remove
            </FormButton>
        </div>
    );
};

export default CheckoutItem;
