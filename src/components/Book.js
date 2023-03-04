import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book(props) {
  const { author, title, id } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        author:
        {author}
      </div>
      <div>
        Title:
        {title}
      </div>
      <button
        type="submit"
        onClick={() => {
          dispatch(removeBook({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string,
};

Book.defaultProps = {
  author: 'none',
};

Book.propTypes = {
  title: PropTypes.string,
};

Book.defaultProps = {
  title: 'none',
};

Book.propTypes = {
  id: PropTypes.number,
};

Book.defaultProps = {
  id: 0,
};
