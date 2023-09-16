import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import Home from "../../routes/home/home.component";
import Shop from "../../routes/shop/shop.component";
import Login from "../../routes/login/login.component";
import Checkout from "../../routes/checkout/checkout.component";
import Navigation from "../../routes/navigation/navigation.component";

import { UserActions } from '../../actions/user.actions';
import { CategoriesActions } from '../../actions/categories.actions';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.checkUserSession());
  }, []);

  useEffect(() => {
    dispatch(CategoriesActions.fetchCategoriesStart());
  }, []);

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Login />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
