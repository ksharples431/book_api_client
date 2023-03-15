import { useState, useEffect } from 'react';
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
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch('https://my-books-series-tracker.herokuapp.com/books', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.map((book) => {
          return {
            id: book._id,
            image: book.image,
            title: book.title,
            author: book.author,
            genre: book.genre,
            series: book.series,
            number: book.number,
            description: book.description,
            owned: book.owned,
            // availibility: book.availibility,
            read: book.read,
            favorite: book.favorite,
          };
        });

        setBooks(booksFromApi);
      });
  }, [token]);

  if (!user) {
    return (
      <LoginView
        onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
    );
  }

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

