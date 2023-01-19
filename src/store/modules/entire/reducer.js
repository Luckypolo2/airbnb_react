const initialState = {
  currentPage: 3
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "entire/SET_ENTIRE":
      return action.payload;
    default:
      return state;
  }
}
export default reducer
