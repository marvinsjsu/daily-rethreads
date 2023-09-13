import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import FormButton from '../FormButton/form-button.component';
import CartItem from "../CartItem/cart-item.component";

import { CartActions } from "../../actions/cart.actions";

import { selectCartItems, selectIsVisible } from '../../selectors/cart.selectors';

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const isVisible = useSelector(selectIsVisible);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!isVisible) return null;

    const onCheckoutClickHandler = () => {
        dispatch(CartActions.toggleCartVisibility());
        navigate("/checkout");
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => (
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
