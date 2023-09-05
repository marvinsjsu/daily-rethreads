import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from '../FormButton/form-button.component';
import CartItem from "../CartItem/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { items, isVisible, setIsVisible } = useContext(CartContext);
    const navigate = useNavigate();

    if (!isVisible) return null;

    const onCheckoutClickHandler = () => {
        setIsVisible(!isVisible);
        navigate("/checkout");
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {items.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <FormButton
                type="button"
                onClick={onCheckoutClickHandler}
            >
                checkout
            </FormButton>
        </div>
    );
};

export default CartDropdown;
