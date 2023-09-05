import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";


import "./category.styles.scss";

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className="title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default Category;
