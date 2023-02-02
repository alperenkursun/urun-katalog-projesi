import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "states/getStates",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/categories`
    );
    console.log(res);
    return res.data;
  }
);

export const stateSlice = createSlice({
  name: "states",
  initialState: { categories: {}, page: 1 },
  reducers: {
    editPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      console.log(action.payload);
    },
  },
});

export const selectCategories = (state) => state.states.categories;

export const selectPage = (state) => state.states.page;

export const { editPage } = stateSlice.actions;
