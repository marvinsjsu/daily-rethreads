import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import categoriesReducer from './categories.reducer';

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer,
};

export default rootReducer;
