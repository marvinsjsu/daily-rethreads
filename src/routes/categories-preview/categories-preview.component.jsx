import { useSelector } from 'react-redux';

import CategoryPreview from "../../components/CategoryPreview/category-preview.component";
import Spinner from '../../components/Spinner/spinner.component';

import { selectCategoriesMap, selectIsLoading } from '../../selectors/categories.selectors';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={products}
            />
          );
        })     
      )}
    </>
  );
};

export default CategoriesPreview;
