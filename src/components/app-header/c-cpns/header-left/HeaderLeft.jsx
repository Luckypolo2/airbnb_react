import React from 'react';
import {LeftWrapper} from "@/components/app-header/c-cpns/header-left/style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = () => {
  return (
      <LeftWrapper>
        <div className="logo">
          <IconLogo/>
        </div>
        <div>xxx</div>
      </LeftWrapper>
  );
};

export default React.memo(HeaderLeft);
