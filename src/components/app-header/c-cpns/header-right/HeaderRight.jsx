import React, {useEffect, useState} from 'react';
import {RightWrapper} from "@/components/app-header/c-cpns/header-right/style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";

const HeaderRight = () => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    function handleDocumentClick() {
      setShowPanel(false);
    }
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  },[])
  const profileClickHandler = (e) => {
    e.stopPropagation()
    setShowPanel(!showPanel);
  }
  return (
      <RightWrapper>
        <div className="btnS">
          <span className="btn">登录</span>
          <span className="btn">注册</span>
          <span className="btn">
            <IconGlobal/>
          </span>
        </div>
        <div className="profile" onClick={profileClickHandler}>
          <IconProfileMenu/>
          <div className="avatar">
            <IconProfileAvatar/>
          </div>
          {showPanel && (<div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>)}
        </div>
      </RightWrapper>
  );
};

export default React.memo(HeaderRight) ;
