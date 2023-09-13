import { useDispatch } from 'react-redux';

import FormButton from "../FormButton/form-button.component";

import { CartActions } from "../../actions/cart.actions";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    
    const dispatch = useDispatch();

    const onAddToCartHandler = () => {
        dispatch(CartActions.addItemToCart(product));
    };

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <FormButton
                buttonType="inverted"
                onClick={onAddToCartHandler}
            >
                add to cart
            </FormButton>
        </div>
    );
};

export default ProductCard;
