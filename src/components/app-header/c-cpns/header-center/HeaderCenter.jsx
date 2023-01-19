import React from 'react';
import {CenterWrapper} from "@/components/app-header/c-cpns/header-center/style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = () => {
  return (
      <CenterWrapper>
        <div className="text">
          搜素房源和体验
        </div>
        <div className="icon">
          <IconSearchBar/>
        </div>
      </CenterWrapper>
  );
};

export default React.memo(HeaderCenter) ;
