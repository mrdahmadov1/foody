import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Offers from "./pages/Offers";
import Restaurants from "./pages/Restaurants";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/offers" element={<Offers />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/restaurants" element={<Restaurants />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
