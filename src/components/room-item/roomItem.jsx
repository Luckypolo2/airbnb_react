import React from 'react';
import PropTypes from 'prop-types';
import {ItemWrapper} from "@/components/room-item/style";
import Rating from "@material-ui/lab/Rating";

const RoomItem = props => {
  const {itemData} = props;
  return (
      <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
        <div className="inner">
          <div className="cover">
            <img src={itemData.picture_url} alt=""/>
          </div>
          <div className="desc">
            {itemData.verify_info.messages.join('.')}
          </div>
          <div className="name">{itemData.name}</div>
          <div className="price">￥{itemData.price}/晚</div>
          <div className='bottom'>
            {/*?? 代表underfunded*/}
            <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly size={"small"}></Rating>
            <span className='count'>{itemData.reviews_count}</span>
            <span className='extra'>·{itemData?.bottom_info?.content}</span>
          </div>
        </div>
      </ItemWrapper>
  );
};

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default React.memo(RoomItem);
