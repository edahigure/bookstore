import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Book from '../components/Book';
import { addBook } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((store) => store.book);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

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
            dispatch(addBook({ author, title }));
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
