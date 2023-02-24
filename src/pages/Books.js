import Book from '../components/Book'

export default function Books() {
    return (
        <>
            <div>
                <Book author="Milton" title="The lost paradise"></Book>
            </div>

            <form>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" />
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" />
                <button>Submit</button>
            </form>
        </>
    );

}  