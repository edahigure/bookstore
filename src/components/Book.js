import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteItemAxios } from '../redux/books/booksSlice';

export default function Book(props) {
  const {
    author, title, id, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="Lesson-Panel">

      <div className="container-1">
        <ul className="book-data">
          <li className="category">{category}</li>
          <li className="title">{title}</li>
          <li className="author">{author}</li>
        </ul>
        <ul className="actions">
          <li>Comment</li>
          <li className="vl">
            <button
              type="submit"
              onClick={() => {
                dispatch(removeBook({ id }));
                dispatch(deleteItemAxios({ id }));
              }}
            >
              Remove
            </button>
          </li>
          <li className="vl">Edit</li>
        </ul>
      </div>

      <div className="container-2">
        <div className="circle-wrapper">
          <div className="circle" />
        </div>

        <div className="container-3">
          <div className="Percent-Complete">64%</div>
          <div className="Completed">Completed</div>
        </div>
      </div>

      <div className="container-4">
        <span className="Current-Chapter Text-Style-7">
          Current Chapter
        </span>
        <span className="Current-Lesson Text-Style-4">
          Chapter 17
        </span>
        <div className="Rectangle-2">
          <span className="Update-progress">
            UPDATE PROGRESS
          </span>
        </div>
      </div>
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
  id: PropTypes.string,
};

Book.defaultProps = {
  id: '',
};

Book.propTypes = {
  category: PropTypes.string,
};

Book.defaultProps = {
  category: 'action',
};
