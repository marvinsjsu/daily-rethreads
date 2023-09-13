import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import Home from "../../routes/home/home.component";
import Shop from "../../routes/shop/shop.component";
import Login from "../../routes/login/login.component";
import Checkout from "../../routes/checkout/checkout.component";
import Navigation from "../../routes/navigation/navigation.component";

import { UserActions } from '../../actions/user.actions';
import { CategoriesActions, getCategories } from '../../actions/categories.actions';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(UserActions.setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    async function getCategories() {
      try {
        dispatch(CategoriesActions.fetchCategoriesStarted());
        const categories = await getCategoriesAndDocuments();
        dispatch(CategoriesActions.fetchCategoriesSucceeded(categories));
      } catch (error) {
        console.log('Error fetching categories: ', error.message);
        dispatch(CategoriesActions.fetchCategoriesFailed(error.message));
      }

    }

    getCategories();
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
