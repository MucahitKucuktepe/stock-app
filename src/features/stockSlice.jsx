import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories:[],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.apiData;
    },
    //! Destruction yaparak ham veriyi elde ettim
    // getStockSuccess: (state, { payload :{url,apiData} }) => {
    //   state.loading = false;
    //   state[url] = apiData;
    // },
    getPromiseSuccess:(state,{payload})=>{
      state.loading = false;
      state.products=payload[0].data
      state.purchases=payload[1].data
      state.brands=payload[2].data
      state.firms=payload[3].data

    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {fetchStart,fetchFail,getStockSuccess,getPromiseSuccess} = stockSlice.actions;

export default stockSlice.reducer;
