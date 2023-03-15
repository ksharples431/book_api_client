import { useState } from 'react';
import { BookCard } from '../book-card/book-card';
import { BookView } from '../book-view/book-view';
import { LoginView } from '../login-view/login-view';

import './main-view.scss';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [books, setBooks] = useState([]);
  const [books, setBooks] = useState([
    {
      id: 1,
      number: 'Book 6',
      title: 'Code Zero',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
      image:
        'https://m.media-amazon.com/images/I/51SOvsjctML._SY344_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      number: 'Book 7',
      title: 'Predator One',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
      image: 'https://m.media-amazon.com/images/I/51HXmNQyfDL._SY300_.jpg',
    },
    {
      id: 3,
      number: 'Book 9',
      title: 'Dogs of War',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
      image: 'https://m.media-amazon.com/images/I/61SewB7GEZL._SY300_.jpg',
    },
    {
      id: 4,
      number: 'Book 1',
      title: 'Patient Zero',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
      image: 'https://m.media-amazon.com/images/I/41hEdTkxJ3L._SY300_.jpg',
    },
    {
      id: 5,
      number: 'Book 5',
      title: 'Extinction Machine',
      author: 'Jonathan Mayberry',
      genre: 'Science Fiction',
      series: 'Joe Ledger',
      image: 'https://m.media-amazon.com/images/I/51lIV+TNq2L._SY300_.jpg',
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return (
      <BookView
        book={selectedBook}
        onBackClick={() => setSelectedBook(null)}
      />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onBookClick={(newSelectedBook) => {
            setSelectedBook(newSelectedBook);
          }}
        />
      ))}
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}>
        Logout
      </button>
    </div>
  );
};

