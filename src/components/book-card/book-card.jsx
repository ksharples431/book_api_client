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
