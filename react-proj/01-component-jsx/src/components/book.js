import PropTypes from 'prop-types';

function Book({ title, author, price, type }) {
  return (
    <>
      <div className="Section__section">
        <div>
          <h1>이번주 베스트셀러</h1>
          <img src="/logo192.png"></img>
          <h2>Title: {title}</h2>
          <p>Author: {author}</p>
          <p>Price: ${price}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Book;
