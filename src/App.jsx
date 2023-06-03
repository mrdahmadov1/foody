import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Offers from "./pages/Offers";
import Restaurants from "./pages/Restaurants";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import DynamicForm from "./UI/dynamicForm";
import { formAddProductProps } from "./pages/Dashboard/constants";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const { isMobile } = useSelector((state) => state.isMobile);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.login);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/");
    } else {
      navigate("/admin/login");
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <>
        <Header
          setIsOpenSidebar={setIsOpenSidebar}
          setIsOpenForm={setIsOpenForm}
        />
        {isOpenForm && (
          <DynamicForm {...formAddProductProps} setIsOpenForm={setIsOpenForm} />
        )}
        <div className="container">
          <div className="parent">
            <div className="div1">
              <Sidebar
                setIsOpenSidebar={setIsOpenSidebar}
                isOpenSidebar={isOpenSidebar}
              />
            </div>
            <div className={`${isMobile ? "div2" : "mobDiv2"}`}>
              <Routes>
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/" element={<Dashboard />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/offers" element={<Offers />} />
                <Route path="/admin/category" element={<Category />} />
                <Route path="/admin/restaurants" element={<Restaurants />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    );
  }
}

export default App;
