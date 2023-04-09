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
  const [category, setCategory] = useState('');

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
      category={bookList[i].category}
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
      <div className="Line" />
      <form className="form-panel">
        <div className="add-new">
          ADD NEW BOOK
        </div>
        <div className="container-5">
          <label htmlFor="author">
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Book author"
              className="entry"
              size="150"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </label>

          <label htmlFor="title">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Book title"
              className="entry"
              size="100"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>

          <label htmlFor="category">
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Book category"
              className="entry"
              size="100"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </label>

          <button
            type="submit"
            className="Rectangle-4"
            onClick={(e) => {
              e.preventDefault();
              const id = uuid();
              dispatch(addBook({
                id, author, title, category,
              }));
              dispatch(addItemAxios({
                id,
                author,
                title,
                category,
              }));
            }}
          >
            <div className="add-book">
              ADD BOOK
            </div>

          </button>
        </div>

      </form>
    </>
  );
}
