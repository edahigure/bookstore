import PropTypes from 'prop-types';

export default function Book(props) {
  const { author, title } = props;
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
      <button type="submit"> Remove </button>
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
