const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease; //动画效果
    &:hover {
      // (x, y)偏移
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    `
  }
}
export default theme;
