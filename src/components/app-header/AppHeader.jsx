import React from 'react';
import {HeaderWrapper} from "@/components/app-header/style";
import HeaderLeft from "@/components/app-header/c-cpns/header-left/HeaderLeft";
import HeaderCenter from "@/components/app-header/c-cpns/header-center/HeaderCenter";
import HeaderRight from "@/components/app-header/c-cpns/header-right/HeaderRight";

const AppHeader = () => {
  return (
      <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </HeaderWrapper>
  );
};

export default React.memo(AppHeader) ;
