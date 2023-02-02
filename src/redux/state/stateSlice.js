import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "states",
  initialState: {
    categories: [],
    products1: [],
    products2: [],
    products3: [],
    products4: [],
    categoryDetail: 4,
    page: 1,
    loading: true,
    bookDetail: {},
  },
  reducers: {
    editPage: (state, action) => {
      state.page = action.payload;
    },
    editCategories: (state, action) => {
      state.categories = action.payload;
    },
    editProducts1: (state, action) => {
      state.products1 = action.payload;
    },
    editProducts2: (state, action) => {
      state.products2 = action.payload;
    },
    editProducts3: (state, action) => {
      state.products3 = action.payload;
    },
    editProducts4: (state, action) => {
      state.products4 = action.payload;
    },
    editCategoryDetail: (state, action) => {
      state.categoryDetail = action.payload;
    },
    editBookDetail: (state, action) => {
      state.bookDetail = action.payload;
    },
  },
});

export const selectCategories = (state) => state.states.categories;

export const selectProducts1 = (state) => state.states.products1;

export const selectProducts2 = (state) => state.states.products2;

export const selectProducts3 = (state) => state.states.products3;

export const selectProducts4 = (state) => state.states.products4;

export const selectCategoryDetail = (state) => state.states.categoryDetail;

export const selectPage = (state) => state.states.page;

export const selectBookDetail = (state) => state.states.bookDetail;

export const {
  editPage,
  editCategories,
  editProducts1,
  editProducts2,
  editProducts3,
  editProducts4,
  editCategoryDetail,
  editBookDetail,
} = stateSlice.actions;
