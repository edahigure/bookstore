import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
import Book from '../components/Book';
import { addBook, fetchBooks, addItemAxios } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const {
    bookList, status,
  } = useSelector((store) => store.book);

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const myBooks = [];
  for (let i = 0; i < bookList.length; i += 1) {
    const str = `book${i}`;
    myBooks.push(<Book
      key={str}
      author={bookList[i].author}
      title={bookList[i].title}
      id={bookList[i].id}
    />);
  }

  return (
    <>
      <div>
        {myBooks}
      </div>

      <form>
        <label htmlFor="author">
          Author:
          <input
            id="author"
            name="author"
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </label>

        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const id = uuid();
            dispatch(addBook({ id, author, title }));
            dispatch(addItemAxios({
              id,
              author,
              title,
              category: 'category',
            }));
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
