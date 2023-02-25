import Book from '../components/Book';

export default function Books() {
  return (
    <>
      <div>
        <Book author="Milton" title="The lost paradise" />
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
    </>
  );
}
