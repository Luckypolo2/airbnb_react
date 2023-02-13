import React from 'react';
import {HeaderWrapper} from "@/components/section-header/style";
import PropTypes from "prop-types";

const SectionHeader = (props) => {
  const {title, subTitle} = props;
  const [enterState, setEnterState] = React.useState(false);
  function mouseEnter() {
    setEnterState(true)
  }
  function mouseLeave() {
    setEnterState(false)
  }
  return (
      <HeaderWrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <h2 className="title">{title}</h2>
        {subTitle && <div className="sub-title">{subTitle}</div>}
        {enterState && <i className="iconReact iconReactxiangzuojiantou icon"></i>}
      </HeaderWrapper>
  );
};
SectionHeader.prototype = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default React.memo(SectionHeader)
