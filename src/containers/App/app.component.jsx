
import { Routes, Route } from "react-router-dom";

import Home from "../../routes/home/home.component";
import Login from "../../routes/login/login.component";
import Navigation from "../../routes/navigation/navigation.component";

const Shop = () => <h1>This is the shop</h1>;

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
