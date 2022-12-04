import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk(
  "products/get",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: []
  },
  reducers: { },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = '';
      state.data = [];
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = '';
      state.data = payload.products;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = payload || 'Error loading products';
      state.data = [];
    },
  }
})

export default productsSlice.reducer;