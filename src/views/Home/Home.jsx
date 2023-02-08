import React, {memo} from 'react';
import {HomeWrapper} from "@/views/Home/style";
import HomeBanner from "@/views/Home/c-cpns/HomeBanner/HomeBanner";

const Home = memo(() => {
  return (
      <HomeWrapper>
        <HomeBanner></HomeBanner>
      </HomeWrapper>
  );
});

export default Home;
