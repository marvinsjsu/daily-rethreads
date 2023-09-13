import { useDispatch } from 'react-redux';

import { CartActions } from "../../actions/cart.actions";

import "./checkout-item.styles.scss"

const CheckoutItem = ({ item }) => {
    const { name, price, quantity, imageUrl } = item;

    const dispatch = useDispatch();

    const onRemoveItemClickHandler = () => dispatch(CartActions.removeItemFromCart(item));

    const onIncreaseQuantityClickHandler = () => dispatch(CartActions.addItemToCart(item));

    const onDecreaseQuantityClickHandler = () => dispatch(CartActions.decreaseItemQuantityInCart(item));

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
