import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PRmithaSusvwPf6DLuku/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addItemAxios = createAsyncThunk('books/addItemAxios', async (payload) => {
  const {
    id, author, title, category,
  } = payload;
  try {
    const resp = await axios.post(url, {
      item_id: id, author, title, category,
    });
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteItemAxios = createAsyncThunk('books/deleteItemAxios', async (payload) => {
  const { id } = payload;
  try {
    const resp = await axios.delete(`${url}/${id}`);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  bookList: [
  ],
  status: 'idle',
  error: null,
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
          { ...action.payload }],
      };
      return newState;
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      const newState = {
        state,
        bookList: [...state.bookList.filter((item) => item.id !== id)],
      };
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newBookList = [];
        Object.keys(action.payload).forEach((id) => {
          const newBook = {
            id,
            author: action.payload[id][0].author,
            title: action.payload[id][0].title,
            category: action.payload[id][0].category,
          };
          newBookList.push(newBook);
        });
        state.bookList = newBookList;
      });
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
