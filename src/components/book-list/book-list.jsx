import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './book-list.scss';

export const BookList = ({ book }) => {
  return (
    <ListGroup variant="flush" className="list-group">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start list">
        <div className="ms-2 me-auto">
          <Link
            style={{ textDecoration: 'none' }}
            to={`/books/${encodeURIComponent(book.id)}`}>
            <div className="fw-bold">{book.title}</div>
          </Link>
          {book.author}
        </div>
        <Button className="button" bg="primary">
          <i class="fi fi-rr-headphones"></i>
        </Button>
        <Button className="button" bg="primary">
          <i class="fi fi-rr-heart"></i>
        </Button>
        <Button className="button" bg="primary">
          <i class="fi fi-rr-heart"></i>
        </Button>
        <Button className="button" bg="primary">
          <i class="fi fi-rr-heart"></i>
        </Button>
        <Button className="button" bg="primary">
          <i class="fi fi-rr-heart"></i>
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

BookList.propTypes = {
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
};

// Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
