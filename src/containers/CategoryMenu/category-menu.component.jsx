
import CategoryItem from "../../components/CategoryItem/category-item.component";

import { categories } from "../../constants";

import "./category-menu.styles.scss";

const CategoryMenu = () => {
    return (
        <div className='category-menu-container'>
            {categories.map(category => (
                <CategoryItem
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
};

export default CategoryMenu;
