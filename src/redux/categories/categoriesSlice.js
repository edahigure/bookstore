import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesList: [],
  status: false,
  msg: '',
};
/* eslint no-param-reassign: "error" */

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.status === false) {
        state.msg = 'under construction';
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
