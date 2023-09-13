import { useSelector } from 'react-redux';

import CheckoutItem from "../../components/CheckoutItem/checkout-item.component";

import { selectCartItems, selectCartTotal } from "../../selectors/cart.selectors";

import "./checkout.styles.scss";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
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
                {cartItems.map(item => (
                    <CheckoutItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <div className="checkout-items-summary">
                <span>Total: ${cartTotal}</span>
            </div>
        </div>
    );
};

export default Checkout;
