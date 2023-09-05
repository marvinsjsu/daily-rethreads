import { useContext } from "react";

import CheckoutItem from "../../components/CheckoutItem/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
    const { items, total } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-items-header">
                <span>Image</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div className="checkout-items">
                {items.map(item => (
                    <CheckoutItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <div className="checkout-items-summary">
                <span>Total: ${total}</span>
            </div>
        </div>
    );
};

export default Checkout;
