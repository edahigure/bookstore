import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
  id: 0,
};
/* eslint no-param-reassign: "error" */
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.id += 1;
      state.bookList.push({ id: state.id, ...payload });
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      state.bookList = state.bookList.filter((item) => item.id !== id);
      state.id -= 1;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
