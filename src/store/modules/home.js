import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getHomeGoodPriceData} from "@/services";

export const fetchHomeDataAction = createAsyncThunk("fetchData",async () => {
  return await getHomeGoodPriceData()
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: []
  },
  reducers: {
    changeGoodPriceInfo(state, {payload}) {
      state.goodPriceInfo = payload;
    }
  },
  // pending(进行中) fulfilled(成功) rejected(失败)
  extraReducers: {
    [fetchHomeDataAction.fulfilled]: (state, {payload}) => {
      state.goodPriceInfo = payload;
    }
  }
})
export const {changeGoodPriceInfo} = homeSlice.actions;
export default homeSlice.reducer
