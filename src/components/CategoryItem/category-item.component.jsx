

import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { title, imgUrl } = category;
    
    return (
        <div className='category-item-container'>
          <div
            style={{ backgroundImage: `url(${imgUrl})` }}
            className='background-image'
          />
          <div className='category-item-content'>
            <h4>{title}</h4>
            <p>Shop Now</p>
          </div>
        </div>
    );
};

export default CategoryItem;
