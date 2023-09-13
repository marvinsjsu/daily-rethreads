import { useDispatch, useSelector } from 'react-redux';

import { CartActions } from "../../actions/cart.actions";

import { selectCartCount } from "../../selectors/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount);
    
    const dispatch = useDispatch();

    const onToggleIconHandler = () => dispatch(CartActions.toggleCartVisibility());

    return (
        <div className="cart-icon-container" onClick={onToggleIconHandler} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
