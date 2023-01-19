import React, {memo} from 'react';
import {useRoutes} from "react-router-dom";
import routes from "./router";
import AppHeader from "@/components/app-header/AppHeader";
import AppFooter from "@/components/app-footer/AppFooter";

const App = memo(() => {
  return (
      <div>
        <AppHeader></AppHeader>
        <div className={'page'}>
          {/*导入外部路由*/}
          {useRoutes(routes)}
        </div>
        <AppFooter></AppFooter>
      </div>
  );
});

export default App;
