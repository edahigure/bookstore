import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [
    {
      id: 0,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 1,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  id: 2,
};
/* eslint no-param-reassign: "error" */

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = {
        state,
        bookList: [...state.bookList,
          { id: state.id + 1, ...action.payload }],
        id: state.id + 1,
      };
      return newState;
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      const newState = {
        state,
        bookList: [...state.bookList.filter((item) => item.id !== id)],
        id: state.id - 1,
      };
      return newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
