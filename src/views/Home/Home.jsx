import React, {memo, useEffect} from 'react';
import {HomeWrapper} from "@/views/Home/style";
import HomeBanner from "@/views/Home/c-cpns/HomeBanner/HomeBanner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionHeader from "@/components/section-header/sectionHeader";
import RoomItem from "@/components/room-item/roomItem";


const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch]);
  //使用shallowEqual进行优化,在组件决定是否被渲染之前,会进行一次浅层对比如果该组件依赖的state并没有被更改,就不会进行渲染
  const {goodPriceInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
  }), shallowEqual)
  return (
      <HomeWrapper>
        <HomeBanner></HomeBanner>
        <div className="content">
          <div className="good-price">
            <SectionHeader title={goodPriceInfo.title}></SectionHeader>
            <ul className="room-list">
              {goodPriceInfo.list?.slice(0,8).map(item => {
                return <RoomItem key={item.id} itemData={item}></RoomItem>
              })}
            </ul>
          </div>
        </div>
      </HomeWrapper>
  );
});

export default Home;
