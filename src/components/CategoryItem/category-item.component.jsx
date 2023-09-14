import { useNavigate } from 'react-router-dom';

import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { title, imgUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className='category-item-container'
      onClick={onNavigateHandler}
    >
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
