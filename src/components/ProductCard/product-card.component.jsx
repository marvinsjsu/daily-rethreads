import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import FormButton from "../FormButton/form-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    const { items, setItems } = useContext(CartContext);

    const onAddToCartHandler = () => {
        setItems([
            ...items,
            product,
        ]);
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
