import { useSelector } from 'react-redux';

import CategoryPreview from "../../components/CategoryPreview/category-preview.component";

import { selectCategoriesMap } from '../../selectors/categories.selectors';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </>
    );
};

export default CategoriesPreview;
