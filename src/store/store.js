import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
const store = configureStore({
  reducer: {
    home: homeReducer, // rtk方式
    entire: entireReducer // 原始方式
  }
})
export default store;
