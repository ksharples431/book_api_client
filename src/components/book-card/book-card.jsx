import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './book-card.scss';

export const BookCard = ({ book }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Link to={`/books/${encodeURIComponent(book.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>
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
