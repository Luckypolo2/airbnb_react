import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;
  .btnS {
    display: flex;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: #999;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .avatar ::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: red;
      border: 2px solid #fff;
      border-radius: 50%;
      position: absolute;
      top:0;
      right:8px;
    }
      .panel{
          position: absolute;
          right: 0;
          top:60px;
          width:240px;
          height: auto;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(0,0,0,0.18);
          border-radius: 10px;
          color: #666;
          .top,.bottom{
              padding: 10px 0;
              .item{
                  height: 40px;
                  line-height: 40px;
                  padding: 0 16px;
                  &:hover{
                      background-color: #f5f5f5;
                  }
              }
          }
          .top{
              border-bottom: 1px solid #ddd;
          }
      }
  }
`
