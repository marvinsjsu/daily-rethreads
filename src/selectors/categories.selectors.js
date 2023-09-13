import { createSelector } from 'reselect';

export const selectRootCategories = (state) => state.categories;

export const selectCategories = createSelector(
  [selectRootCategories],
  (rootCategories) => rootCategories.categories,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
