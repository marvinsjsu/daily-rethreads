import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import FormButton from '../FormButton/form-button.component';

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { isVisible } = useContext(CartContext);

    if (!isVisible) return null;

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <FormButton>Checkout</FormButton>
        </div>
    );
};

export default CartDropdown;
