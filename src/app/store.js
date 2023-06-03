import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import chartReducer from "../features/dashboard/chartSlice";
import isMobileReducer from "../features/shared/isMobileSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    charts: chartReducer,
    isMobile: isMobileReducer,
  },
});
