import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { addBook } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((store) => store.book);

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
          <input id="author" name="author" type="text" />
        </label>

        <label htmlFor="title">
          Title:
          <input id="title" name="title" type="text" />
        </label>

        <button type="submit">Submit</button>
      </form>
      <button
        type="button"
        id="test_button"
        onClick={() => {
          dispatch(addBook({ id: 1, author: 'autor-1', title: 'title-1' }));
        }}
      >
        {' '}
        Test Add reducer
      </button>
    </>
  );
}
