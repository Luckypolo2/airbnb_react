import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";

import App from './App';
import 'normalize.css' // css重置
import './assets/css/index.less'
import store from "./store/store"; // 全局样式
import theme from "@/assets/theme/theme";
import '@/assets/font/iconfont.css' // 字体图标

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading">
      {/*Suspense异步加载组件-懒加载路由*/}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
);

