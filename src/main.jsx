import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import { setIsMobile } from "./features/shared/isMobileSlice";

const handleWindowResize = () => {
  const isMobile = window.innerWidth > 991; // Örnek bir değer, değişebilir
  store.dispatch(setIsMobile(isMobile));
};

window.addEventListener("resize", handleWindowResize);
handleWindowResize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
