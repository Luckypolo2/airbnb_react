import React from 'react';
import {RightWrapper} from "@/components/app-header/c-cpns/header-right/style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";

const HeaderRight = () => {
  return (
      <RightWrapper>
        <div className="btnS">
          <span className="btn">登录</span>
          <span className="btn">注册</span>
          <span className="btn">
            <IconGlobal/>
          </span>
        </div>
        <div className="profile">
          <IconProfileMenu/>
          <div className="avatar">
            <IconProfileAvatar/>
          </div>
        </div>
      </RightWrapper>
  );
};

export default React.memo(HeaderRight) ;
