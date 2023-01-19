import React from "react";
import {Navigate} from "react-router-dom";
// 页面懒加载  index.js 需开启Suspense异步加载组件
const Home = React.lazy(() => import("../views/Home/Home"));
const Entire = React.lazy(() => import("../views/Entire/Entire"));
const Detail = React.lazy(() => import("../views/Detail/Detail"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate> // 重定向
  },
  {
    path: '/home',
    element:<Home></Home>
  },
  {
    path: '/entire',
    element:<Entire></Entire>
  },
  {
    path: '/detail',
    element:<Detail></Detail>
  },
]
export default routes;
