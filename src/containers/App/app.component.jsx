
import { Routes, Route } from "react-router-dom";

import Home from "../../routes/home/home.component";
import Shop from "../../routes/shop/shop.component";
import Login from "../../routes/login/login.component";
import Checkout from "../../routes/checkout/checkout.component";
import Navigation from "../../routes/navigation/navigation.component";

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
