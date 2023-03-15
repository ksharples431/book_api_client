import PropTypes from 'prop-types';

import './book-card.scss'; 
export const BookCard = ({ book, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onBookClick(book);
      }}>
      {book.title}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string,
    series: PropTypes.string,
    number: PropTypes.number,
    description: PropTypes.string,
    owned: PropTypes.bool,
    // availability: PropTypes.array,
    read: PropTypes.bool,
    favorite: PropTypes.bool,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
