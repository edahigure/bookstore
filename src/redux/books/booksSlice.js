import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  bookList: [{
    id: 0,
    author: 'Milton',
    title: 'The lost paradise',
  },
  {
    id: 1,
    author: 'Cervantes',
    title: 'The Quijote',
  },
  {
    id: 3,
    author: 'Moises',
    title: 'Genesis',
  },
  ],
  id: 2,
};
/* eslint no-param-reassign: "error" */
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      console.log('payload', payload);
      state.bookList.push(payload);
      state.id += 1;
      console.log('id', state.id);
      console.log('state', current(state.bookList));
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      state.bookList = state.bookList.filter((item) => item.id !== id);
      state.id -= 1;
      console.log('ID', id);
      console.log('payload', action.payload);
      console.log('state', state.bookList);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
